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