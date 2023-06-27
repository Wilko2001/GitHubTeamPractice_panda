import React from 'react';
import "../styles/navbar.css";
import logo from "../images/project-logo.png";
import { Link } from 'react-router-dom';

const NavBar = () => {
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
        </div>
    )
}

export default NavBar