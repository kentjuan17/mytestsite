'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
};

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
      <img class="country__img" src="${data.flags.svg}" />
      <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)}M people</p>
          <p class="country__row"><span>🗣️</span>${Object.values(
            data.languages
          )}</p>
          <p class="country__row"><span>💰</span>${Object.keys(
            data.currencies
          )}</p>
      </div>
  </article>
`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
};

///////////////////////////////////////

// Helper function
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(` ${response.status} - ${errorMsg}`);

    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error('No neighbour found!');

      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(error => {
      console.log(`${error} ⚠️`);
      renderError(`Something went wrong ⚠️⚠️ ${error.message}. Try again!`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};

// btn.addEventListener('click', function () {
//   countriesContainer.innerHTML = '';
//   getCountryData('sweden');
// });

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// Promises with Async/Await
const whereAmI = async function () {
  try {
    // Geolocation
    const position = await getPosition();
    const { latitude: lat, longitude: lng } = position.coords;

    // Reverse Geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);

    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();

    // Country data
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );

    if (!resGeo.ok) throw new Error('Problem getting country');

    const data = await response.json();

    renderCountry(data[0]);
    countriesContainer.style.opacity = 1;

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (error) {
    console.error(error);
    renderError(`Something went wrong ⚠️`);
    countriesContainer.style.opacity = 1;

    // Refect promise returned from async function
    throw error;
  }
};

console.log('1: Getting location');
// const city = whereAmI(); //async function
// console.log(city)
// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(error => console.error(`2: ${error.message}`))
//   .finally(() => console.log('3: Finished getting location'));

// ASYNC IIFE - Immediately Invoked Function Expression
(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (error) {
    console.error(`2: ${error.message}`);
  }
  console.log('3: Finished getting location');
})();

/*
// Event Loop in Practice
console.log('Test Start'); // logs 1st
setTimeout(() => console.log('0 sec timer'), 0); // logs last because it executes the microtask queue first before callback queue
Promise.resolve('Resolved promise 1').then(response => console.log(response)); // logs 3rd
Promise.resolve('Resolved promise 2').then(response => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(response);
}); //logs 4th
console.log('Test End'); //logs 2nd
*/
/*
// Building a Simple Promise
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening 🔮');

  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN 💰');
    } else {
      reject(new Error('You Lose 👎'));
    }
  }, 2000);
});

lotteryPromise
  .then(response => console.log(response))
  .catch(error => console.log(error));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('I waited for 1 second');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 3 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 4 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 5 seconds'));

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));
*/
/*
// Promise - Geolocation API
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   error => reject(error)
    // );

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
*/
// getPosition().then(
//   position => console.log(position),
//   error => console.error(error)
// );
/*
const whereAmI = function () {
  getPosition()
    .then(position => {
      const { latitude: lat, longitude: lng } = position.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Problem with geocoding ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok) throw new Error(`Country not found ${response.status}`);
      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(error => console.log(`${error.message} ⚠️`))
    .finally(() => (countriesContainer.style.opacity = 1));
};
*/
// btn.addEventListener('click', whereAmI);

/*
const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    console.log(data);
    // Render country 1
    renderCountry(data);

    // Get neighbor country (2)
    const [neighbor] = data.borders;

    if (!neighbor) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbor}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('philippines');
getCountryAndNeighbour('usa');
// getCountryAndNeighbour('canada');
// getCountryAndNeighbour('saudi arabia');
*/

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const [neighbour] = data[0].borders;

//       if (!neighbour) return;

//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(error => {
//       console.log(`${error} ⚠️`);
//       renderError(`Something went wrong ⚠️⚠️ ${error.message}. Try again!`);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

/* 
    EP 242 - AJAX Call - XMLHttpRequest
 */

/* 
    EP 244 - Welcome to Callback Hell
 */

/* 
EP 245 - Promises and the Fetch API

Promises - an object that is used as a placeholder for the future result of an asynchronous operation
         - a container for a future value
*/

/* 
  EP 246 - Consuming Promises
 */

/* 
  EP 247 - Chaining Promises
 */

/* 
  EP 248 - Handling Rejected Promises
 */

/* 
  EP 249 - Throwing Errors Manually
  */

/* 
  EP 250 - Asynchoronous Behind the Scenes - EVENT LOOP
 */

/* 
  EP 252 - The Event Loop in Practice
 */

/* 
  EP 253 - Building a Simple Promise
 */

/* 
  EP 254 - Promisifying the Geolocation API
 */

/* 
  EP 256 - Consuming Promises with Async/Await
 */

/* 
  EP 257 - Error Handling with Try...Catch
 */

// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (error) {
//   console.log(error.message);
// }

/* 
  EP 258 - Returning Values from Async Functions
  */

/* 
  EP 259 - Running Promises in Parallel
  */

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    // console.log([data1.capital, data2.capital, data3.capital]);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log(data.map(d => d[0].capital));
  } catch (error) {
    console.error(error);
  }
};

get3Countries('portugal', 'canada', 'tanzania');
