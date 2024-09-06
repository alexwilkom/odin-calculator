let firstNumber = "";
let selectedOperator;
let secondNumber = "";
let isClear = true;
const operands = document.querySelectorAll(".operand");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");

function operate(operator, a, b) {
    const x = Number(a);
    const y = Number(b);
    isClear = true;
    if (operator === "+") {
        return String(x + y);
    } else if (operator === "-") {
        return String(x - y);
    } else if (operator === "x") {
        return String(x * y);
    } else if (operator === "/") {
        if (y === 0) return "Can't divide by zero"
        else return String(x / y);
    }
}

function displayText(value) {
    const textDisplay = document.querySelector("#display");
    if (isClear) {
        textDisplay.textContent = value;
        isClear = false;
    } else {
        textDisplay.textContent += value;
    }
}

operands.forEach(operand => {
    operand.addEventListener("click", event => {
        const number = event.target.value;
        displayText(number);
        if (firstNumber && selectedOperator) secondNumber += number;
        else firstNumber += number;
    })
})

operators.forEach(operator => {
    operator.addEventListener("click", event => {
        const symbol = event.target.value;
        selectedOperator = symbol;
        isClear = true;
    })
})

equals.addEventListener("click", event => {
    const result = operate(selectedOperator, firstNumber, secondNumber);
    displayText(result);
    firstNumber = result;
    secondNumber = "";
    selectedOperator = "";
})