let firstOperand = "";
let secondOperand = "";
let firstOperator = "";
let displayValue = "0";
let result = "";

const operands = document.querySelectorAll(".operand");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");

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

function updateDisplay(value) {
    const textDisplay = document.querySelector("#display");
    textDisplay.textContent = value;
}

function clear() {
    firstNumber = "";
    selectedOperator = "";
    secondNumber = "";
    textDisplay.textContent = "0";
    isClear = true;
}

function handleOperands(operand) {
    const selectedOperand = operand.target.value;
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

operands.forEach(operand => { operand.addEventListener("click", handleOperands) })


operators.forEach(operator => {
    operator.addEventListener("click", event => {
        const symbol = event.target.value;
        selectedOperator = symbol;
        isClear = true;
    })
})

equals.addEventListener("click", () => {
    if (!selectedOperator) return;
    const result = operate(selectedOperator, firstNumber, secondNumber);
    displayText(result);
    firstNumber = result;
    secondNumber = "";
    selectedOperator = "";
})

clearBtn.addEventListener("click", clear);