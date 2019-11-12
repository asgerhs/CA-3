import React from 'react';
import { Link, NavLink } from 'react-router-dom';

let URLs = {
    "Home": "/",
    "Login": "/login"
}




function URLSettings() {
    const getURL = (key) => { return URLs.get(key) }
    const getLink = (key) => { return <Link to={URLs.get(key)}>{key}</Link> }
    const getNavLink = (key) => { return <NavLink path={URLs.get(key)}>{key}</NavLink> }

    return {
        getURL,
        getLink,
        getNavLink
    }
}
export default URLSettings();


