import React, { useState } from "react";
import OrderTable from "../../../components/orders/OrderTable";

const AdminOrdersPage = () => {
  const [filters, setFilters] = useState({
    status: "",
    customer: "",
    dateRange: { from: "", to: "" },
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6 pt-24">
      <h2 className="text-2xl font-semibold mb-4">Orders</h2>

      {/* Filters */}
      <div className="mb-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <select
          name="status"
          value={filters.status}
          onChange={handleFilterChange}
          className="p-2 border rounded"
        >
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="processing">Processing</option>
          <option value="shipped">Shipped</option>
          <option value="complete">Complete</option>
        </select>

        <input
          type="text"
          name="customer"
          placeholder="Customer name/email"
          value={filters.customer}
          onChange={handleFilterChange}
          className="p-2 border rounded"
        />

        <input
          type="date"
          name="dateFrom"
          value={filters.dateRange.from}
          onChange={(e) =>
            setFilters({ ...filters, dateRange: { ...filters.dateRange, from: e.target.value } })
          }
          className="p-2 border rounded"
        />
      </div>

      {/* Orders Table */}
      <OrderTable filters={filters} />
    </div>
  );
};

export default AdminOrdersPage;
