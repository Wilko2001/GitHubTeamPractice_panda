import React from 'react';
import "../styles/navbar.css";
import logo from "../images/project-logo.png";
import { Link } from 'react-router-dom';
import { auth } from "../config/firebase";

const NavBar = ({ onLogout }) => {
    const handleLogout = () => {
        auth.signOut()
            .then(() => {
                onLogout();
            })
            .catch((error) => {
                console.error("Logout error:", error);
            });
    };
    const handleLogin = () => {
        const email = "jondoe@gmail.com";
        const password = "password";

        auth.signInWithEmailAndPassword(email, password)
            .then((response) => {
                console.log("Logged in!");
            })
            .catch((error) => {
                console.error("Login error:", error);
            });
    };

    return (
        <div className="navbar">
            <img src={logo} alt="site-logo" />
            <div className="navbar__title">Surreal Estate</div>
            <ul className="navbar__links-wrapper">
                <li>
                    <Link className="navbar__view-properties" to="/"> View Properties</Link>
                </li>
                <li>
                    <Link className="navbar__add-properties" to="/add">Add a Property</Link>
                </li>
            </ul>
            {auth.currentUser ? (
                <button className="navbar__logout-button" onClick={handleLogout}>
                    Sign Out
                </button>
            ) : (
                <button className="navbar__login-button" onClick={handleLogin}>

                </button>
            )}
        </div>
    )
}

export default NavBar