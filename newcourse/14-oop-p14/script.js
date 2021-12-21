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

/*
// Class expression
// const PersonCl = class {}

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Instance Methods
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

  // Static Method
  static hey() {
    console.log(`Hey there ${this.fullName} 👋`);
    console.log(this);
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
  #movements: [400, 50, 2500, 300],

  get latest() {
    return this.#movements.slice(-1).pop();
  },

  set latest(movement) {
    this.#movements.push(movement);
  },
};

console.log(account.latest); // getter
account.latest = 50; // setter
console.log(account.#movements);
*/

/*
    EP 210 - Static Methods
*/

/*
PersonCl.hey();

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge(); // 35

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1957);
sarah.calcAge(); //80
*/

/*
    EP 213 - Inheritance between Classes - constructor functions
*/
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const mike = new Student('Mike', 2020, 'Computer Science');

console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

/*
    EP 215 - Inheritance between Classes - ES6 Classes
*/
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Instance Methods
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

  // Static Method
  static hey() {
    console.log(`Hey there ${this.fullName} 👋`);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always need to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}.`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }.`
    );
  }
}

const martha = new StudentCl('Martha Smith', 2005, 'Information Technology');
martha.introduce();
martha.calcAge();
*/
/*
    EP 216 - Inheritance between Classes - Object.create
*/
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2009, 'Computer Science');
jay.introduce();
jay.calcAge();
*/

/*
    EP 217 - Another Class Example
*/

class Account {
  // 1. Public fields (instances)
  locale = navigator.language;

  // 2. Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected property
    this.#pin = pin;
    // this.#movements = [];
    // this.locale = navigator.language; // en-US

    console.log(`Thanks for opening an account, ${this.owner}`);
  }

  // 3. Public Methods
  getMovements() {
    return this.#movements;
  }

  deposit(value) {
    this.#movements.push(value);
    return this;
  }

  withdraw(value) {
    this.deposit(-value);
    return this;
  }

  _approveLoan(value) {
    return true;
  }

  requestLoan(value) {
    if (this._approveLoan(value)) {
      this.deposit(value);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4. Private Methods - NOT IMPLEMENTED YET
  // #approvedLoan() {}
}

const acc1 = new Account('Kent', 'CAD', 1111);
acc1.deposit(250);
acc1.withdraw(20);
acc1.requestLoan(1000);
Account.helper();

console.log(acc1);
// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000); // cannot read properties - undefined

/*
    EP 218 - Encapsulation: Protected Properties and Methods
*/

// DATA PRIVACY -- to prevent code from outside the class to manipulate the code.

/*
    EP 219 - Encapsulation: Private Class Fields and Methods
*/

/*
    EP 220 - Chaining Methods
*/

/*
    EP 221 - ES6 Classes Summary
*/
