// Name and Age Query Selector
const nameInput = document.querySelector('#name')
const ageInput = document.querySelector('#age')

const alertDetails = () => {
    alert(`
        Hello ${nameInput.value}! You are ${ageInput.value} years old!
    `)
}

const submitButton = document.querySelector(`#submit`)
const totalAmount = document.querySelector(`#total`)

// Simple setting of variable per class
const priceInput = document.querySelectorAll(`.price`)

submitButton.addEventListener('click', (e) => {
    let sum = 0

    for (let i = 0; i < priceInput.length; i++) {
        sum += Number(priceInput[i].value)
    }
    return totalAmount.value = sum
})

/* Simple setting of variables per ID
const price1Input = document.querySelector(`#price1`)
const price2Input = document.querySelector(`#price2`)
const price3Input = document.querySelector(`#price3`)
const price4Input = document.querySelector(`#price4`)

submitButton.addEventListener('click', (e) => {
    let sum = 0
    sum = Number(price1.value) + Number(price2.value) + Number(price3.value) + Number(price4.value)
    totalAmount.value = sum
})
*/