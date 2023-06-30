import React, { useState } from 'react';

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
    };

    const [fields, setFields] = useState(initialState.fields);

    const handleAddProperty = (event) => {
        event.preventDefault();
    };

    const handleFieldChange = (event) => {
        setFields({ ...fields, [event.target.name]: event.target.value });
    }

    console.log(fields);

    return (
        <div className="add-property">
            <form onSubmit={handleAddProperty}>
                <label htmlFor="title">
                    Title
                    <input
                        id="title"
                        name="title"
                        value={fields.title}
                        onChange={handleFieldChange}
                        placeholder="2 bedroom Bungalow"
                    />
                </label>

                <label htmlFor="city">
                    City
                    <select
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
                    Property Type
                    <select
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
                    Email Address
                    <input
                        id="email_address"
                        name="email_address"
                        value={fields.email_adress}
                        onChange={handleFieldChange}
                        placeholder='johndoe@example.com'>
                    </input>
                </label>

                <label htmlFor="price">
                    Price
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={fields.price}
                        onChange={handleFieldChange}
                        pattern="[0-9]">
                    </input>
                </label>
                PCM

                <label htmlFor="bedrooms">
                    Bedrooms
                    <input
                        type="number"
                        id="bedrooms"
                        name="bedrooms"
                        value={fields.bedrooms}
                        onChange={handleFieldChange}
                        pattern="[0-9]">
                    </input>
                </label>

                <label htmlFor="bathrooms">
                    Bathroom
                    <input
                        type="number"
                        id="bathroom"
                        name="bathroom"
                        value={fields.bathroom}
                        onChange={handleFieldChange}
                        pattern="[0-9]">
                    </input>
                </label>

                Add Property
                <button type="submit">Add</button>
            </form>
        </div >
    );
};

export default AddProperties;