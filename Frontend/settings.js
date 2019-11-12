let URLs = {
    "Home": "/",
    "Login": "/login"
}




function URLSettings() {
    const getURL = (key) => { URLs.get(key) }
    const getLink = (key) => { <Link to={URLs.get(key)}>{key}</Link> }
    const getNavLink = (key) => { <NavnLink path={URLs.get(key)}>{key}</NavnLink> }

    return {
        getURL,
        getLink,
        getNavLink
    }
}
export default URLSettings();


