"use strict";

// Clean Code -----
// {
//     r1: ReadableStream,
//     r2: Reusable,
//     r3: Refactorable,
// }
// ==============================================================
// Naming convention
// ==============================================================
// Avoid one letter variable
// wrong
// const d = new Date();
// const cd = d.getDate();
// correct
// const date = new Date();
// const currentDate = date.getDate();
// ==============================================================
// Avoid Abbreviations
// wrong
// const numLst = [69,45,234]
// const frstNum = numLst[0]
// correct
// const numberList = [231,23,1]
// const firstNumber = numberList[0]
// ==============================================================
// Abstract/Implicit
// wrong
// const peopleNames = ['Kent','Tine','Khloe','Kody']
// peopleNames.forEach(n=> {
//     doStuff();
//     doSomeOtherStuff();
//     //
//     // Wait. what is 'n' for again?
//     dispatch(n)
// })
// correct
// const peopleNames = ["Kent", "Tine", "Khloe", "Kody"];
// peopleNames.forEach((name) => {
//   doStuff();
//   doSomeOtherStuff();
//   //
//   dispatch(name); // much better
// });
// ==============================================================
// Implicit
// wrong
// const data1 = [
//   { name: "Kent", age: 32 },
//   { name: "Tine", age: 34 },
//   { name: "Khloe", age: 10 },
//   { name: "Kody", age: 8 },
// ];
// const data2 = data1.map((d) => d.age + 1);
// correct
// const usersData = [
//   { name: "Kent", age: 32 },
//   { name: "Tine", age: 34 },
//   { name: "Khloe", age: 10 },
//   { name: "Kody", age: 8 },
// ];
// const usersAgeNextYear = usersData.map((user) => user.age + 1);
// ==============================================================
// Underscores for fun
// wrong
// const _userId = 500;
// const userName = '@heyhey123'
// const firstUser = __findUserWithId(_userId)
// const secondUser = __findUserWithId(userName)
// ==============================================================
// CLEAN FUNCTIONS
// explicit, predictable, and should only do one thing
// Refactor

// *GOOD
const addToCart = (cart, product) => {
  //
};
// ==============================================================
// avoid long arguments
// *GOOD
const createUser = ({ firstName, lastName, age, favoriteNumber }) => {
  //
  const user = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    favoriteNumber: favoriteNumber,
  };
};
createUser({
  firstName: "Kent",
  lastName: "Juan",
  age: 32,
  favoriteNumber: 17,
});
// ==============================================================
// USE Default arguments instead of conditionals

// *GOOD
const createShop = (name = "Jollibee") => {
  //
  const shopName = name;
};

createShop(" ");
// ==============================================================
// DON'T USE FLAGS AS PARAMETERS
// *GOOD
const showModal = () => {
  modal.classList.remove("hide");
};

const hideModal = () => {
  modal.classList.add("hide");
};
// Either you call showModal() or hideModal()
// ==============================================================
// FUNCTIONS SHOULD ONLY DO ONE THING

// !BAD
// const populateContainerWithRandomPlayers = (count, container) => {
//   const uniqueNames = new Set();
//   let randomName;
//   // Getting unique names
//   do {
//     randomName = names[getRandomIndexFrom(names)];
//     uniqueNames.add(randomName);
//   } while (uniqueNames.has(randomName) && uniqueNames.size < count);
//   // using unique names
//   uniqueNames.forEach((value) => {
//     container.appendChild(createPlayerElement({ name: value, score: 0 }));
//   });
// };

// *GOOD
const getUniqueNames = (count) => {
  const uniqueNames = new Set();
  let randomName;
  // Getting unique names
  do {
    randomName = names[getRandomIndexFrom(names)];
    uniqueNames.add(randomName);
  } while (uniqueNames.has(randomName) && uniqueNames.size < count);

  return uniqueNames;
};

const populateContainerWithRandomPlayers = (count, container) => {
  const uniqueNames = getUniqueNames(count);

  // using unique names
  uniqueNames.forEach((value) => {
    container.appendChild(createPlayerElement({ name: value, score: 0 }));
  });
};
// ==============================================================
// DRY - DON'T REPEAT YOURSELF
// * GOOD

const getAllRoundPlayers = () => {
  let allRoundPlayers = [];

  for (let i = 1; i <= 7; i++) {
    allRoundPlayers.push(document.getElementById(`players-r${i}`));
  }
};
getAllRoundPlayers();
