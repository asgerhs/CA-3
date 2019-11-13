import React from 'react';
import { NavLink } from 'react-router-dom';

const URLs = {
    "Home": "/",
    "Login": "login",
    "Products": "/products",
    "ProductId": "/poroduct/:id",
    "Contact": "/contact",
    "FAQ": "/FAQ",
    "Basket": "/cart",
    "Checkout": "/checkout"
}


function URLSettings() {
    const getURL = (key) => { return URLs.get(key) }
    const getLink = (key) => { return <NavLink activeClassName="active" to={URLs.key}>{key}</NavLink> }

    return {
        getURL,
        getLink
    }
}
export default URLSettings();


