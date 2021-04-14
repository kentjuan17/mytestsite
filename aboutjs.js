//console.log("Hello console.log");
//console.warn("Hello Warning");
//console.error("Hello Error");

//Variables
// var - can be conflict if backend reassigned value
// const - assign unique value
// let  - LET is the best choice to use variables

//Data Types
//String, Number, Boolean, null, undefined
/*const Name = "Peter";
const Age = 19;
const Rating = 49.3;
const isComplete = true;
const Val = null;
const unk = undefined;
//console.log(typeof Age);
let Library;
Library="Manila Library";
//console.log(Library);
let String = `Hi! My name is ${Name} and my age is ${Age}!`;
console.log(String);

//Array
const Fruits = ["Mango", "Banana", "Apple", "Pineapple"];
//Fruits.push("Guava"); // add on the last array
//Fruits.unshift("ReplacedMango"); //replaced the first array
//Fruits.pop(); // removes the last array
//console.log(Array.isArray(Fruits)); //validates array if belong to array
//console.log(Fruits.indexOf("Apple")); //gets the index of array
// Fruits.splice(1,1); // removes the known index of the value array
console.log(Fruits);

//Object Literals
//for API use 
//const tao = {
    firstName: 'Peter',
    lastName: 'Pendragon',
    age: 35,
    favorites: ['Apple', 'Blue', 'Keyboard'],
    familyMembers: {
        father: 'Pedro Sr.',
        mother: 'Nenang',
        sister: 'Nena'
    }
};
console.log(tao.firstName, tao.lastName); 
console.log(tao.favorites[1]);
console.log(tao.familyMembers.father, tao.lastName);
*/
const Contacts =[
    {
        id: 1,
        fullName: "Howl Pendragon",
        isSaved: "Phone"
    },
    {
        id: 2,
        fullName: "Sophie",
        isSaved: "Phone"
    },
    {
        id: 3,
        fullName: "Calcifer",
        isSaved: "SD"
    }
];
console.log(Contacts[1].fullName);