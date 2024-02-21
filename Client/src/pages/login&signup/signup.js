import React, { useRef, useState } from "react";
import { createUserWithP } from "firebase/auth";
import { auth, firestore } from "../firebase/firebase";
import { doc, setDoc } from "@firebase/firestore";
import { Link } from "react-router-dom";
import loginimage from "../images/login.png";
import "./signup.css";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [adhaar, setAdhaar] = useState("");

    const emailRef = useRef();
    const nameRef = useRef();
    const phoneRef = useRef();
    const adhaarRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (confPassword != password) {
            console.log("Passwords do not match");
            return;
        }

        try {
            const cred = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            const userId = cred.user.uid;
            const docRef = doc(firestore, "users", userId);

            let data = {
                email: emailRef.current.value,
                name: nameRef.current.value,
                phone: phoneRef.current.value,
                adhaar: adhaarRef.current.value,
            };

            await setDoc(docRef, data);

            window.location.href = "/login";
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="login-page">
            <div className="login-image">
                <img src={loginimage} />
            </div>
            <div className="login">
                <form onSubmit={handleSubmit} className="login-form">
                    <p className="login-heading">Sign Up</p>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Full Name*"
                        ref={nameRef}
                    />
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        ref={emailRef}
                        placeholder="Email ID*"
                    />
                    <input
                        type="number"
                        minLength="10"
                        maxLength="10"
                        placeholder="Phone*"
                        value={number}
                        ref={phoneRef}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password*"
                    />
                    <input
                        value={confPassword}
                        onChange={(e) => setConfPassword(e.target.value)}
                        type="password"
                        placeholder="Confirm Password*"
                    />
                    <input
                        className="adhaar"
                        type="number"
                        minLength="12"
                        maxLength="12"
                        placeholder="Adhaar"
                        value={adhaar}
                        ref={adhaarRef}
                        onChange={(e) => setAdhaar(e.target.value)}
                    />
                    <button className="new-button" type="submit">
                        Register
                    </button>
                    <p className="login-signup-option">
                        <Link to="/login">
                            Already have an account ? Log In
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Signup;
