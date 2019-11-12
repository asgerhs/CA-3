import React from 'react';
import { Link } from 'react-router-dom';

let URLs = new Map(
    ["Home", "/"],
    ["Products", "/products"],
    ["productId", "/poroduct/:id"],
    ["Contact", "/contact"],
    ["FAQ", "/FAQ"],
    ["Basket", "/cart"],
    ["Checkout", "/checkout"]);



function URLSettings() {
    const getURL = (key) => { return URLs.get(key) }
    const getLink = (key) => { return <Link to={URLs.get(key)}>{key}</Link> }

    return {
        getURL,
        getLink
    }
}
export default URLSettings();


