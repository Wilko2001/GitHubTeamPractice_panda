import React, { useState } from 'react'
import "../styles/side-bar.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import qs from "qs";
import searchIcon from "../images/search.svg";

const SideBar = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const { search } = useLocation();


    const handleSearch = event => {
        event.preventDefault();

        const newQueryString = buildQueryString("query", { title: { $regex: query } });
        navigate(newQueryString);
    }

    const buildQueryString = (operation, valueObj) => {

        const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true })

        const newQueryParams = {
            ...currentQueryParams,
            [operation]: JSON.stringify({
                ...JSON.parse(currentQueryParams[operation] || "{}"),
                ...valueObj,
            }),
        };
        return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
    };

    return (
        <div className="sidebar">
            <form onSubmit={handleSearch} className="search-form">
                <input className="search-input" placeholder="Search..."
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="search-button">
                    <img src={searchIcon} alt="search-icon" />
                </button>
            </form >

            <Link to={buildQueryString("query", { city: "Leeds" })}>Leeds</Link>
            <Link to={buildQueryString("query", { city: "Sheffield" })}>Sheffield</Link>
            <Link to={buildQueryString("query", { city: "Manchester" })}>Manchester</Link>
            <Link to={buildQueryString("query", { city: "Liverpool" })}>Liverpool</Link>
            <Link to={buildQueryString("sort", { price: +1 })}>Price Ascending</Link>
            <Link to={buildQueryString("sort", { price: -1 })}>Price Descending</Link>
        </div >
    )
}

export default SideBar;
