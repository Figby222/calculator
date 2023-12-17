function add(num1, num2) {return num1 + num2;}
function subtract(num1, num2) {return num1 - num2;}
function multiply(num1, num2) {return num1 * num2;}
function divide(num1, num2) {return num1 / num2;}

function operate(num1, num2, operator) {

    if (num2 == 0 && operator == `/`) {
        return `You have 0 cookies and 0 friends`;
    }
    result = NaN;
    switch(operator) {
        case `+`:
            result = add(num1, num2);
            break;
        case `-`:
            result = subtract(num1, num2);
            break;
        case `x`:
            result = multiply(num1, num2);
            break;
        case `/`:
            result = divide(num1, num2);
            break;
    }

    if (isNaN(result)) {
        return num1;
    }

    return result;
}

let calcNum1 = 0;
let calcNum2 = 0;
let calcOperator = ``;
let input = ``;

const display = document.querySelector(`#display`);
const numberButtons = document.querySelectorAll(`.number.display`);
Array.from(numberButtons);
const operatorButtons = document.querySelectorAll(`.operator.display`);
Array.from(operatorButtons);
const equals = document.querySelector(`#equals`);
const clear = document.querySelector(`#clear`);

numberButtons.forEach((button) => {
    button.addEventListener(`click`, (event) => {
        display.textContent += button.textContent;
    })
})

operatorButtons.forEach((button) => {
    button.addEventListener(`click`, (event) => {
        if (calcOperator) {
            calculateExpression();
        }
        calcOperator = button.textContent;
        display.textContent += button.textContent;
    })
})

function calculateExpression() {
    input = display.textContent;
    input = input.split(calcOperator);
    input = input.map((number) => parseInt(number));
    calcNum1 = input[0];
    calcNum2 = input[1];
    display.textContent = operate(calcNum1, calcNum2, calcOperator);
    calcNum1 = 0;
    calcNum2 = 0;
    calcOperator = ``;
}

equals.addEventListener(`click`, calculateExpression)
clear.addEventListener(`click`, () => {
    calcNum1 = 0;
    calcNum2 = 0;
    calcOperator = ``;
    display.textContent = ``;
})