// js tutorial from MDN

// Strings
let string = 'The revolution will not be televised.';
console.log(string);

// Test below here
// const select = document.querySelector('select');
// const para = document.querySelector('p.i');

// select.addEventListener('change', setWeather);

// function setWeather() {
//   const choice = select.value;

//   if (choice === 'sunny') {
//     para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
//   } else if (choice === 'rainy') {
//     para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
//   } else if (choice === 'snowing') {
//     para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
//   } else if (choice === 'overcast') {
//     para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
//   } else {
//     para.textContent = 'You didn\'t select a choice yet';
//   }
// }

const select = document.querySelector('select');
const para = document.querySelector('p.i');

select.addEventListener('change', setWeather);

function setWeather() {
  const choice = select.value;

  switch (choice) {
    case 'sunny':
      para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
      break;
    case 'rainy':
      para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
      break;
    case 'snowing':
      para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      break;
    case 'overcast':
      para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      break;
    default:
      para.textContent = '';
  }
}

let isBirthday = false;

let greeting = ( isBirthday ) ? console.log('Happy birthday Mrs. Smith — we hope you have a great day!') : console.log('Good morning Mrs. Smith.');


const selectTheme = document.querySelector('#theme');
const html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}

selectTheme.onchange = function () {
    (select.value == 'black') ? update('black', 'white') : update('white', 'black');
}