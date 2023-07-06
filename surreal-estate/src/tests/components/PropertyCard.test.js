import React from "react";
import { render, getByText } from "@testing-library/react";
import PropertyCard from "../../components/PropertyCard";

test("renders the title correctly", () => {
    const Title = "2 bedroom flat";
    const { getByText } = render(<PropertyCard title={Title} />);
    const titleElement = getByText(Title);
    expect(titleElement).toBeInTheDocument();
});


test("renders the type and city correctly", () => {
    const type = "Flat";
    const city = "Leeds";
    const { getByText } = render(<PropertyCard type={type} city={city} />);
    const typeElement = getByText(`${type} - ${city}`);
    expect(typeElement).toBeInTheDocument();
});


test("renders the bathrooms correctly", () => {
    const bathrooms = 2;
    const { getByText } = render(<PropertyCard bathrooms={bathrooms} />);
    const bathroomsElement = getByText(`${bathrooms}`);
    expect(bathroomsElement).toBeInTheDocument();
});

test("renders the bedrooms correctly", () => {
    const bedrooms = 2;
    const { getByText } = render(<PropertyCard bedrooms={bedrooms} />);
    const bedroomsElement = getByText(`${bedrooms}`);
    expect(bedroomsElement).toBeInTheDocument();
});

test("renders the price correctly", () => {
    const price = 1000;
    const { getByText } = render(<PropertyCard price={price} />);
    const priceElement = getByText(`${price}`);
    expect(priceElement).toBeInTheDocument();
})

test("renders the email correctly", () => {
    const email = "johndoe@example.com";
    const { getByText } = render(<PropertyCard email={email} />);
    const emailElement = getByText(`${email}`);
    expect(emailElement).toBeInTheDocument();
})