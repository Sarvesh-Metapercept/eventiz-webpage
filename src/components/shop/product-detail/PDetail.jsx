import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PDetail() {
    const [product, setProduct] = useState(null);
    const [messageVisible, setMessageVisible] = useState(false);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');

        fetch('productListData.json')
            .then(response => response.json())
            .then(products => {
                const foundProduct = products.find(p => p.id == productId);

                if (foundProduct) {
                    setProduct(foundProduct);
                } else {
                    document.body.innerHTML = '<h5 class="container mt-5">Select a Specific Item for Product Details from the <a href="/product-list">Product List</a></h5>';
                }
            })
            .catch(error => console.error('Error loading JSON:', error));
    }, []);

    const addToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push({ ...product });
        localStorage.setItem('cart', JSON.stringify(cart));
        setMessageVisible(true);
        setTimeout(() => setMessageVisible(false), 2000);
    };

    if (!product) {
        return <div>Loading...</div>; 
    }

    return (
        <div className="container my-5">
            {/* Product Section */}
            <div className="row">
                <div className="col-md-6 text-center">
                    <div id="product-image-section">
                        <img src={product.product_image} alt={product.product_name} className="main-product-image" width={300}/>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <img src="https://eventizvue.htmldesigntemplates.com/assets/Travel%20Bag.H03.2k-IPt6QVG_.png" className="thumbnail-img" alt="Thumbnail 1" />
                        <img src="https://eventizvue.htmldesigntemplates.com/assets/Yellow%20Cloth%20Puff.H03.2k-0XMVapxE.png" className="thumbnail-img" alt="Thumbnail 2" />
                        <img src="https://eventizvue.htmldesigntemplates.com/assets/Travel%20Bag.H03.2k-IPt6QVG_.png" className="thumbnail-img" alt="Thumbnail 3" />
                        <img src="https://eventizvue.htmldesigntemplates.com/assets/Yellow%20Cloth%20Puff.H03.2k-0XMVapxE.png" className="thumbnail-img" alt="Thumbnail 4" />
                    </div>
                </div>

                {/* Product Details */}
                <div className="col-md-6">
                    <h1 className="product-title">{product.product_name}</h1>
                    <p>{product.description}</p>
                    <p id="product-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
                <p id="product-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
                <p id="product-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
                    <hr />
                    <p>
                        <strong>Category:</strong> {product.category || 'Clothes'}
                    </p>
                    <p className="product-price clr">${product.price.toFixed(2)}</p>
                    <div className="input-group my-3">
                        <div className="input-group-append">
                            <button
                                onClick={addToCart}
                                className="btn text-white font-weight-bold"
                                style={{ backgroundColor: "#F8669E" }}
                            >
                                Add To Cart
                            </button>
                        </div>
                        <div className="cart-btn">
                            <Link to="/product-cart">
                                <button
                                    className="btn text-white font-weight-bold ms-3"
                                    style={{ backgroundColor: "#F8669E" }}
                                >
                                    View Cart
                                </button>
                            </Link>
                        </div>
                    </div>
                    {messageVisible && (
                        <div id="message" className="text-success font-weight-bold">
                            <h6>Product Added Successfully!</h6>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PDetail;
