import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('/api/products');
      if (res.data.success) {
        setProducts(res.data.products);
      } else {
        toast.error('Failed to fetch products');
      }
    } catch (error) {
      toast.error('Error fetching products');
    }
  };

  return (
    <div style={{ maxWidth: 900, margin: 'auto', padding: 20 }}>
      <h1>All Products</h1>
      <Link to="/admin/products/new">
        <button style={{ marginBottom: 20 }}>+ Add Product</button>
      </Link>

      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        <table width="100%" border="1" cellPadding="10" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#eee' }}>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td><img src={product.image} alt={product.name} width={80} /></td>
                <td>{product.name}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>{product.stock || 0}</td>
                <td>
                  <button
                    onClick={() => navigate(`/admin/products/${product._id}/edit`)}
                    style={{ marginRight: 10 }}
                  >
                    Edit
                  </button>
                  {/* You can add Delete button here too */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminProducts;
