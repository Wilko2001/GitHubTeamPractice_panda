import React from 'react';
import "../styles/navbar.css";
import logo from "../images/project-logo.png";

const NavBar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="site-logo" />
            <div className="navbar__title">Surreal Estate</div>
            <ul className="navbar__links-wrapper">
                <li>
                    <a href="View Properties"> View Properties</a>
                </li>
                <li>
                    <a href="Add a Property">Add a Property</a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar