let URLs = new Map(
    ["Home", "/"],
    ["Products", "/products"],
    ["productId", "/poroduct/:id"],
    ["Contact", "/contact"],
    ["FAQ", "/FAQ"],
    ["Basket", "/cart"],
    ["Checkout", "/checkout"]);



function URLSettings() {
    const getURL = (key) => { URLs.get(key) }
    const getLink = (key) => { <Link to={URLs.get(key)}>{key}</Link> }

    return {
        getURL,
        getLink
    }
}
export default URLSettings();


