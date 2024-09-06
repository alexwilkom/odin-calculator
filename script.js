let firstNumber;
let operator;
let secondNumber;
let isClear = true;
const operands = document.querySelectorAll(".operand");

function operate(a, b, operator) {
    if (operator === "+") {
        return String(a + b);
    } else if (operator === "-") {
        return String(a - b);
    } else if (operator === "x") {
        return String(a * b);
    } else if (operator === "/") {
        if (b === 0) return "Can't divide by zero"
        else String(a / b);
    }
}

function displayText(value) {
    const textDisplay = document.querySelector("#display");
    if (isClear) {
        textDisplay.textContent = value;
        isClear = false
    } else {
        textDisplay.textContent += value;
    }
}

operands.forEach(operand => {
    operand.addEventListener("click", event => {
        const number = event.target.value;
        displayText(number);
    })
})