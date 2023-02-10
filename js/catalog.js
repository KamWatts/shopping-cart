/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
state.cart = new Cart([]);

// On screen load, we call this method to put all of the product options
// (the things in the state.allProducts array) into the drop down list.
function populateForm() {
  const selectElement = document.getElementById('items');
  for (let i in state.allProducts) {
    let option = document.createElement('option');

    option.textContent = state.allProducts[i].name;

    option.value = state.allProducts[i].name;

    selectElement.appendChild(option);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  event.preventDefault()
  // Do all the things ...
  addSelectedItemToCart();
  state.cart.saveToLocalStorage();
  state.cart.updateCounter();
  updateCartPreview();

}

// DONE: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  const itemSelected = document.getElementById('items').value;
  const quantitySelected = document.getElementById('quantity').value;
  state.cart.addItem(itemSelected, quantitySelected);
  // console.log(itemSelected, quantitySelected)
  // console.log(state.cart)
}

function updateCartPreview() {
  const getcartContentsDiv = document.getElementById(`cartContents`)
  let itemsField = document.getElementById(`items`).value
  let quantityField = document.getElementById(`quantity`).value
  let divTwo = document.createElement(`div`)
  let concatValues = `${itemsField}: ${quantityField}`
  divTwo.textContent = concatValues
  getcartContentsDiv.appendChild(divTwo)
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();