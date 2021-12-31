// Importing module
// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity as quantity,
// } from './shoppingCart.js';

console.log('Importing module');

// Named Imports/Exports
// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.price, ShoppingCart.qt);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);
add('mango', 2);

console.log(cart);

//  DO NOT MIX DEFAULT AND NAMED EXPORTS
// USE EITHER DEFAULT OR NAMED EXPORTS

// IMPORTS ARE NOT COPIES OF EXPORTS, THEY ARE LIVE CONNECTION

/* 
    EP 267 - The Module Pattern
*/

/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 42;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 2);
ShoppingCart2.addToCart('pizza', 4);
// ShoppingCart2.orderStock('banana', 6);

console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost); // undefined
*/

/* 
    EP 268 - CommonJS Modules
*/

/*
// Export
export.addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

// Import
const {addToCart} = require('./shoppingCart.js');

*/

/* 
    EP 269 - A Brief Introduction to the Command Line
*/

/* 
cd - change directory 
ls or dir - list directory
new-item or edit or touch
mkdir - create new folder
mv - move file
rmdir - remove existing folder without file
*/

/* 
    EP 270 - Introduction to NPM (Node Package Manager)
*/

import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

/* 
    EP 271 - Bundling with Parcel and NPM Scripts
*/

// not reload the live page whenever saving the script
if (module.hot) {
  module.hot.accept();
}
