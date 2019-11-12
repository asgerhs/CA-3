let URLs = new Map(
    ["home", "/"],
    ["products", "/products"],
    ["productId", "/poroduct/:id"],
    ["contact", "/contact"],
    ["faq", "/FAQ"],
    ["basket", "/cart"],
    ["checkout", "/checkout"]);

let URLinks = new Map(
    ["home", <Link to="/">Home</Link>],
    ["products", <Link to="/products">Products</Link>],
    ["productId", <Link to="/poroduct/:id">{id}</Link>],
    ["contact", <Link to="/contact">Contact</Link>],
    ["faq", <Link to="/FAQ">FAQ</Link>],
    ["basket", <Link to="/cart">Cart (Husk at indsætte billede igå)</Link>],
    ["checkout", <Link to="/checkout">Checkout</Link>]);


function URLSettings() {
    const getURL = (key) => { URLs.get(key) }
    const getLink = (key) => { URLinks.get(key) }

    return {
        getURL,
        getLink
    }
}
export default URLSettings();


