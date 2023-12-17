function add(num1, num2) {return num1 + num2;}
function subtract(num1, num2) {return num1 - num2;}
function multiply(num1, num2) {return num1 * num2;}
function divide(num1, num2) {return num1 / num2;}

function operate(num1, num2, operator) {
    switch(operator) {
        case `+`:
            return add(num1, num2);
            break;
        case `-`:
            return subtract(num1, num2);
            break;
        case `x`:
            return multiply(num1, num2);
            break;
        case `/`:
            return divide(num1, num2);
            break;
        default:
            return `ERROR`;
            break;
    }
}

let calcNum1 = 0;
let calcNum2 = 0;
let calcOperator = ``;
let input = ``;

const display = document.querySelector(`#display`);
const displayButtons = document.querySelectorAll(`.display`);
Array.from(displayButtons);
const equals = document.querySelector(`#equals`);
const clear = document.querySelector(`#clear`);

displayButtons.forEach((button) => {
    button.addEventListener(`click`, (event) => {
        display.textContent += button.textContent;
    })
})

equals.addEventListener(`click`, () => {
    input = display.textContent;
    if (input.includes(`+`)) {
        operator = `+`;
    }
    else if (input.includes(`-`)) {
        operator = `-`;
    }
    else if (input.includes(`x`)) {
        operator = `x`;
    }
    else if (input.includes(`/`)) {
        operator = `/`;
    } else {
        console.log(`ERROR`);
    }
    input = input.split(operator);
    input = input.map((number) => parseInt(number));
    calcNum1 = input[0];
    calcNum2 = input[1];

    display.textContent = operate(calcNum1, calcNum2, operator);
})
clear.addEventListener(`click`, () => {
    display.textContent = ``;
})