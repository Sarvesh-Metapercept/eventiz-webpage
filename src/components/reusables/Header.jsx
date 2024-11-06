import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header({ children }) {
    const [isDarkNav, setIsDarkNav] = useState(false);

    const toggleDarkNav = () => {
        const elements = document.getElementsByClassName("navbar-collapse");
        // const removable = document.getElementsByClassName("removables");
        if (elements.length > 0) {
            elements[0].classList.toggle("dark-nav");
            elements[0].classList.toggle("dark-nav-list");
            // removable[0].classList.toggle("dark-nav-removables");
        }
    };
    return (
        <div>
            {/* HEADER START */}
            <div className="background">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img
                                src="https://htmldesigntemplates.com/html/eventiz/images/logo-white.png"
                                alt=""
                            />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            onClick={toggleDarkNav}
                        >
                            <span className="fa fa-bars" style={{ color: "white" }} />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                                <li className="nav-item">
                                    <a
                                        className="nav-link active text-white"
                                        aria-current="page"
                                        href="#"
                                    >
                                        HOME
                                    </a>
                                </li>
                                <hr className="nav-separator" />
                                <li className="nav-item">
                                    <a
                                        className="nav-link active text-white"
                                        aria-current="page"
                                        href="#"
                                    >
                                        ABOUT US
                                    </a>
                                </li>
                                <hr className="nav-separator" />
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link active dropdown-toggle text-white"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        PAGES
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                A
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                B
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                C
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <hr className="nav-separator" />
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link active dropdown-toggle text-white"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        SHOP
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link className="dropdown-item" to="/product-list">
                                                Product Lists
                                            </Link>
                                        </li>
                                        <li>
                                        <Link className="dropdown-item" to="/product-detail">
                                                Product Detail
                                            </Link>
                                        </li>
                                        <li>
                                        <Link className="dropdown-item" to="/product-cart">
                                                Cart
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/product-checkout">
                                                Checkout
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <hr className="nav-separator" />
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link active dropdown-toggle text-white"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        NEWS
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                A
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                B
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                C
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <hr className="nav-separator" />
                                <li className="nav-item">
                                    <a
                                        className="nav-link active  text-white"
                                        aria-current="page"
                                        href="#"
                                    >
                                        CONTACT US
                                    </a>
                                </li>
                                <hr className="nav-separator" />
                                <form className="removables d-flex" role="search">
                                    <input
                                        id="search-input"
                                        className="form-control me-2"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                        style={{ display: "none" }}
                                    />
                                    <button className="btn text-white" type="button" id="search-icon">
                                        <i className="fa fa-search" />
                                    </button>
                                    <button
                                        className="btn btn-outline-success"
                                        type="submit"
                                        id="search-btn"
                                        style={{ display: "none" }}
                                    >
                                        Search
                                    </button>
                                </form>
                            </ul>
                            <div className="removables d-flex justify-content-center">
                                <a href="" className="a-tag">
                                    BUY TICKET
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* HEADER END */}

                {/* Children */}
                {children}

                
            </div>

        </div>
    )
}

export default Header