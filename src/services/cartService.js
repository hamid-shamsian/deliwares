export function getCart() {
   return JSON.parse(localStorage.getItem("cart") || "[]");
}

export function putCart(cart) {
   localStorage.setItem("cart", JSON.stringify(cart));
}
