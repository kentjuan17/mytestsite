'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Brushcetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: `Luna st. 202`,
//   starterIndex: 3,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

//Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// DESTRUCTURING ARRAYS --------------------------------
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Switching variables

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// THE SPREAD OPERATOR

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Kent';
// const letters = [...str, ' ', 'J.'];
// console.log(letters);
// console.log(...str);
// console.log(`${...str} Juan`); // Doesn't work!!

// Real world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// console.log(ingredients);

// // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// restaurant.orderPasta(...ingredients);

// Objects
// const newRestaurant = { foundedIn: 1997, ...restaurant, founder: 'Tine' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Tine Tindahan';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// REST PATTERN and PARAMETERS

// 1. Destructuring
// SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];
// // REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// // console.log(pizza, risotto, otherFood);

// // Objects - REST PATTERN
// // const { sat, ...weekdays } = restaurant.openingHours;
// // console.log(weekdays);

// // 2. Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// // add(2, 3);
// // add(5, 3, 7, 2);
// // add(8, 5, 2, 2, 3, 5, 9);

// const x = [23, 5, 69, 78, 7, 4];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach', 'pineapple');

// restaurant.orderPizza('mushrooms');

// SHORT CIRCUIT (&& and ||)
// Use ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'Kent');
// console.log('' || 'Kent');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('---- AND ----');
// console.log(0 && 'Kent');
// console.log(8 && 'Kent');

// console.log('Hello' && 24 && null && 'Kent');

// // Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// Nullish Coalescing Operator
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// LOOPING ARRAYS - "FOR OF" LOOP
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// old way
// for (const item of menu.entries()) console.log(`${item[0] + 1}: ${item[1]}`);

// new way - destructuring array
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log(...menu.entries());

// OPTIONAL CHAINING

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

//with optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// Optional chaining on Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Optional chaining on Arrays
// const users = [{ name: 'Kent', email: 'kentjuan17@gmail.com' }];

// console.log(users[0]?.name ?? 'User array empty');
// Same use as conditional if statement
// if (users.length > 0) console.log(users[0].name);
// else console.log('user array empty');

// Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // Entire object
// const entries = Object.entries(openingHours);

// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day}, we open at ${open} and close at ${close}`);
// }

// SETS - just like arrays but eliminates duplicate values
// sets do not have indexes for ex. ordersSet[0]

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet);
// console.log(new Set('Kent'));

// console.log(ordersSet.size); // just like length of arrays
// console.log(ordersSet.has('Pizza')); //same as include in arrays
// console.log(ordersSet.has('Bread'));

// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// // ordersSet.clear(); // delete all set entries
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']; // ARRAY
// const staffUnique = [...new Set(staff)]; // turns to array
// console.log(staffUnique);

// MAPS - data structure to map values to keys
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');

// // console.log(rest.get('name'));
// // console.log(rest.get(true));
// // console.log(rest.get(1));

// const time = 12;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// // console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear();
// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// // console.log(rest);
// // console.log(rest.size);

// // console.log(rest.get(arr));

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 👌'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

// // Convert objects to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));

// console.log(hoursMap);

// // Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt('Your answer'));
// console.log(answer);
// console.log(question.get(question.get('correct') === answer));

// Convert map to array
// console.log([...question]);
// console.log([question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

const airline = 'AC Air Canada';
const plane = 'A330';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log('B737'[0]);
console.log('B737'[2]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('a'));
console.log(airline.lastIndexOf('a'));
console.log(airline.indexOf('Canada'));

console.log(airline.slice(3));
console.log(airline.slice(3, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log();

// const title = document.querySelector('h1');

// title.addEventListener('click', () => {
//   if (title.style.color === 'blue') {
//     title.style.color = 'red';
//   } else {
//     title.style.color = 'blue';
//   }

//   // const titleStyle = title.style.color === 'blue' ? 'red' : 'blue';
//   // title.style.color === 'blue' ? 'red' : 'blue';
// });
