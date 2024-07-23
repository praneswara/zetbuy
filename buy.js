// Select all "ADD TO CART" buttons
const buyNowButtons = document.querySelectorAll(".add-cart");
const cartContent = document.getElementById("cart-content");

// Add click event listeners to "ADD TO CART" buttons
buyNowButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    const itemName = card.querySelector(".card-title").innerText;
    const itemPrice = card.querySelector(".card-text").innerText;
    addToCart(itemName, itemPrice);
  });
});

// Function to add an item to the cart
function addToCart(itemName, itemPrice) {
  const cartItem = document.createElement("li");
  cartItem.classList.add("dropdown-item");
  cartItem.innerText = `${itemName} - ${itemPrice}`;
  cartContent.appendChild(cartItem);
  updateCartMessage();
}

// Function to update cart message
function updateCartMessage() {
  if (cartContent.children.length > 0) {
    cartContent.querySelector(".dropdown-item").innerText = ""; // Remove "Your cart is empty"
  }
}


