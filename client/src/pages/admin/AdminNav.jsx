import React from 'react'
import { Link } from 'react-router-dom'

const AdminNav = () => {
  return (
    <nav className="mb-6 border-b pb-4 flex gap-4 text-sm font-medium text-gray-700">
      <Link to="/admin/dashboard" className="hover:underline">Dashboard</Link>
      <Link to="/admin/products" className="hover:underline">Products</Link>
      <Link to="/admin/users" className="hover:underline">Customers</Link>
      <Link to="/admin/orders" className="hover:underline">Orders</Link>
      <Link to="/admin/settings" className="hover:underline">Settings</Link>
      <Link to="/login" className="text-red-600 hover:underline ml-auto">Logout</Link>
    </nav>
  )
}

export default AdminNav
