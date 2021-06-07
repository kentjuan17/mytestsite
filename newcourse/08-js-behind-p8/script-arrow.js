'use strict';

// const kent = {
//   firstName: 'kent',
//   year: '1989',
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     // const isMillenial = function () {
//     //   console.log(this.year >= 1981 && this.year <= 1996);
//     // };

//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`); // arrow function does not get its own this keyword!!
//   },
// };

// kent.greet();
// kent.calcAge();

// Arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 5, 8);

// PRIMITIVE VS OBJECTS IN PRACTICE

// Primitive Types
let lastName = 'Estrada';
let oldLastName = lastName;
lastName = 'Juan';

console.log(oldLastName, lastName);

// Reference Types
const tine = {
  firstName: 'Tine',
  lastName: 'Estrada',
  age: 34,
};

const marriedTine = tine;
marriedTine.lastName = 'Juan';
console.log('Before Marriage:', tine);
console.log('After marriage:', marriedTine);

// Copying objects

const tine2 = {
  firstName: 'Tine',
  lastName: 'Estrada',
  age: 34,
  familyMembers: ['Kent', 'Khloe', 'Kody'],
};

const tineCopy = Object.assign({}, tine2);
tineCopy.lastName = 'Juan';

console.log('Before Marriage:', tine2);
console.log('After marriage:', tineCopy);

tineCopy.familyMembers.push('Snow White');
tineCopy.familyMembers.push('Kiki');
