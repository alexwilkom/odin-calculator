let firstOperand = "";
let secondOperand = "";
let firstOperator = "";
let displayValue = "0";
let result = "";

const operands = document.querySelectorAll(".operand");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");

function handleOperands(operand) {
    const selectedOperand = operand.target.textContent;
    if (firstOperator === "") {
        if (displayValue === "0") {
            displayValue = selectedOperand;
        } else if (displayValue === firstOperand) {
            displayValue = selectedOperand;
        } else {
            displayValue += selectedOperand;
        }
    } else {
        if (displayValue === firstOperand) {
            displayValue = selectedOperand;
        } else {
            displayValue += selectedOperand;
        }
    }
    updateDisplay(displayValue);
}

function handleOperators(operator) {
    const selectedOperator = operator.target.textContent;
    if (!firstOperator) {
        firstOperand = displayValue;
        firstOperator = selectedOperator;
    } else {
        calculate();
        firstOperator = selectedOperator;
    }
}

function handleEquals() {
    if (!firstOperator) return;
    calculate();
    firstOperator = "";
}

function operate(operator, a, b) {
    const x = Number(a);
    const y = Number(b);
    if (operator === "+") {
        return String(x + y);
    } else if (operator === "-") {
        return String(x - y);
    } else if (operator === "x") {
        return String(x * y);
    } else if (operator === "/") {
        if (y === 0) {
            return "Can't divide"
        } else {
            if (Number.isInteger(x / y)) {
                return String(x / y)
            }
            return String((x / y).toFixed(3))
        }
    }
}

function calculate() {
    secondOperand += displayValue;
    result = operate(firstOperator, firstOperand, secondOperand);
    displayValue = result;
    updateDisplay(displayValue);
    firstOperand = result;
    secondOperand = "";
}

function updateDisplay(value) {
    const textDisplay = document.querySelector("#display");
    textDisplay.textContent = value;
}

function clear() {
    displayValue = "0";
    firstOperand = "";
    secondOperand = "";
    firstOperator = "";
    result = "";
    updateDisplay(displayValue);
}

operands.forEach(operand => { operand.addEventListener("click", handleOperands) })

operators.forEach(operator => { operator.addEventListener("click", handleOperators) });

equals.addEventListener("click", handleEquals)

clearBtn.addEventListener("click", clear);