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
function removerFromLS(index) {
    const cart = getCart();
    saveCartToLS(cart.filter((_, i) => i !== index));
}
function updateTotal(total) {
    localStorage.setItem("total", total);
}
function getTotal() {
    const total = localStorage.getItem("total");
    if (total)
        return total;
    else
        return 0;
}
export { addToLS, removerFromLS, getCart,updateTotal,getTotal };