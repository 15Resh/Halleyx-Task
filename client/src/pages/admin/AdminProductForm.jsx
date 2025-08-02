import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import './AdminProductForm.css';


const AdminProductForm = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // if id exists, it's edit mode

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
    stock: "",
  });

  // Load existing product data if editing
  useEffect(() => {
    if (id) {
      axios
        .get(`/api/products/${id}`)
        .then((res) => {
          if (res.data.success) {
            setFormData(res.data.product);
          } else {
            toast.error("Failed to load product data");
          }
        })
        .catch(() => toast.error("Failed to load product data"));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.price) {
      return toast.error("Name and Price are required");
    }

    try {
      if (id) {
        // Update existing product
        const res = await axios.put(`/api/products/${id}`, formData);
        if (res.data.success) {
          toast.success("Product updated successfully");
          navigate("/admin/products");
        } else {
          toast.error("Failed to update product");
        }
      } else {
        // Create new product
        const res = await axios.post("/api/products", formData);
        if (res.data.success) {
          toast.success("Product added successfully");
          navigate("/admin/products");
        } else {
          toast.error("Failed to add product");
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="admin-product-form">
      <h2>{id ? "Edit Product" : "Add New Product"}</h2>
      <form onSubmit={handleSubmit}>
        <label>Name*</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <label>Price* (in USD)</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          min="0"
          step="0.01"
        />

        <label>Image URL</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />

        <label>Category</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />

        <label>Stock Quantity</label>
        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          min="0"
        />

        <button type="submit">{id ? "Update Product" : "Add Product"}</button>
      </form>
    </div>
  );
};

export default AdminProductForm;
