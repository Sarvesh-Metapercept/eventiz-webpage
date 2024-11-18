import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ViewAll() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://eventiz-webpage-backend.onrender.com/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error loading JSON:', error));
    }, []);

    const handleDelete = (id) => {
        fetch(`https://eventiz-webpage-backend.onrender.com/api/products/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    setProducts(products.filter(product => product.id !== id)); // Update UI after deletion
                } else {
                    console.error('Error deleting product');
                }
            })
            .catch(error => console.error('Error:', error));
    };

    return (
        <div className="container">
            <Link
                to="/create"
                className="btn text-white mt-3"
                style={{ backgroundColor: '#F8669E' }}>Add New Product</Link>
            <table className="table">
                <thead>
                    <tr className="all-products">
                        <th>Product No</th>
                        <th>Product Name</th>
                        <th>Product Image</th>
                        <th>Product ID</th>
                        <th>Product Price ($)</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody id="productTableBody">
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.product_name}</td>
                            <td>
                                <img
                                    src={product.product_image}
                                    alt={product.product_name}
                                    style={{ width: '50px', height: '50px' }}
                                />
                            </td>
                            <td>{product.id}</td>
                            <td>{product.price.toFixed(2)}</td>
                            <td>
                                <Link
                                    to={`/product-detail?id=${product.id}`}
                                    className="btn text-white"
                                    style={{ backgroundColor: '#F8669E' }}
                                >
                                    View
                                </Link>

                                <Link
                                    to={`/update?id=${product.id}`}  // Pass the product ID as a query parameter
                                    className="btn text-white ms-2"
                                    style={{ backgroundColor: '#F8669E' }}
                                >
                                    Update
                                </Link>

                                <button
                                    onClick={() => handleDelete(product.id)}
                                    className="btn text-white ms-2"
                                    style={{ backgroundColor: '#F8669E' }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ViewAll;
