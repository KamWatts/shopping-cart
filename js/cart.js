/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');

if (deleteLink === isClicked) {
table.addEventListener('click', removeItemFromCart);
}

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  state.cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  for (let i in tbody) {
  tbody[i].removeChild(tr);
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  let showTheNewTr = document.createElement('tbody'); // DONE: Find the table body
  showTheNewTr.appendChild(showTheNewTr);
  
  for (let i = 0; i < CartItems.length; i++) { // DONE: Iterate over the items in the cart
    document.createElement('tr'); // DONE: Create a TR

    document.createElement('td'); // DONE: Create a TD for the delete link, quantity,  and the item

    document.removeEventListener(Cart.item, this.quantity);

    document.appendChild(showTheNewTr); // DONE: Add the TR to the TBODY and each of the TD's to the TR
  }
  

}

function removeItemFromCart(event) {

  let deleteData = localStorage.setItem('delete');// DONE: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
