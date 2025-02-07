const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
    { id: 4, name: "Product 4", price: 40 },
    { id: 5, name: "Product 5", price: 50 },
];

// Function to render products
function renderProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - $${product.price}`;
        const button = document.createElement('button');
        button.textContent = 'Add to Cart';
        button.onclick = () => addToCart(product);
        li.appendChild(button);
        productList.appendChild(li);
    });
}

// Function to add product to cart
function addToCart(product) {
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    cart.push(product);
    sessionStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Function to render cart
function renderCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = ''; // Clear existing cart items
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(li);
    });
}

// Function to clear cart
function clearCart() {
    sessionStorage.removeItem('cart');
    renderCart();
}

// Event listener for clear cart button
document.getElementById('clear-cart-btn').onclick = clearCart;

// On page load, render products and cart
window.onload = () => {
    renderProducts();
    renderCart();
};
