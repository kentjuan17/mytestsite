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

btn.addEventListener('click', function () {
  countriesContainer.innerHTML = '';
  getCountryData('poland');
});

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
