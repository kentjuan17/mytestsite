'use strict';

// HOW HOISTING WORKS ---- TEMPORAL DEAD ZONE ---- Variables

// console.log(me); // result will be undefined
// console.log(job); // reference error, cannot access 'job' before initialization
// console.log(year);

var me = 'Kent';
let job = 'IT';
const year = 1989;

// TEMPORAL DEAD ZONE ---- Functions

// console.log(addDecl(2, 3));
// // console.log(addExpr(3, 4));
// console.log(addArrow(4, 5));

function addDecl(a, b) {
  return a + b;
} // result will be undefined

const addExpr = function (a, b) {
  return a + b;
}; // reference error, cannot access 'job' before initialization

const addArrow = (a, b) => a + b; // reference error, cannot access 'job' before initialization

// TEMPORAL DEAD ZONE ---- Example
// console.log(undefined);

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;
// //

// console.log(this); // window object

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this); // window object
// };

// calcAge(1989);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this); // no owned 'this' keyword
// };

// calcAgeArrow(1989);

const kent = {
  year: 1989,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
kent.calcAge();

const tine = {
  year: 1987,
};

tine.calcAge = kent.calcAge;
tine.calcAge();
