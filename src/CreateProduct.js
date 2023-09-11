// CreateProduct.js
import React, { useState } from 'react';

function CreateProduct() {
  const [product, setProduct] = useState({ name: '', description: '', price: 0 });

  const handleCreate = () => {
    // Implement the logic to send a POST request to create a new product4
    alert("hi");
  };

  return (
    <div>
      <h2>Create Product</h2>
      {/* Input fields for product details */}
      <button onClick={handleCreate}>Create</button>
    </div>
  );
}

export default CreateProduct;
