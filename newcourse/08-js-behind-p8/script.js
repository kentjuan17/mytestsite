'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Tine'; //replaces the firstName GLOBAL variable
      const str = `Oh, and you're a millenial, ${firstName}!`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      // Reassigning outer scope;s variable
      output = 'NEW OUTPUT!';
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2,3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Kent';
calcAge(1989);
// console.log(age); // age is a variable of the calcAge function, therefore we cannot call
