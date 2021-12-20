'use strict';
/*
const Person = function (fullName, birthYear) {
  this.fullName = fullName;
  this.birthYear = birthYear;

  // never create method inside constructor function
  // this.calcAge = function(){
  //     console.log(2037 - this.birthYear);
  // }
};

const kent = new Person('Kent', 1989);
const tine = new Person('Tine', 1987);
const khloe = new Person('Khloe', 2011);
const kody = new Person('Kody', 2012);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

kent.calcAge();

console.log(kent.__proto__);
console.log(kent.__proto__ === Person.prototype); //true

console.log(Person.prototype.isPrototypeOf(kent)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false
// .prototype. === .prototypeOfLinkedObjects.

Person.prototype.species = 'Home Sapiens';
console.log(kent, kent.species);

console.log(kent.hasOwnProperty('fullName')); //true
console.log(kent.hasOwnProperty('species')); //false

// Prototype CHAIN
console.log(kent.__proto__.__proto__); // Person prototype
console.log(kent.__proto__.__proto__); // Object prototype
console.log(kent.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor);

const arr = [4, 6, 76, 5, 5, 6, 3, 4, 4, 4];
console.log(arr.__proto__); // filter, fill, findIndex,flatMap,push, shift
console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
*/

/*
    EP 208 - ES6 Classes
*/

// Class expression
// const PersonCl = class {}

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this.__fullName;
  }
}

const rick = new PersonCl('Rick Grimes', 1994);
const bea = new PersonCl('Bea Alonzo', 1991);
rick.calcAge();
console.log(rick);
console.log(bea);

console.log(rick.__proto__ === PersonCl.prototype); //true

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.fullName}`);
// };

rick.greet(); // Hey Rick

// 1. Classes are NOT hoisted
// 2. Class are first-class citizens
// 3. Classes are executed in strict mode

const account = {
  owner: 'kent',
  movements: [400, 50, 2500, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(movement) {
    this.movements.push(movement);
  },
};

console.log(account.latest); // getter
account.latest = 50; // setter
console.log(account.movements);
