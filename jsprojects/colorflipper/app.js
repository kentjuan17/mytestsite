const colors = [
    'hsl(101°, 54%, 43%)',
    'rgb(64, 50, 168)',
    '#e81083',
    '#179689',
    '#ddd',
    'hsl(32°, 100%, 40%)',
    '#ad0600',
    'rgb(52, 235, 100)',
    '#00b530',
    'hsl(282°, 31%, 59%)',
    'hsl(335°, 100%, 43%)',
    '#7e8a25',
    '#eb7531',
    'rgb(71, 61, 55)',
    'hsl(23°, 39%, 52%)',
    'rgb(79, 214, 210)',
    '#b3e8f5',
    'yellow',
    'cyan',
    'crimson'
];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

let random = num => Math.floor(Math.random()* num)

btn.addEventListener('click', () => {
    const displayColor = document.querySelector(".color")
    const randomNumber = colors[random(colors.length)]

    // console.log(randomNumber);
    document.body.style.backgroundColor = randomNumber;
    displayColor.textContent = randomNumber;
})
