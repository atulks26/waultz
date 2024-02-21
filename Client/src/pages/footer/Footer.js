import React from "react";
import "./Footer.css";
import logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate("/");
    };
    return (
        <div className="footer">
            <div className="name-logo">
                <div className="footer-name-logo">
                    <img onClick={navigateHome} src={logo} />
                    <Link to="/">
                        <p>Waultz</p>
                    </Link>
                </div>
                <div className="copyright">
                    © 2023 Waultz™. All Rights Reserved.
                </div>
            </div>

            <div className="footer-details">
                <p>
                    <Link to="/tnc">Terms and Conditions</Link>
                </p>
                <p>Support</p>
                <p>FAQ'S</p>
            </div>
        </div>
    );
}

export default Footer;
