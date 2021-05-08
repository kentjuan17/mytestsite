class Calculator {
    constructor(prevOperand, currentOperand) {
        this.prevOperand = prevOperand;
        this.currentOperand = currentOperand;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.prevOperand = '';
        this.operation = '';
    }

    delete() {

    }
    
    appendNumber() {
        this.currentOperand = number
    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {
        this.currentOperand.innerText = this.currentOperand
    }
}


const number = document.querySelectorAll('[data-number]');
const operation = document.querySelectorAll('[data-operation]');
const equals = document.querySelector('[data-equals]');
const deletebtn = document.querySelector('[data-delete]');
const allClear = document.querySelector('[data-all-clear]');
const prevOperand = document.querySelector('[data-previous-operand]');
const currentOperand = document.querySelector('[data-current-operand]');


const calculator = new Calculator(prevOperand, currentOperand)

number.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})