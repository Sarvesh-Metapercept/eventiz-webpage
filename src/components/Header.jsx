import React, { useState, useEffect } from 'react'


function Header() {
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
                        <a className="navbar-brand" href="./index.html">
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
                <div className="container heading">
                    <div className="row align-items-start">
                        <div className="col">
                            <h4 className="pink">Big Event 2024</h4>
                            <h1 className="text-white">
                                <span className="head">World Biggest 2023</span>
                                <br />
                                <span className="head">CONFERENCE</span>
                            </h1>
                            <h5 className="text-white">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                                eligendi dolorem distinctio ab.
                            </h5>
                        </div>
                        <div className="col">{/* One of two columns */}</div>
                    </div>
                </div>
            </div>
            {/* TIMER START */}
            <div className="" style={{ position: "relative", top: "-50px" }}>
                <div className="row">
                    <div className="col-md-8 bg-clr">
                        <div className="row timer bg-clr d-flex align-items-center">
                            <div className="col-sm countdown-item">
                                <span className="time">00</span>
                                <span className="label">Days</span>
                            </div>
                            <div className="col-sm countdown-item">
                                <span className="time">00</span>
                                <span className="label">Hours</span>
                            </div>
                            <div className="col-sm countdown-item">
                                <span className="time">00</span>
                                <span className="label">Minutes</span>
                            </div>
                            <div className="col-sm countdown-item">
                                <span className="time">00</span>
                                <span className="label">Seconds</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">{/* One of three columns */}</div>
                </div>
            </div>
            {/* TIMER END */}
        </div>
    )
}

export default Header