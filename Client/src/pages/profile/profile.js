import React from "react";
import logo from "../images/logo.png";
import question from "../images/questionmark.png";
import { useNavigate, Link } from "react-router-dom";
import "./profile.css";

function Profile() {
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate("/");
    };

    return (
        <div className="profile-page">
            {/* NAVBAR */}
            <div className="profile-navbar">
                <div className="profile-navbar-logo">
                    <img src={logo} alt="logo" onClick={navigateHome} />
                    <p>
                        <Link to="/">Waultz</Link>
                    </p>
                </div>

                <div className="profile-nav-buttons">
                    <img src={question} alt="FAQ'S"></img>
                </div>

                <div className="profile-nav-user">
                    <p>
                        <Link to="/login">Sign Out</Link>
                    </p>
                </div>
            </div>

            {/* PROFILE PAGE */}
            <div className="profile">
                <div className="profile-left">
                    <img />
                </div>
                <div className="profile-right"></div>
            </div>
        </div>
    );
}

export default Profile;
