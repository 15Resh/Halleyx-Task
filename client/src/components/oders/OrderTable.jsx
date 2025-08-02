import React, { useState } from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";

const mockOrders = [
  {
    _id: "ORD001",
    customer: "Alice",
    status: "Pending",
    total: 50.0,
  },
  {
    _id: "ORD002",
    customer: "John",
    status: "Shipped",
    total: 30.0,
  },
];

const OrderTable = () => {
  const [orders, setOrders] = useState(mockOrders);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="py-2 px-4">#</th>
            <th className="py-2 px-4">Order ID</th>
            <th className="py-2 px-4">Customer</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Total</th>
            <th className="py-2 px-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order._id} className="border-t hover:bg-gray-50">
              <td className="py-2 px-4">{index + 1}</td>
              <td className="py-2 px-4">{order._id}</td>
              <td className="py-2 px-4">{order.customer}</td>
              <td className="py-2 px-4">{order.status}</td>
              <td className="py-2 px-4">${order.total.toFixed(2)}</td>
              <td className="py-2 px-4 text-right space-x-2">
                <button className="text-blue-600 hover:underline">
                  <Eye size={18} />
                </button>
                <button className="text-yellow-600 hover:underline">
                  <Pencil size={18} />
                </button>
                <button className="text-red-600 hover:underline">
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
