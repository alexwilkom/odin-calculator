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

