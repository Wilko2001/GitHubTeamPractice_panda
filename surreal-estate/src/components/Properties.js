import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import "../styles/property-card.css";
import axios from "axios";
import Alert from "./Alert";
import SideBar from "./SideBar";

const Properties = () => {
    const [properties, setProperties] = useState([]);
    const [alert, setAlert] = useState({ message: "" });
    const { search } = useLocation();

    useEffect(() => {

        axios.get("http://localhost:3000/api/v1/PropertyListing")
            .then((response) => {
                const { data } = response;
                setProperties(data);
            })
            .catch((error) => {
                setAlert({ message: "Error retrieving properties, please try again later!" });
            });
    }, []);

    const Property = {
        Title: "2 bedroom flat",
        Type: "Flat",
        Bathrooms: 2,
        Bedrooms: 2,
        Price: 1000,
        City: "Leeds",
        Email: "johndoe@example.com",
    };

    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/PropertyListing${search}`)
            .then(({ data }) => setProperties(data))
            .catch(err => console.error(err));
    }, [search])

    return (
        <div>
            <SideBar />
            <div className="property-error">
                {alert.message && <Alert message={alert.message} />}
            </div>
            <div className="property-grid">
                {properties.map((Property) => (
                    <div key={Property.id}>
                        <PropertyCard {...Property} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Properties