import React, { useEffect, useState } from "react";
import "./Home.css";
import about from "../images/image3.png";
import service1 from "../images/image2.png";
import service2 from "../images/image1.png";
import features from "../images/features.gif";
import chatbot from "../images/chatbot.png";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const navigateJoin = () => {
        navigate("/signup");
    };
    const navigateExplore = () => {
        window.scrollTo(0, 720);
    };
    const navigatePlans = () => {
        navigate("/plans");
    };

    return (
        <div className="home">
            <div className="section1">
                <div className="text">
                    <p className="section-head first-section-header">
                        Why Waultz ?
                    </p>
                    <p className="section-content">
                        Our eVault with blockchain protection for unmatched
                        security and seamless document management. With
                        user-friendly features, robust encryption, and regular
                        security audits, we prioritize your peace of mind. Join
                        us in revolutionizing legal data storage.
                    </p>

                    <div className="section-buttons">
                        <button className="button1" onClick={navigateJoin}>
                            Join Us
                        </button>
                        <button className="button2" onClick={navigateExplore}>
                            Explore
                        </button>
                    </div>
                </div>
                <img src={about} alt="about" />
            </div>

            <div className="section1 section2">
                <img src={service2} alt="about" />
                <div className="text text2">
                    <p className="section-head">
                        Empowering Your Legal Data with eVault
                    </p>
                    <p className="section-content">
                        Experience a seamless and secure data management
                        solution tailored for legal firms. Our eVault service
                        combines a user-friendly interface, robust security
                        measures, encryption controls, and compliance adherence.
                        Blockchain transparency ensures data integrity, while
                        dedicated customer support is always at your service.
                        With regular audits, backups, and updates, trust us to
                        safeguard your sensitive information.
                    </p>
                </div>
            </div>

            <div className="features-gif">
                <img src={features} atl="features" />
            </div>

            <div className="section1 section3">
                <div className="text text3">
                    <p className="section-head">
                        Upgrade Your Firm with eVault Subscription Service!
                    </p>
                    <p className="section-content">
                        Elevate your legal firm's data management to new heights
                        with our cutting-edge eVault solution. Gain access to
                        unparalleled security, seamless document management, and
                        blockchain-powered protection. Our subscription-based
                        model ensures cost-effective and tailored options for
                        firms of all sizes. Experience the future of legal data
                        storage today! Join us and revolutionize the way you
                        safeguard your clients' information.
                    </p>
                    <div className="section-button3">
                        <button className="button3" onClick={navigatePlans}>
                            Know More
                        </button>
                    </div>
                </div>
                <img src={service1} alt="about" />
            </div>
            <img className="chatbot" src={chatbot} />
        </div>
    );
}

export default Home;
