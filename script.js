const operations = {
    "+": (a, b) => {
        return a + b;
    },
    "-": (a, b) => {
        return a - b;
    },
    "x": (a, b) => {
        return a * b;
    },
    "/": (a, b) => {
        if (b === 0) return "Can't divide by zero";
        return a / b;
    },
    "%": (a) => {
        return a / 100;
    },
    "x/-": (a) => {
        return a < 0 ? Math.abs(a) : -a;
    }
}

const display = document.querySelector("#display");
const clearBtn = document.querySelector(".clear");
const signBtn = document.querySelector(".sign");
const percentBtn = document.querySelector(".percent");
const decimal = document.querySelector(".decimal");
const operands = document.querySelectorAll(".operand");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");

let leftOperand = "";
let rightOperand = "";
let currentOperator = "";

function displayText(value) {
    if (!leftOperand || currentOperator) {
        display.textContent = "";
        display.textContent += value;
    } else {
        display.textContent += value;
    }
}

function operate(operator, leftOperand, rightOperand) {
    const result = operations[operator](Number(leftOperand), Number(rightOperand));
    displayText(String(result));
    leftOperand = String(result);
    rightOperand = "";
}

operands.forEach(operand => {
    operand.addEventListener("click", (event) => {
        const value = event.target.textContent;
        displayText(value);
        if (currentOperator) rightOperand += value;
        else leftOperand += value;
    })
})

operators.forEach(operator => {
    operator.addEventListener("click", (event) => {
        const newOperator = event.target.textContent;

        if (leftOperand && rightOperand) {
            operate(currentOperator, leftOperand, rightOperand);
            currentOperator = newOperator;
        } else if (!rightOperand) {
            currentOperator = newOperator;
        }
    })
})

equals.addEventListener("click", () => {
    if (currentOperator) {
        operate(currentOperator, leftOperand, rightOperand);
        currentOperator = "";
    }
})
