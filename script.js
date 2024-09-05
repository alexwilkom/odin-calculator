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

let leftOperand = "";
let rightOperand = "";
let operator = "";

function displayText(value) {
    const displayText = display.textContent;
    if (displayText !== "0") {
        display.textContent += value;
    } else {
        display.textContent = "";
        display.textContent = value;
    }
}

operands.forEach(operand => {
    operand.addEventListener("click", (event) => {
        const value = event.target.textContent;
        displayText(value);
        if (!operator) leftOperand += value
        else rightOperand += value
    })
})