import React, { useState } from "react";

const ProductForm = ({ product, updater }) => {
  const [formData, setFormData] = useState({
    title: "",
    desc1: "",
    desc2: "",
    desc3: "",
    newPrice: "",
    oldPrice: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Combine descriptions into an array (remove undefined, empty, or null)
    const desc = [formData.desc1, formData.desc2, formData.desc3].filter(
      (item) => item && item.trim() !== ""
    );

    // Create a new product object with the array
    const newProduct = {
      title: formData.title,
      description: desc,
      newPrice: formData.newPrice,
      oldPrice: formData.oldPrice,
    };

    console.log("New Product:", newProduct);

    // Pass the new product to the updater function
    updater(newProduct);

    console.log("Form Data Submitted:", newProduct);

    // Optional: Reset the form after submission
    setFormData({
      title: "",
      desc1: "",
      desc2: "",
      desc3: "",
      newPrice: "",
      oldPrice: "",
    });
  };

  return (
    <div
      style={{
        maxWidth: "100%",
        margin: "0",
        padding: "1rem",
        borderRadius: "8px",
      }}
    >
      <h2>Product Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Product Title */}
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="title"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Product Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
            required
          />
        </div>

        {/* Product Descriptions */}
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="desc1"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Description 1
          </label>
          <input
            type="text"
            id="desc1"
            name="desc1"
            value={formData.desc1}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="desc2"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Description 2
          </label>
          <input
            type="text"
            id="desc2"
            name="desc2"
            value={formData.desc2}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="desc3"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Description 3
          </label>
          <input
            type="text"
            id="desc3"
            name="desc3"
            value={formData.desc3}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        {/* Prices */}
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="newPrice"
            style={{ display: "block", marginBottom: "5px" }}
          >
            New Price
          </label>
          <input
            type="number"
            id="newPrice"
            name="newPrice"
            value={formData.newPrice}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="oldPrice"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Old Price
          </label>
          <input
            type="number"
            id="oldPrice"
            name="oldPrice"
            value={formData.oldPrice}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
