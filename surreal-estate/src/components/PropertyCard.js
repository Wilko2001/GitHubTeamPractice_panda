import React from 'react';
import "../styles/property-card.css";
import icon1 from "../images/bed-solid.svg";
import icon2 from "../images/bath.svg";
import icon3 from "../images/sterling-sign-solid.svg";
import icon4 from "../images/email.svg";
import icon5 from "../images/city.svg";

const PropertyCard = ({ title, type, bathrooms, bedrooms, price, city, email }) => {
    return (
        <div className="property-card">
            <div className="property-row">
                <p>{title}</p>
            </div>
            <div className="property-row">
                <img src={icon1} alt="bed-icon" />
                <p>{bedrooms}</p>
            </div>
            <div className="property-row">
                <img src={icon2} alt="bath-icon" />
                <p>{bathrooms}</p>
            </div>
            <div className="property-row">
                <img src={icon5} alt="city-icon" />
                <p>{type} - {city}</p>
            </div>
            <div className="property-row">
                <img src={icon3} alt="pound-icon" />
                <p>{price}</p>
            </div>
            <div className="property-row">
                <img src={icon4} alt="email-icon" />
                <p>{email}</p>
            </div>
        </div>
    )
}

export default PropertyCard;