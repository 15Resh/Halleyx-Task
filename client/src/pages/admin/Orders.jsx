import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/orders', { withCredentials: true }).then(res => {
      if (res.data.success) {
        setOrders(res.data.orders);
      }
    });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Orders</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th>User</th>
            <th>Items</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o._id}>
              <td>{o.user?.name} ({o.user?.email})</td>
              <td>{o.items.map(i => `${i.title} x ${i.quantity}`).join(', ')}</td>
              <td>${o.totalAmount}</td>
              <td>{o.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
