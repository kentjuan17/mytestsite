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


const calcAge = function(birthYeah) {
    return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
    const age = calcAge(birthYeah);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1960, 'Kent'));
console.log(yearsUntilRetirement(1987, 'Tine'));