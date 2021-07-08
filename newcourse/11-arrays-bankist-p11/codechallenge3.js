'use strict';

/*

Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]

*/

// FROM CODE CHALLENGE #2
const calcAverageHumanAge = function (ages) {
  //   using Map Method
  const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAge);

  // using Filter method
  const adultDogs = humanAge.filter(age => age >= 18);
  console.log(adultDogs);

  // using Reduce Method
  const averageAge =
    adultDogs.reduce((acc, cur) => acc + cur, 0) / adultDogs.length;
  console.log(averageAge);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log('---- CHAINING ----');

// Arrow function and Using chaining
const calcAverageHumanAgeChain = ages => {
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  console.log(ages);
};
calcAverageHumanAgeChain([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAgeChain([16, 6, 10, 5, 6, 1, 4]);
