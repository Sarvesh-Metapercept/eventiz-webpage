import React from 'react';

function Footer() {
    const socialLinks = [
        { href: 'https://facebook.com', icon: 'fa-facebook', color: '#3b5998' },
        { href: 'https://twitter.com', icon: 'fa-twitter', color: '#1da1f2' },
        { href: 'https://instagram.com', icon: 'fa-instagram', color: '#e1306c' },
        { href: 'https://linkedin.com', icon: 'fa-linkedin', color: '#0077b5' },
    ];

    const quickLinks = [
        { href: '/about-us', text: 'About Us' },
        { href: '/services', text: 'Services' },
        { href: '/speakers', text: 'Speakers' },
        { href: '/schedule', text: 'Schedule' },
        { href: '/ticket-pricing', text: 'Ticket Pricing' },
        { href: '/contact-us', text: 'Contact Us' },
    ];

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
                                    {socialLinks.map((link, index) => (
                                        <div
                                            key={index}
                                            className="d-flex align-items-center justify-content-center bg-white"
                                            style={{ width: 40, height: 40, borderRadius: 8 }}
                                        >
                                            <a href={link.href}>
                                                <i
                                                    className={`fa ${link.icon}`}
                                                    style={{ fontSize: 24, color: link.color }}
                                                />
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="col-sm mt-5 ms-5">
                                <h4>Quick Links</h4>
                                {quickLinks.map((link, index) => (
                                    <p key={index}>
                                        <a href={link.href} className="text-white text-decoration-none">
                                            &gt; {link.text}
                                        </a>
                                    </p>
                                ))}
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
    );
}

export default Footer;