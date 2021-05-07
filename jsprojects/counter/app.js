// initial count
let countValue = 0;

// Select value and buttons
const counter = document.querySelector('#num-count')
const btnDec = document.querySelector('#btn-decrease')
const btnInc = document.querySelector('#btn-increase')
const reset = document.querySelector('#reset')




btnInc.addEventListener('click', () => {
    counter.textContent++;
    countValue++;
    // console.log(countValue)
    negative(countValue);
})

btnDec.addEventListener('click', () => {
    counter.textContent--;
    countValue--;
    // console.log(countValue);
    negative(countValue);
})

reset.addEventListener('click', () => {
    counter.textContent = '0';
    countValue = 0;
    // console.log('reset to 0');
    negative(countValue);
})


let negative = num => {
    if (num < 0) {
        counter.style.color = 'red'
    } else {
        counter.style.color = 'black'
    }
}