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
//console.log(Contacts[1].fullName);

//For Loop
/*for (let i = 0; i < Contacts.length; i++) {
    console.log(Contacts[i].id);
} */

//While Loop
/*let i = 0;
*while(i < 10) {
*    console.log(`While loop ang value ay ${i}`);
*    i++;
*} */

/*//For Of Loop
for (let contact of Contacts){
    console.log(contact);
}; */

/* // For Each Loop
Contacts.forEach( function(contact){
    console.log(contact.fullName)
}); */

/*const ContactsFullName = Contacts.map(function(contact) {
    return contact.fullName;
});

/*console.log(ContactsFullName); */

/* //filter to only view the data that is saved "Phone"
//connecting functions
const ContactsPhone = Contacts.filter(function(contact) {
    return contact.isSaved == "Phone";
}).map(function(contact){
    return contact.fullName;
});

console.log(ContactsPhone); */

/*//JSON - for API USE
const ContactsJSON = JSON.stringify(Contacts);

console.log(ContactsJSON); */

//CONDITIONALS
//Logical Operators - IF STATEMENT
// OR is ||
/*const x = "201";

if (x === 100 || x > 200) {
    console.log("true");
} else if(x > 200) {
    console.log("Value greater than 200");
} else {
    console.log("False");
} */

//function types
/*let x = 100;
let y = 200;

function GetSum(x, y) {
    return x + y;
}
console.log(GetSum(x, y)); */

// ES6 - arrow function
//
/*const GetSum = x =>  x + 400;
console.log(GetSum(100)); */

//OOP

//constructor function
function Tao() {
    this.firstName = firstName;
    this.lastName = lastName;
    this.bt = bt;

    this.getFullName = () => {
        return `${this.firstName} ${this.lastName}`;
    }
}

//class - First letter should be capital letter - because small letter on the first letter is prone to errors
/* class Tao {
    constructor(firstName, lastName, bt){
        this.firstName = firstName;
        this.lastName = lastName;
        this.bt = bt;
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;

    }
} */

//instantiate object
const tao1 = new Tao('Kent', 'Juan', 'O');
const tao2 = new Tao('Kristine','Juan','O+');

console.log(tao1.getFullName());
console.log(tao2);