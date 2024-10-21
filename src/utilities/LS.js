function saveCartToLS(cart) {
    const cartString = JSON.stringify(cart);
    localStorage.setItem("cart", cartString);
}

function getCart() {
    const storedCartString = localStorage.getItem("cart");
    if (storedCartString)
        return JSON.parse(storedCartString);
    else
        return [];
}

function addToLS(id) {
    const cart = getCart();
    cart.push(id);
    saveCartToLS(cart);
}
function removerFromLS(id) {
    const cart = getCart();
    saveCartToLS(cart.filter(idx => idx !== id));
}
export { addToLS, removerFromLS, getCart };