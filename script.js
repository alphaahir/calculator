let currentNumber = "";
let previousNumber = "";
let operation = "";

function appendNumber(number) {
    currentNumber += number;
    document.getElementById("result").value = currentNumber;
}

function appendOperation(op) {
    previousNumber = currentNumber;
    currentNumber = "";
    operation = op;
}

function clearScreen() {
    currentNumber = "";
    previousNumber = "";
    operation = "";
    document.getElementById("result").value = "";
}

function deleteNumber() {
    currentNumber = currentNumber.slice(0, -1);
    document.getElementById("result").value = currentNumber;
}

function calculate() {
    let result = 0;
    let floatNum = false;

    if (operation === "+" || operation === "-") {
        if (currentNumber.includes(".") || previousNumber.includes(".")) {
            floatNum = true;
        }
        result = parseFloat(previousNumber) + parseFloat(currentNumber);
    } else if (operation === "*" || operation === "/") {
        result = parseFloat(previousNumber) * parseFloat(currentNumber);
    }

    if (floatNum) {
        result = result.toFixed(2);
    }

    currentNumber = result.toString();
    operation = "";
    previousNumber = "";
    document.getElementById("result").value = currentNumber;
}