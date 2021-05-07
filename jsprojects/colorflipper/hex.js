const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

let random = num => Math.floor(Math.random()* num)

btn.addEventListener('click', () => {
    const displayColor = document.querySelector(".color")
    let hexValue = '#';
    
    for (let i = 0; i < 6; i++) {
        const randomNumber = hex[random(hex.length)]
        hexValue += randomNumber;
    }

    // console.log(hexValue);
    document.body.style.backgroundColor = hexValue;
    displayColor.textContent = hexValue;
})