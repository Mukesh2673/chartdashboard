// ProductTable.js
import React, { useState } from 'react';
import './style.css';

// Sample product data (you'd typically fetch this from an API)
const initialProducts = [
  { id: 1, name: 'Wireless Earbuds', price: 59.99, stock: 150, category: 'Electronics', status: 'Active' },
  { id: 2, name: 'Leather Jacket', price: 129.99, stock: 45, category: 'Clothing', status: 'Active' },
  { id: 3, name: 'Smart Watch', price: 199.99, stock: 75, category: 'Electronics', status: 'Out of Stock' },
  { id: 4, name: 'Running Shoes', price: 89.99, stock: 200, category: 'Footwear', status: 'Active' },
];

const ProductTable = () => {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle product status toggle
  const toggleStatus = (id) => {
    setProducts(products.map(product =>
      product.id === id 
        ? { ...product, status: product.status === 'Active' ? 'Inactive' : 'Active' }
        : product
    ));
  };

  return (
    <div className="product-table-container">
      <div className="table-header">
        <h2>Product Management</h2>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Category</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.stock}</td>
              <td>{product.category}</td>
              <td>
                <span className={`status ${product.status.toLowerCase()}`}>
                  {product.status}
                </span>
              </td>
              <td>
                <button className="action-btn edit">Edit</button>
                <button 
                  className="action-btn toggle"
                  onClick={() => toggleStatus(product.id)}
                >
                  {product.status === 'Active' ? 'Deactivate' : 'Activate'}
                </button>
                <button className="action-btn delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredProducts.length === 0 && (
        <div className="no-results">No products found</div>
      )}
    </div>
  );
};

export default ProductTable;