// src/components/CardForm.js
import React, { useState } from "react";

const CardForm = ({ onAddProduct }) => {
  const [product, setProduct] = useState({ id: "", name: "", price: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(product);
    setProduct({ id: "", name: "", price: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="id"
        placeholder="ID"
        value={product.id}
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={product.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="price"
        placeholder="Price"
        value={product.price}
        onChange={handleChange}
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default CardForm;
