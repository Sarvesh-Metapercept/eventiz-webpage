import React, { useState, useEffect } from 'react';
import { CountDown } from './CountDown';
import { ConferenceCard } from './ConferenceCard';
import { JoinExpoCard } from './JoinExpoCard';
import { EventSnapshots } from './EventSnapshots';

function home() {
    
    return (
        <div>
            <CountDown />;
            {/* MAIN PAGE START */}
            <main>
                {/* event section start */}
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm">
                            <div className="card" style={{ width: "100%" }}>
                                <div className="card-body">
                                    <div className="card-icon">👥</div>
                                    <div className="card-title">Event Conferences</div>
                                    <div className="card-text">
                                        Duis aute irure dolor in reprehenderit
                                    </div>
                                    <a href="#" className="learn-more">
                                        Learn More &gt;
                                    </a>
                                </div>
                            </div>
                            {/* ----------------------- */}
                            <div className="card mt-4 mb-4" style={{ width: "100%" }}>
                                <div className="card-body">
                                    <div className="card-icon">🚩</div>
                                    <div className="card-title">Culture Leadership</div>
                                    <div className="card-text">
                                        Duis aute irure dolor in reprehenderit
                                    </div>
                                    <a href="#" className="learn-more">
                                        Learn More &gt;
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* ---------------------------- */}
                        <div className="col-sm mb-4 d-flex align-items-center justify-content-center">
                            <div className="card" style={{ width: "100%" }}>
                                <div className="card-body">
                                    <div className="card-icon">⚙️</div>
                                    <div className="card-title">Digital Marketing</div>
                                    <div className="card-text">
                                        Duis aute irure dolor in reprehenderit
                                    </div>
                                    <a href="#" className="learn-more">
                                        Learn More &gt;
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm d-flex align-items-center justify-content-center">
                            <div>
                                <h1>
                                    Why You Should Join The <span className="clr">EVENTS?</span>
                                </h1>
                                <p className="mt-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <div className="d-flex justify-content-center mt-5 mb-4">
                                    <a href="" className="a-tag">
                                        Join Event &gt;
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* event section end */}
                {/* Conference section Start */}
                <div className="container" style={{ marginTop: 100 }}>
                    <div className="row">
                        <div className="col-sm d-flex align-items-center justify-content-center mb-4">
                            <div>
                                <p className="event-section">Conference Organisation</p>
                                <h1 className="mb-4">
                                    Conference,
                                    <br />
                                    Seminars &amp; <span className="clr">EVENTS</span>
                                </h1>
                                <p className="mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                                    ip suspendisse ultrices gravida. Risus commodo.
                                </p>
                                <div className="d-flex justify-content-center mt-5 mb-4">
                                    <a href="" className="a-tag">
                                        Discover Now &gt;
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* ---------------------------- */}
                        <div className="col-sm d-flex align-items-center justify-content-center mb-4">
                            <div className="image-section">
                                <img className="one" src="./images/img-1.jpg" alt="Event Image 1" />
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="image-section d-flex align-items-center justify-content-center">
                                <img className="two" src="./images/img-2.jpg" alt="Event Image 2" />
                            </div>
                            {/* ----------------------- */}
                            <div className="mt-4 mb-4 image-section d-flex align-items-center justify-content-center">
                                <img
                                    className="three"
                                    src="./images/img-3.jpg"
                                    alt="Event Image 3"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Conference section end */}
                {/* Stats section start */}
                <div className="container bg-light mt-4 mb-4">
                    <div className="row stats-section">
                        <div className="col-sm stats">
                            <h2>152</h2>
                            <p>Daily Visitors</p>
                        </div>
                        <div className="col-sm">
                            <h2>35</h2>
                            <p>Delivery Monthly</p>
                        </div>
                        <div className="col-sm">
                            <h2>29</h2>
                            <p>Positive Feedback</p>
                        </div>
                        <div className="col-sm">
                            <h2>72</h2>
                            <p>Award Winning</p>
                        </div>
                    </div>
                </div>
                {/* Stats section end */}
                {/* Event Conference Organisation Start */}
                <div className="container">
                    <div className="event-conf">
                        <p className="event-section">Event Conference Organisation</p>
                        <h1>
                            List Of Planned Events That <br /> Are{" "}
                            <span className="clr">EXPECTED</span>
                        </h1>
                    </div>
                    <ConferenceCard />
                    <hr />
                    <ConferenceCard />
                    <hr />
                    <ConferenceCard />
                </div>
                {/* Event Conference Organisation End */}
                {/* Featured Speaker Start */}
                <div className="container">
                    <div className="col-sm d-flex align-items-center justify-content-center mb-4 mt-5">
                        <div>
                            <p className="event-section">Featured Speaker</p>
                            <h1 className="mb-4">
                                Experience Speaker With <br />{" "}
                                <span className="clr">KNOWLEDGE</span>
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm d-flex align-items-center justify-content-center">
                            <div className="image-section">
                                <img
                                    className="speak-1"
                                    src="./images/speaker-1.jpg"
                                    alt="Event Image 1"
                                />
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="image-section d-flex align-items-center justify-content-center">
                                <img
                                    className="speak-2"
                                    src="./images/speaker-2.jpg"
                                    alt="Event Image 2"
                                />
                            </div>
                            {/* ----------------------- */}
                            <div className="mt-4 image-section d-flex align-items-center justify-content-center">
                                <img
                                    className="speak-3"
                                    src="./images/speaker-3.jpg"
                                    alt="Event Image 3"
                                />
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="image-section d-flex align-items-center justify-content-center">
                                <img
                                    className="speak-4"
                                    src="./images/speaker-4.jpg"
                                    alt="Event Image 2"
                                />
                            </div>
                            {/* ----------------------- */}
                            <div className="mt-4 image-section d-flex align-items-center justify-content-center">
                                <img
                                    className="speak-5"
                                    src="./images/speaker-5.jpg"
                                    alt="Event Image 3"
                                />
                            </div>
                        </div>
                        <div className="col-sm d-flex align-items-center justify-content-center">
                            <div className="image-section">
                                <img
                                    className="speak-6"
                                    src="./images/speaker-6.jpg"
                                    alt="Event Image 1"
                                />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mt-5 mb-4">
                            <a href="" className="a-tag">
                                View All Speakers &gt;
                            </a>
                        </div>
                    </div>
                </div>
                {/* Featured Speaker End */}
                {/* Pricing Table Start */}
                <div className="container">
                    <div>
                        <p className="event-section">Pricing Table</p>
                        <h1>
                            Explore Flexible Our Pricing <br /> <span className="clr">PLANS</span>
                        </h1>
                    </div>
                    <div className="mt-5">
                        <div className="row justify-content-center">
                            {/* Basic Ticket */}
                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="card text-center border-0 shadow">
                                    <div className="card-body">
                                        <h2 className="card-title">Basic Ticket</h2>
                                        <p className="card-subtitle mb-2 text-muted">
                                            Standard Package
                                        </p>
                                        <h1 className="price clr">
                                            $39.<span>99</span>
                                        </h1>
                                        <p className="">Person</p>
                                        <ul className="list-unstyled">
                                            <li>Second Balcony Seat</li>
                                            <hr style={{ borderTop: "dotted 1px" }} />
                                            <li>Snack &amp; Softdrink</li>
                                            <hr style={{ borderTop: "dotted 1px" }} />
                                            <li>Certificates</li>
                                            <hr style={{ borderTop: "dotted 1px" }} />
                                            <li>Private Access</li>
                                        </ul>
                                        <div className="d-flex justify-content-center">
                                            <a href="" className="a-tag mb-2">
                                                Purchase
                                            </a>
                                        </div>
                                        <p className="mt-2 text-muted" style={{ fontSize: "0.8rem" }}>
                                            *Please read our terms and conditions before ordering a ticket
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Silver Ticket */}
                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="card text-center border-0 shadow bg-primary text-white">
                                    <div className="card-body">
                                        <h2 className="card-title">Silver Ticket</h2>
                                        <p className="card-subtitle mb-2">Pro Package</p>
                                        <h1 className="price clr">
                                            $59.<span>99</span>
                                        </h1>
                                        <p className="">Person</p>
                                        <ul className="list-unstyled">
                                            <li>Second Balcony Seat</li>
                                            <hr style={{ borderTop: "dotted 1px" }} />
                                            <li>Snack &amp; Softdrink</li>
                                            <hr style={{ borderTop: "dotted 1px" }} />
                                            <li>Certificates</li>
                                            <hr style={{ borderTop: "dotted 1px" }} />
                                            <li>Printed Materials</li>
                                            <hr style={{ borderTop: "dotted 1px" }} />
                                            <li>Private Access</li>
                                        </ul>
                                        <div className="d-flex justify-content-center">
                                            <a href="" className="a-tag mb-2">
                                                Purchase
                                            </a>
                                        </div>
                                        <p className="mt-2 text-light" style={{ fontSize: "0.8rem" }}>
                                            *Please read our terms and conditions before ordering a ticket
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Gold Ticket */}
                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="card text-center border-0 shadow">
                                    <div className="card-body">
                                        <h2 className="card-title">Gold Ticket</h2>
                                        <p className="card-subtitle mb-2 text-muted">
                                            Enterprise Package
                                        </p>
                                        <h1 className="price clr">
                                            $199.<span>99</span>
                                        </h1>
                                        <p className="">Person</p>
                                        <ul className="list-unstyled">
                                            <li>Second Balcony Seat</li>
                                            <hr style={{ borderTop: "dotted 1px" }} />
                                            <li>Snack &amp; Softdrink</li>
                                            <hr style={{ borderTop: "dotted 1px" }} />
                                            <li>Certificates</li>
                                            <hr style={{ borderTop: "dotted 1px" }} />
                                            <li>Private Access</li>
                                        </ul>
                                        <div className="d-flex justify-content-center">
                                            <a href="" className="a-tag mb-2">
                                                Purchase
                                            </a>
                                        </div>
                                        <p className="mt-2 text-muted" style={{ fontSize: "0.8rem" }}>
                                            *Please read our terms and conditions before ordering a ticket
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Pricing Table End */}
                {/* Join Expo 2024 Start */}
                <div className="background-expo">
                    <div className="container">
                        <div className="d-flex justify-content-center align-items-center text-center">
                            <div>
                                <p className="event-section">Join Expo 2024</p>
                                <h1 className="text-white">
                                    Join Us At 20th Hero Nada <br /> Expo{" "}
                                    <span className="clr">2024</span>
                                </h1>
                            </div>
                        </div>
                        <div className="mt-5">
                            <JoinExpoCard />
                            <JoinExpoCard />
                        </div>
                    </div>
                    <div className="container video-container">
                        {/* Card 3 */}
                        <div className="d-flex justify-content-center">
                            <video
                                src="./images/video1.mp4"
                                className="w-75"
                                style={{ border: "10px solid white" }}
                                controls=""
                            />
                        </div>
                    </div>
                </div>
                {/* Join Expo 2024 End */}
                {/* Event Gallery Start */}
                <div className="container" style={{ marginTop: 120 }}>
                    <div className="d-flex justify-content-center align-items-center text-center">
                        <div>
                            <p className="event-section">Event Gallery</p>
                            <h1 className="">
                                Beautiful Snapshot Of Recent <br />
                                <span className="clr">EVENTS</span>
                            </h1>
                        </div>
                    </div>
                    <EventSnapshots />
                </div>
                {/* Event Gallery End */}
                {/* Our Testimonials Start */}
                <div className="container">
                    <div>
                        <p className="event-section">Our Testimonials</p>
                        <h1>
                            What Peoples's Says About <br /> <span className="clr">EVENTIZ</span>
                        </h1>
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm d-flex justify-content-center align-items-center">
                            <div
                                id="carouselExampleSlidesOnly"
                                className="carousel slide"
                                data-bs-ride="carousel"
                                data-bs-interval={2000}
                            >
                                <div className="carousel-inner">
                                    <div
                                        className="carousel-item active"
                                        style={{ backgroundColor: "#eff6ff" }}
                                    >
                                        <div className="m-3">
                                            <p></p>
                                            <h1>"</h1>Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem ipsum a simple Lorem Ipsum has
                                            been the industry's standard dummy hic et quidem.
                                            <p />
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="./images/img-4.jpg"
                                                    alt="Author"
                                                    className="round-img"
                                                />
                                                <div>
                                                    <div className=" clr">Jared Erondu</div>
                                                    <div className="">Supervisor</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="carousel-item"
                                        style={{ backgroundColor: "#eff6ff" }}
                                    >
                                        <div className="m-3">
                                            <p></p>
                                            <h1>"</h1>Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem ipsum a simple Lorem Ipsum has
                                            been the industry's standard dummy hic et quidem.
                                            <p />
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="./images/img-5.jpg"
                                                    alt="Author"
                                                    className="round-img"
                                                />
                                                <div>
                                                    <div className=" clr">Jared Erondu</div>
                                                    <div className="">Supervisor</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm d-flex justify-content-center align-items-center">
                            <img
                                className="testimonial-1"
                                src="./images/testimonial-1.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                {/* Our Testimonials End */}
                {/* Our Partners Start */}
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center text-center">
                        <div>
                            <p className="event-section">Our Partners</p>
                            <h1 className="">
                                Our Perfect Partners &amp; <span className="clr">SPONSORS</span>
                            </h1>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-sm">
                            <div className="mb-4 partner-div d-flex align-items-center justify-content-center border">
                                <img
                                    className="partners-img"
                                    src="./images/Partners-img-1.png"
                                    alt="Event Image 2"
                                />
                            </div>
                            {/* ----------------------- */}
                            <div className="mb-4 partner-div d-flex align-items-center justify-content-center border">
                                <img
                                    className="partners-img"
                                    src="./images/Partners-img-2.png"
                                    alt="Event Image 3"
                                />
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="mb-4 partner-div d-flex align-items-center justify-content-center border">
                                <img
                                    className="partners-img"
                                    src="./images/Partners-img-2.png"
                                    alt="Event Image 2"
                                />
                            </div>
                            {/* ----------------------- */}
                            <div className="mb-4 partner-div d-flex align-items-center justify-content-center border">
                                <img
                                    className="partners-img"
                                    src="./images/Partners-img-1.png"
                                    alt="Event Image 3"
                                />
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="mb-4 partner-div d-flex align-items-center justify-content-center border">
                                <img
                                    className="partners-img"
                                    src="./images/Partners-img-1.png"
                                    alt="Event Image 2"
                                />
                            </div>
                            {/* ----------------------- */}
                            <div className="mb-4 partner-div d-flex align-items-center justify-content-center border">
                                <img
                                    className="partners-img"
                                    src="./images/Partners-img-2.png"
                                    alt="Event Image 3"
                                />
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="mb-4 partner-div d-flex align-items-center justify-content-center border">
                                <img
                                    className="partners-img"
                                    src="./images/Partners-img-2.png"
                                    alt="Event Image 2"
                                />
                            </div>
                            {/* ----------------------- */}
                            <div className="mb-4 partner-div d-flex align-items-center justify-content-center border">
                                <img
                                    className="partners-img"
                                    src="./images/Partners-img-1.png"
                                    alt="Event Image 3"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Our Partners End */}
                <div className="container">
                    <hr style={{ borderTop: "dotted 1px" }} />
                </div>
                {/* Our News & Articles Start */}
                <div className="container mb-5">
                    <div className="d-flex justify-content-center align-items-center text-center">
                        <div>
                            <p className="event-section">Our News &amp; Articles</p>
                            <h1 className="">
                                Our News &amp; <span className="clr">ARTICLES</span>
                            </h1>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-sm">
                            <div className="card text-start">
                                <div>
                                    <img
                                        src="./images/article-1.jpg"
                                        className="card-img-top"
                                        alt="Blog Image"
                                    />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        How To Optimize Your Blog For High Ranking
                                    </h5>
                                    <a href="#" className="clr" style={{ textDecoration: "none" }}>
                                        CONTINUE READING
                                    </a>
                                </div>
                                <div className="card-footer">August 25, 2022 | No Comments</div>
                            </div>
                        </div>
                        {/* ----------------------- */}
                        <div className="col-sm">
                            <div className="card text-start">
                                <div>
                                    <img
                                        src="./images/article-2.jpg"
                                        className="card-img-top"
                                        alt="Blog Image"
                                    />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        How To Optimize Your Blog For High Ranking
                                    </h5>
                                    <a href="#" className="clr" style={{ textDecoration: "none" }}>
                                        CONTINUE READING
                                    </a>
                                </div>
                                <div className="card-footer">August 25, 2022 | No Comments</div>
                            </div>
                        </div>
                        {/* ----------------------- */}
                        <div className="col-sm">
                            <div className="card text-start">
                                <div>
                                    <img
                                        src="./images/article-1.jpg"
                                        className="card-img-top"
                                        alt="Blog Image"
                                    />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        How To Optimize Your Blog For High Ranking
                                    </h5>
                                    <a href="#" className="clr" style={{ textDecoration: "none" }}>
                                        CONTINUE READING
                                    </a>
                                </div>
                                <div className="card-footer">August 25, 2022 | No Comments</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Our News & Articles End */}
                {/* Reach Us Start */}
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-sm">
                            <div className="mb-5">
                                <p className="event-section">Reach Us</p>
                                <h1>
                                    Get Direction To The <br />
                                    Event <span className="clr">LOCATION</span>
                                </h1>
                            </div>
                            <div className="row bg-light" style={{ height: 120 }}>
                                <div className="col-3 p-0 d-flex align-items-center justify-content-center bg-clr">
                                    <i
                                        className="fa fa-map-marker text-white"
                                        style={{ fontSize: 50 }}
                                    />
                                </div>
                                <div className="col">
                                    <h3 className="text-primary">Galleria Mall Conference Center</h3>
                                    <p className="text-secondary">
                                        19 By Pass NR, Bali, Indonesia, BC 22196
                                    </p>
                                </div>
                            </div>
                            <div className="row bg-light mt-4" style={{ height: 120 }}>
                                <div className="col-3 p-0 d-flex align-items-center justify-content-center bg-clr">
                                    <i
                                        className="fa fa-map-marker text-white"
                                        style={{ fontSize: 50 }}
                                    />
                                </div>
                                <div className="col">
                                    <h3 className="text-primary">Reception Info</h3>
                                    <p className="text-secondary">
                                        Phone Number: (+62) 1919-2022, (+62) 1919-2023
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.4051603706222!3d28.50292593193056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1585040658255!5m2!1sen!2sin"
                                    style={{ height: 450, width: "100%" }}
                                ></iframe>
                            </div>
                        </div>
                    </div>
                    {/* Reach Us End */}
                </div>
            </main>
            {/* MAIN PAGE END */}
        </div>
    )
}

export default home