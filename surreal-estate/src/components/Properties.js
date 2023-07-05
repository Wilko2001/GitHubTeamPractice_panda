import React from "react";
import PropertyCard from "./PropertyCard";

const Properties = () => {
    const property = {
        Title: "2 bedroom flat",
        Type: "Flat",
        Bathrooms: 2,
        Bedrooms: 2,
        Price: 1000,
        City: "Leeds",
        Email: "johndoe@example.com",
    };

    return (
        <div>
            <PropertyCard {...property} />
        </div>
    );
};

export default Properties