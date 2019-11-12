let URLs = new Map(
    ["Home", "/"],
    ["Login", "/login"]);



function URLSettings() {
    const getURL = (key) => { URLs.get(key) }
    const getLink = (key) => { <Link to={URLs.get(key)}>{key}</Link> }

    return {
        getURL,
        getLink
    }
}
export default URLSettings();


