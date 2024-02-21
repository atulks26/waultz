import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { Link } from "react-router-dom";
import loginimage from "../images/login.png";
import "./login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // to not lose state of email and password
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                console.log("LoggedIn");
                window.location.href = "/anonymous";
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="login-page">
            <div className="login-image">
                <img src={loginimage} />
            </div>
            <div className="login">
                <form onSubmit={handleSubmit} className="login-form">
                    <p className="login-heading">Login</p>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                    />
                    <button type="submit">Continue</button>
                    <p className="login-signup-option">
                        <Link to="/signup">
                            Don't have an account ? Create now
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;
