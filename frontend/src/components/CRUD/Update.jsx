import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Update() {
    const [product, setProduct] = useState({
        product_name: '',
        price: '',
        product_image: '',
    });

    const location = useLocation();
    const navigate = useNavigate(); // Replacing useHistory with useNavigate
    const productId = new URLSearchParams(location.search).get('id'); // Extract product ID from query string

    // Fetch the product data based on the product ID
    useEffect(() => {
        if (productId) {
            fetch(`https://eventiz-webpage-backend.onrender.com/api/products/${productId}`)
                .then(response => response.json())
                .then(data => setProduct(data))
                .catch(error => console.error('Error fetching product:', error));
        }
    }, [productId]);

    // Handle form submission to update the product
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://eventiz-webpage-backend.onrender.com/api/products/${productId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product),
        })
            .then(response => {
                if (response.ok) {
                    navigate('/view-all'); // Redirect to the product list page after updating
                } else {
                    console.error('Error updating product');
                }
            })
            .catch(error => console.error('Error:', error));
    };

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    return (
        <div className="container">
            <h3>Update Product</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="product_name" className="form-label">Product Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="product_name"
                        name="product_name"
                        value={product.product_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Product Price ($)</label>
                    <input
                        type="number"
                        className="form-control"
                        id="price"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="product_image" className="form-label">Product Image URL</label>
                    <input
                        type="text"
                        className="form-control"
                        id="product_image"
                        name="product_image"
                        value={product.product_image}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn text-white" style={{ backgroundColor: '#F8669E' }}>
                    Update Product
                </button>
            </form>
        </div>
    );
}

export default Update;
