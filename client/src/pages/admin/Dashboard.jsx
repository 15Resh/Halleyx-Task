// Admin Dashboard UI
import React from 'react'
import { Card, CardContent } from '../../components/ui/card'
import { Users, Package, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'
import AdminNav from './AdminNav'

const Dashboard = () => {
  // These values should ideally be fetched from the server
  const totalProducts = 120
  const totalCustomers = 310
  const orders = {
    pending: 12,
    processing: 7,
    shipped: 5
  }

  return (
    <div className="p-6 space-y-6">
      <AdminNav />
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="bg-purple-100">
          <CardContent className="flex items-center justify-between p-4">
            <div>
              <h3 className="text-lg font-semibold">Total Products</h3>
              <p className="text-xl">{totalProducts}</p>
            </div>
            <Package className="w-8 h-8 text-purple-600" />
          </CardContent>
        </Card>

        <Card className="bg-blue-100">
          <CardContent className="flex items-center justify-between p-4">
            <div>
              <h3 className="text-lg font-semibold">Total Customers</h3>
              <p className="text-xl">{totalCustomers}</p>
            </div>
            <Users className="w-8 h-8 text-blue-600" />
          </CardContent>
        </Card>

        <Card className="bg-green-100">
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">Orders</h3>
            <ul className="space-y-1">
              <li>Pending: {orders.pending}</li>
              <li>Processing: {orders.processing}</li>
              <li>Shipped: {orders.shipped}</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard

