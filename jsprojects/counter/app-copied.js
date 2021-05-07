// initial count
let count = 0

// select value and buttons
const value = document.querySelector("#num-count")
const btns = document.querySelectorAll(".btn")


// get all buttons 
btns.forEach(function(btn) {
    btn.addEventListener('click', e => {
        const styles = e.currentTarget.classList
        if (styles.contains('decrease')) {
            count--
        } else if (styles.contains('increase')) {
            count++
        } else {
            count = 0;
        }
        if (count < 0) {
            value.style.color = 'red'
        } else if (count > 0){
            value.style.color = 'green'
        } else {
            value.style.color = 'black'
        }
        value.textContent = count
    })
})