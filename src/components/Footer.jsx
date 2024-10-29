import React from 'react'

function Footer() {
    return (
        <div>
            <footer>
                <div className="ftr-bg">
                    <div className="container">
                        <div className="row text-white">
                            <div className="col-sm mt-5">
                                <a className="navbar-brand" href="./index.html">
                                    <img
                                        src="https://htmldesigntemplates.com/html/eventiz/images/logo-white.png"
                                        alt=""
                                    />
                                </a>
                                <p className="mt-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                                    suspendisse leo neque iaculis molestie sagittis maecenas aenean
                                    eget molestie sagittis.
                                </p>
                                <div className="d-flex gap-4">
                                    <div
                                        className="d-flex align-items-center justify-content-center bg-white"
                                        style={{ width: 40, height: 40, borderRadius: 8 }}
                                    >
                                        <a href="">
                                            <i
                                                className="fa fa-facebook"
                                                style={{ fontSize: 24, color: "#3b5998" }}
                                            />
                                        </a>
                                    </div>
                                    <div
                                        className="d-flex align-items-center justify-content-center bg-white"
                                        style={{ width: 40, height: 40, borderRadius: 8 }}
                                    >
                                        <a href="">
                                            <i
                                                className="fa fa-twitter"
                                                style={{ fontSize: 24, color: "#1da1f2" }}
                                            />
                                        </a>
                                    </div>
                                    <div
                                        className="d-flex align-items-center justify-content-center bg-white"
                                        style={{ width: 40, height: 40, borderRadius: 8 }}
                                    >
                                        <a href="">
                                            <i
                                                className="fa fa-instagram"
                                                style={{ fontSize: 24, color: "#e1306c" }}
                                            />
                                        </a>
                                    </div>
                                    <div
                                        className="d-flex align-items-center justify-content-center bg-white"
                                        style={{ width: 40, height: 40, borderRadius: 8 }}
                                    >
                                        <a href="">
                                            <i
                                                className="fa fa-linkedin"
                                                style={{ fontSize: 24, color: "#0077b5" }}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm mt-5 ms-5">
                                <h4>Quick Links</h4>
                                <p>
                                    <a href="" className="text-white text-decoration-none">
                                        &gt; About Us
                                    </a>
                                </p>
                                <p>
                                    <a href="" className="text-white text-decoration-none">
                                        &gt; Services
                                    </a>
                                </p>
                                <p>
                                    <a href="" className="text-white text-decoration-none">
                                        &gt; Speakers
                                    </a>
                                </p>
                                <p>
                                    <a href="" className="text-white text-decoration-none">
                                        &gt; Schedule
                                    </a>
                                </p>
                                <p>
                                    <a href="" className="text-white text-decoration-none">
                                        &gt; Ticket Pricing
                                    </a>
                                </p>
                                <p>
                                    <a href="" className="text-white text-decoration-none">
                                        &gt; Contact Us
                                    </a>
                                </p>
                            </div>
                            <div className="col-sm mt-5">
                                <h4>Get In Touch</h4>
                                <p className="mt-3">
                                    1616 Broadway NY, New York United States of America
                                </p>
                                <div className="d-flex align-items-center me-3">
                                    <div
                                        className="d-flex align-items-center justify-content-center bg-white"
                                        style={{ width: 40, height: 40, borderRadius: 8 }}
                                    >
                                        <a href="tel:+1234567890">
                                            <i
                                                className="fa fa-phone"
                                                style={{ fontSize: 24, color: "#3b5998" }}
                                            />
                                        </a>
                                    </div>
                                    <span className="ms-2" style={{ fontSize: 18 }}>
                                        123 567 5890
                                    </span>
                                </div>
                                {/* Email Icon with Random Email */}
                                <div className="d-flex align-items-center mt-3">
                                    <div
                                        className="d-flex align-items-center justify-content-center bg-white"
                                        style={{ width: 40, height: 40, borderRadius: 8 }}
                                    >
                                        <a href="mailto:Info@Eventiz.Com">
                                            <i
                                                className="fa fa-envelope"
                                                style={{ fontSize: 24, color: "#3b5998" }}
                                            />
                                        </a>
                                    </div>
                                    <span className="ms-2" style={{ fontSize: 18 }}>
                                        Info@Eventiz.Com
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm mt-5">
                                <h4>Subscribe To Our Newsletter</h4>
                                <p className="mt-3">New subscribers get 10% off your next order</p>
                                <form>
                                    <input
                                        type="email"
                                        id="fname"
                                        name="fname"
                                        defaultValue="Email Address"
                                    />
                                    <br />
                                </form>
                                <div className="mt-3">
                                    <a href="#" className="a-tag">
                                        Subscribe
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer