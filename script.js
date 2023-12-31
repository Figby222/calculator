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

    return Math.round(result*10000)/10000;
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
const decimal = document.querySelector(`#decimal`);
const equals = document.querySelector(`#equals`);
const backspace = document.querySelector(`#backspace`);
const clear = document.querySelector(`#clear`);

numberButtons.forEach((button) => {
    button.addEventListener(`click`, (event) => {
        display.textContent += button.textContent;
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener(`click`, (event) => {
        if (calcOperator) {
            calculateExpression();
        }
        decimal.disabled = false;
        calcOperator = button.textContent;
        display.textContent += button.textContent;
    });
});

decimal.addEventListener(`click`, () => {
    if (decimal.disabled == false) {
        decimal.disabled = true;
    }
    else {
        decimal.disabled = false;
    }
});

function calculateExpression() {
    input = display.textContent;
    input = input.split(calcOperator);
    input = input.map((number) => parseFloat(number));
    calcNum1 = input[0];
    calcNum2 = input[1];
    display.textContent = operate(calcNum1, calcNum2, calcOperator);
    calcNum1 = 0;
    calcNum2 = 0;
    calcOperator = ``;
}

function removeCharacter() {
    display.textContent = display.textContent.slice(0, -1);
}

function clearDisplay() {
    calcNum1 = 0;
    calcNum2 = 0;
    calcOperator = ``;
    display.textContent = ``;
    decimal.disabled = false;
}

equals.addEventListener(`click`, calculateExpression);

backspace.addEventListener(`click`, removeCharacter);

clear.addEventListener(`click`, clearDisplay);

document.addEventListener(`keydown`, (e) => {
    const possibleKeys = `0123456789`;
    const operatorKeys = `+-x/`;
    if (operatorKeys.includes(e.key) && calcOperator == false) {
        calcOperator = e.key;
        display.textContent += e.key;
        decimal.disabled = false;
    }
    else if (e.key == `.` && decimal.disabled == false) {
        display.textContent += e.key;
        decimal.disabled = true;
    }
    else if (possibleKeys.includes(e.key)) {
        display.textContent += e.key;
    } 
    else if (e.key == `=` || e.key == `Enter`){
        calculateExpression();
    }
    else if (e.key == `Backspace`) {
        removeCharacter();
    }
    else if (e.key == `c`) {
        clearDisplay();
    }
});