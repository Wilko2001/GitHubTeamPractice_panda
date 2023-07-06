import React, { useState } from "react";
import "../styles/add-property.css"
import image from "../images/backimage.png";
import axios from "axios";
import Alert from "./Alert";

const AddProperties = () => {
    const initialState = {
        fields: {
            title: "",
            city: "Manchester",
            property_type: "Flat",
            email_address: "",
            price: "",
            bathrooms: "",
            bedrooms: "",

        },

        alert: {
            message: "",
            isSuccess: false,
        },
    };

    const [fields, setFields] = useState(initialState.fields);
    const [alert, setAlert] = useState(initialState.alert);

    const handleAddProperty = (event) => {
        event.preventDefault();

        setAlert({ message: "", isSuccess: false });

        axios.post('http://localhost:3000/api/v1/PropertyListing', fields)
            .then(() => {
                setAlert({
                    message: "Property Added",
                    isSuccess: true,
                });
            })
            .catch(() => {
                setAlert({
                    message: "Server error. Please try again later.",
                    isSuccess: false,
                })
            })

    }

    const handleFieldChange = (event) => {
        setFields({ ...fields, [event.target.name]: event.target.value });
    }

    return (
        <div className="add-property">
            <img src={image} alt="back-ground" />
            <form onSubmit={handleAddProperty}>
                <label htmlFor="title">
                    Title: <br />
                    <input className="add_property_input"
                        id="title"
                        name="title"
                        value={fields.title}
                        onChange={handleFieldChange}
                        placeholder="2 bedroom Bungalow"
                    />
                </label>

                <label htmlFor="city">
                    City:
                    <br />
                    <select className="add_dropdown"
                        id="city"
                        name="city"
                        value={fields.city}
                        onChange={handleFieldChange}>
                        <option value="Manchester">Manchester</option>
                        <option value="Leeds">Leeds</option>
                        <option value="Sheffield">Sheffield</option>
                        <option value="Liverpool">Liverpool</option>
                    </select>
                </label>
                <label htmlFor="property_type">
                    Property Type:
                    <br />
                    <select className="add_dropdown"
                        id="property_type"
                        name="property_type"
                        value={fields.property_type}
                        onChange={handleFieldChange}>
                        <option value="Flat">Flat</option>
                        <option value="Detached">Detached</option>
                        <option value="Semi-Detached">Semi-Detached</option>
                        <option value="Terraced">Terraced</option>
                        <option value="End of Terrace">End of Terrace</option>
                        <option value="Cottage">Cottage</option>
                        <option value="Bungalow">Bungalow</option>
                    </select>
                </label>

                <label htmlFor="email_address">
                    Email Address:
                    <br />
                    <input className="add_property_input"
                        id="email_address"
                        name="email_address"
                        value={fields.email_adress}
                        onChange={handleFieldChange}
                        placeholder='johndoe@example.com'>
                    </input>
                </label>

                <label htmlFor="price">
                    Price (pcm):
                    <br />
                    <input className="add_property_input"
                        type="number"
                        id="price"
                        name="price"
                        value={fields.price}
                        onChange={handleFieldChange}
                        pattern="[0-9]">
                    </input>
                </label>

                <label htmlFor="bedrooms">
                    Bedrooms:
                    <br />
                    <input className="add_property_input"
                        type="number"
                        id="bedrooms"
                        name="bedrooms"
                        value={fields.bedrooms}
                        onChange={handleFieldChange}
                        pattern="[0-9]">
                    </input>
                </label>

                <label htmlFor="bathrooms">
                    Bathrooms:
                    <br />
                    <input className="add_property_input"
                        type="number"
                        id="bathrooms"
                        name="bathrooms"
                        value={fields.bathrooms}
                        onChange={handleFieldChange}
                        pattern="[0-9]">
                    </input>
                </label>

                <button type="submit" className="add-btn">Add</button>
                <Alert message={alert.message} success={alert.isSuccess} />
            </form>
        </div >
    );
};

export default AddProperties;