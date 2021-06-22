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
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed sring: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name} function`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// Javascript uses callbacks all the time
const high5 = function () {
  console.log('🖐');
};

document.body.addEventListener('click', high5);

['Kent', 'Melfin', 'Jef', 'Pol', 'Yami'].forEach(high5);
