'use strict';

// function logger() {
//     console.log('My name is Kent')
// }

// const isEven = new Function('kahitAno', 'return kahitAno % 2');

//FUNCTIONS PART 1
// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(21, 22);
// console.log(appleOrangeJuice);


// //FUNCTIONS PART 2 - function declaration
// function calcAge1(birthYeah) {
//     return 2021 - birthYeah;
// }
// const age1 = calcAge1(1991);

// //function expression
// const calcAge2 = function (birthYeah) {
//     return 2037 - birthYeah;
// }
// const age2 = calcAge2(1991);

// console.log(age1, age2)



// //Arrow Function
// const calcAge3 = birthYeah => 2037 - birthYeah;
// const age3 = calcAge3(1989);
// console.log(age3);

// const yearsUntilRetirement = (birthYeah, firstName) => {
//     const age = 2037 - birthYeah;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1989, 'Kent'));
// console.log(yearsUntilRetirement(1987, 'Tine'));



//Functions calling other functions
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(3,3));


// const calcAge = function(birthYeah) {
//     return 2037 - birthYeah;
// }

// const yearsUntilRetirement = function (birthYeah, firstName) {
//     const age = calcAge(birthYeah);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired 🎉`);
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(1960, 'Kent'));
// console.log(yearsUntilRetirement(1987, 'Tine'));




//  ARRAYS

// const friends = ['Michael', 'Steven', 'Peter'];

// // const years = new Array(1989, 1981, 1982, 1987);

// const firstName = 'Kent';
// const kent = [firstName, 'Juan', 2037 - 1989, 'student', friends];
// console.log(kent);

// //  Exercise

// const calcAge = function (birthYeah) {
//     return 2037 - birthYeah;
// }

// const years = [1989, 1981, 1982, 1987, 1995];


// ARRAY OBJECTS

// const kent = {
//     firstName: 'Kent',
//     lastName: 'Juan',
//     birthYear: 1989,
//     job: 'student',
//     friends: ['Mic', 'Jr', 'Biboy'],
//     hasDriverLicense: true,
//     //function expression, object method 
//     calcAge: function() {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function() {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? 'a': 'no'} driver's license`;
//     }
// };

// const nameKey = 'Name';
// console.log(kent['first' + nameKey]);
// console.log(kent['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Kent? Choose between firstName, lastName, age, job, and friends');
// if (kent[interestedIn]) {
//     console.log(kent[interestedIn])
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
// }

// kent.location = 'Philippines';
// kent['twitter'] = '@ikentweetjuan';
// console.log(kent);

// Challenge

// console.log(`${kent.firstName} has ${kent.friends.length} friends and his best friend is called ${kent.friends[0]}`);

// console.log(kent.calcAge()); //dot notation
// console.log(kent['calcAge'](1989)); //bracket notation


// Challenge
//  "Kent is a 46-year old student, and he has a driver's license"
// console.log(kent.getSummary())


// LOOOOOOOOOPS

//for loop keeps running while condition is TRUE
// for (let i = 1; i <= 10; i++) {
//     console.log(`Lifting weights repitition ${i} 🏋️‍♀️`);
// }

// const kentArray = [
//     'Kent',
//     'Juan',
//     2037 - 1989,
//     'student',
//     ['Mic', 'JR', 'Biboy'],
//     true
// ];

// const types = [];

// for (let i = 0; i < kentArray.length; i++) {
//     //reading from kent array
//     console.log(kentArray[i], typeof kentArray[i]);

//     // filling types array
//     // types[i] = typeof kentArray[i];
//     types.push(typeof kentArray[i]);
// }
// console.log(types)

// const years = [1989, 1995, 1981, 2012];
// const ages = [];

// for (let i in years) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

// //continue and break
// console.log('----ONLY STRINGS---')
// for (let i in kentArray) {
//     if (typeof kentArray[i] !== 'string') continue;

//     console.log(kentArray[i], typeof kentArray[i]);
// }

// console.log('----BREAK WITH NUMBER----')
// for (let i in kentArray) {
//     if (typeof kentArray[i] === 'number') break;

//     console.log(kentArray[i], typeof kentArray[i]);
// }


// const kent = [
//     'Kent',
//     'Juan',
//     2037 - 1989,
//     'student',
//     ['Mic', 'JR', 'Biboy'],
//     true
// ];

// for (let i = kent.length-1; i >= 0; i--) {
//     console.log(kent[i]) 
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`----- Starting exercise ----- ${exercise}`);

//     for (let rep = 1; rep <= 6; rep++) {
//         console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
//     }
// }

// WHILE LOOP
// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weight repetition ${rep}`);
//     rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop ends`);
}
