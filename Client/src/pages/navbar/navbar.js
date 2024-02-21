import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../images/logo.png";
import dropdown from "../images/dropdown.png";
import { useNavigate, Link, useLocation } from "react-router-dom";

function Navbar() {
    let location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate("/");
    };
    const navigatePlans = () => {
        navigate("/plans");
    };

    const aboutScroll = () => {
        navigate("/");
        window.scrollTo(0, 0);
    };
    const servicesScroll = () => {
        navigate("/");
        window.scrollTo(0, 700);
    };

    return (
        <div id="navbar" className={`navbar`}>
            <div className="logo">
                <img src={logo} alt="logo" onClick={navigateHome} />
                <p>
                    <Link to="/">Waultz</Link>
                </p>
            </div>

            <div className="nav-buttons">
                <button onClick={aboutScroll}>About</button>
                <button onClick={servicesScroll}>Services</button>
                <button onClick={navigatePlans}>Subscriptions</button>
                <button>Contact Us</button>
            </div>

            <div className="nav-user">
                <div className="login-dropdown">
                    <p>
                        <Link to="/login">Login</Link>
                    </p>
                    <img
                        className="dropdown"
                        src={dropdown}
                        alt="dd"
                        onClick={isToggled}
                    />
                </div>
            </div>
            <div className="dropdown-menu">
                <p>
                    <Link to="/login">Magistrate</Link>
                </p>
                <p>
                    <Link to="/login">Court Staff</Link>
                </p>
                <p>
                    <Link to="/login">Police</Link>
                </p>
                <p>
                    <Link to="/login">Prosecutor</Link>
                </p>
                <p>
                    <Link to="/login">Defender</Link>
                </p>
                <p>
                    <Link to="/login">Accused/Victim</Link>
                </p>
            </div>
        </div>
    );

    function isToggled() {
        var x = document.getElementsByClassName("dropdown-menu");

        Array.from(x).forEach((x) => {
            if (x.style.display === "none") {
                x.style.display = "flex";
            } else {
                x.style.display = "none";
            }
        });
    }

    // function hideMenu() {

    // }
}

export default Navbar;
