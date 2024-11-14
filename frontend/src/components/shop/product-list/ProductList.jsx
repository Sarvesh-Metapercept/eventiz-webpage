import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error loading JSON:', error));
    }, []);

    const itemsPerPage = 10; // Items per page
    const [currentPage, setCurrentPage] = useState(1); // Current page
    const totalPages = Math.ceil(products.length / itemsPerPage); // Total number of pages

    // Function to get the products for the current page
    const paginateProducts = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return products.slice(startIndex, endIndex);
    };

    // Function to handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    {/* Main Shopping Cards */}
                    <div className="col-md-8">
                        <div id="product-container" className="row">
                            {paginateProducts().map((product) => (
                                <div key={product.id} className="col-md-6 mb-4">
                                    <div className="card">
                                        <Link
                                            to={`/product-detail?id=${product.id}`}
                                            style={{ textDecoration: 'none', color: 'inherit' }}
                                        >
                                            <img
                                                src={product.product_image}
                                                className="card-img-top"
                                                alt={product.product_name}
                                            />
                                            <div className="card-body text-center">
                                                <h5 className="card-title">{product.product_name}</h5>
                                                <h5 className="clr">${product.price.toFixed(2)}</h5>
                                            </div>
                                        </Link>
                                        <Link
                                            to={`/product-detail?id=${product.id}`}
                                            className="btn text-white mt-2"
                                            style={{ backgroundColor: '#F8669E' }}
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination Controls */}
                        <div className="d-flex justify-content-center mt-4">
                            <nav aria-label="Page navigation">
                                <ul className="pagination">
                                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                        <button
                                            className="page-link"
                                            onClick={() => handlePageChange(currentPage - 1)}
                                        >
                                            Previous
                                        </button>
                                    </li>
                                    {[...Array(totalPages).keys()].map((pageNum) => (
                                        <li
                                            key={pageNum}
                                            className={`page-item ${currentPage === pageNum + 1 ? 'active' : ''}`}
                                        >
                                            <button
                                                className="page-link"
                                                onClick={() => handlePageChange(pageNum + 1)}
                                            >
                                                {pageNum + 1}
                                            </button>
                                        </li>
                                    ))}
                                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                        <button
                                            className="page-link"
                                            onClick={() => handlePageChange(currentPage + 1)}
                                        >
                                            Next
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    {/* Sidebar */}
                    <div className="col-md-4">
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="a-tag" type="submit">
                                Search
                            </button>
                        </form>
                        <div className="row mt-3">
                            <div className="col-sm">
                                <img
                                    src="https://eventizvue.htmldesigntemplates.com/assets/Picnic%20Basket.H03.2k-cFsVd5xR.png"
                                    className="img-thumbnail"
                                    alt="..."
                                />
                                <img
                                    src="https://eventizvue.htmldesigntemplates.com/assets/Picnic%20Basket.H03.2k-cFsVd5xR.png"
                                    className="img-thumbnail"
                                    alt="..."
                                />
                                <img
                                    src="https://eventizvue.htmldesigntemplates.com/assets/Picnic%20Basket.H03.2k-cFsVd5xR.png"
                                    className="img-thumbnail"
                                    alt="..."
                                />
                                <img
                                    src="https://eventizvue.htmldesigntemplates.com/assets/Picnic%20Basket.H03.2k-cFsVd5xR.png"
                                    className="img-thumbnail"
                                    alt="..."
                                />
                            </div>
                            <div className="col-sm">
                                <img
                                    src="https://eventizvue.htmldesigntemplates.com/assets/Picnic%20Basket.H03.2k-cFsVd5xR.png"
                                    className="img-thumbnail"
                                    alt="..."
                                />
                                <img
                                    src="https://eventizvue.htmldesigntemplates.com/assets/Picnic%20Basket.H03.2k-cFsVd5xR.png"
                                    className="img-thumbnail"
                                    alt="..."
                                />
                                <img
                                    src="https://eventizvue.htmldesigntemplates.com/assets/Picnic%20Basket.H03.2k-cFsVd5xR.png"
                                    className="img-thumbnail"
                                    alt="..."
                                />
                                <img
                                    src="https://eventizvue.htmldesigntemplates.com/assets/Picnic%20Basket.H03.2k-cFsVd5xR.png"
                                    className="img-thumbnail"
                                    alt="..."
                                />
                            </div>
                        </div>
                        {/* Recent Products */}
                        <div className="sidebar border p-3 mt-4 rounded">
                            <h5>Recent Products</h5>
                            <div className="recent-item d-flex align-items-center mb-3">
                                <img
                                    src="https://eventizvue.htmldesigntemplates.com/assets/Yellow%20Cloth%20Puff.H03.2k-0XMVapxE.png"
                                    width={60}
                                    height={60}
                                    className="me-3"
                                    alt="Yellow Sofa Set"
                                />
                                <div>
                                    <p className="mb-0">Yellow Sofa Set</p>
                                    <small>10 Apr 2023</small>
                                </div>
                            </div>
                            <div className="recent-item d-flex align-items-center mb-3">
                                <img
                                    src="https://htmldesigntemplates.com/html/eventiz/images/products/Travel%20Bag.H03.2k.png"
                                    width={60}
                                    height={60}
                                    className="me-3"
                                    alt="Yellow Sofa Set"
                            />
                                <div>
                                    <p className="mb-0">Leather Bag</p>
                                    <small>10 Apr 2023</small>
                                </div>
                            </div>
                            <div className="recent-item d-flex align-items-center mb-3">
                                <img
                                    src="https://eventizvue.htmldesigntemplates.com/assets/Picnic%20Basket.H03.2k-cFsVd5xR.png"
                                    width={60}
                                    height={60}
                                    className="me-3"
                                    alt="Yellow Sofa Set"
                                />
                                <div>
                                    <p className="mb-0">Bamboo Bucket</p>
                                    <small>10 Apr 2023</small>
                                </div>
                            </div>
                            <div className="recent-item d-flex align-items-center mb-3">
                                <img
                                    src="https://eventizvue.htmldesigntemplates.com/assets/T-Shirt.H03.2k-FJjSoh2l.png"
                                    width={60}
                                    height={60}
                                    className="me-3"
                                    alt="Yellow Sofa Set"
                                />
                                <div>
                                    <p className="mb-0">Lewis Shirt</p>
                                    <small>10 Apr 2023</small>
                                </div>
                            </div>
                            <div className="recent-item d-flex align-items-center mb-3">
                                <img
                                    src="https://eventizvue.htmldesigntemplates.com/assets/Picnic%20Basket.H03.2k-cFsVd5xR.png"
                                    width={60}
                                    height={60}
                                    className="me-3"
                                    alt="Yellow Sofa Set"
                                />
                                <div>
                                    <p className="mb-0">Bamboo Bucket</p>
                                    <small>10 Apr 2023</small>
                                </div>
                            </div>
                            <div className="recent-item d-flex align-items-center mb-3">
                                <img
                                    src="https://htmldesigntemplates.com/html/eventiz/images/products/Travel%20Bag.H03.2k.png"
                                    width={60}
                                    height={60}
                                    className="me-3"
                                    alt="Yellow Sofa Set"
                                />
                                <div>
                                    <p className="mb-0">Leather Bag</p>
                                    <small>10 Apr 2023</small>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div className="sidebar mt-4">
                            <h5>Social Media</h5>
                            <div className="row mt-3">
                                <div className="col-sm">
                                    <a href="#" className="social-btn social-facebook">
                                        Facebook
                                    </a>
                                    <a href="#" className="social-btn social-twitter">
                                        Twitter
                                    </a>
                                </div>
                                <div className="col-sm">
                                    <a href="#" className="social-btn social-instagram">
                                        Instagram
                                    </a>
                                    <a href="#" className="social-btn social-linkedin">
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductList