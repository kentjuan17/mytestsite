'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // ES 5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 5);

// // skip to default parameter - undefined
// createBooking('LH123', undefined, 1000);

// VALUE VS REFERENCE

// const flight = 'LH234';
// const kent = {
//   name: 'Kent Juan',
//   passport: 1987512412,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 1987512412) {
//     alert('Checked in');
//   } else {
//     alert(`Wrong passport!`);
//     console.log(passenger.passport);
//   }
// };

// // checkIn(flight, kent);
// // console.log(flight);
// // console.log(kent);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };

// newPassport(kent);
// checkIn(flight, kent);

// Functions Accepting Callback Functions
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed sring: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name} function`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// // Javascript uses callbacks all the time
// const high5 = function () {
//   console.log('🖐');
// };

// document.body.addEventListener('click', high5);

// ['Kent', 'Melfin', 'Jef', 'Pol', 'Yami'].forEach(high5);

// FUNCTIONS RETURNING FUNCTIONS
// const greet = function(greeting) {
//   return function(name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Kent');
// greeterHey('Tine');

// greet('Hello')('Kent');

// FUNCTIONS RETURNING FUNCTIONS using arrow function
// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greetHey = greet('Well Hello');
// greetHey('Kent');

// const pal = {
//   airline: 'Philippine Airlines',
//   iataCode: 'PAL',
//   bookings: [],
//   // book: function() {}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// pal.book(679, 'Kent Juan');
// pal.book(942, 'Tine Juan');
// console.log(pal);

// const cebuPac = {
//   airline: 'Cebu Pacific',
//   iataCode: 'CB',
//   bookings: [],
// };

// const book = pal.book;

// // Does NOT work
// // book(23, 'Sarah')

// // CALL METHOD
// // call the book method from pal object to cebupac object
// book.call(cebuPac, 445, 'Sarah');
// console.log(cebuPac);

// book.call(pal, 432, 'Marion');
// console.log(pal);

// const airCanada = {
//   airline: 'Air Canada',
//   iataCode: 'AC',
//   bookings: [],
// };

// book.call(airCanada, 887, 'Robert De Niro');
// console.log(airCanada);

// // APPLY METHOD - not mostly used anymore in modern JS
// const flightData = [213, 'Anne Hathaway'];
// book.apply(airCanada, flightData);
// console.log(airCanada);
// // same as the one above
// book.call(airCanada, ...flightData);

// // BIND METHOD
// // book.call(cebuPac, 112, 'Matthew McConnaughey')
// const bookCebuPac = book.bind(cebuPac);
// const bookAC = book.bind(airCanada);
// bookCebuPac(112, 'Matthew McConnaughey');
// bookAC(224, 'John Cena');
// // PARTIAL APPLICATION - part of the original functon is already applied
// const bookCebuPac112 = book.bind(cebuPac, 112);
// bookCebuPac112('Morgan Freeman');

// // Using BIND METHOD With Event Listeners
// pal.planes = 300;
// pal.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', pal.buyPlane.bind(pal));

// // Partial application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// // addVAT = value => value + value * 0.23

// console.log(addVAT(123));
// console.log(addVAT(300));

// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
// IIFE - IIFE - IIFE - IIFE
