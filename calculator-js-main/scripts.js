
function add(x, y) {
    return x + y;
}

function substract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function clear() {
    displayResults.textContent = "";
    displayOperands.textContent = "";
    calculator.firstNumber = "";
    calculator.operator = "";
    calculator.secondNumber = "";
    decimal.disabled = false;
}

function clearDisplay() {
    displayOperands.textContent = "";
}

function checkInteger() {
    if (parseFloat(displayResults.textContent) % 1 !== 0) {
        displayResults.textContent = parseFloat(displayResults.textContent).toFixed(4);
    }
}

function checkDecimal() {
    if (displayOperands.textContent.includes(".")) {
        decimal.disabled = true;
    } else {
        decimal.disabled = false;
    }
}

function resultsAsFirstNumber() {
    if (displayResults.textContent !== "") {
        calculator.firstNumber = parseFloat(displayResults.textContent);
    }
}

function operate() {

    if (calculator.operator === "add") {
        displayResults.textContent = add(calculator.firstNumber, calculator.secondNumber);

    } else if (calculator.operator === "substract") {
        displayResults.textContent = substract(calculator.firstNumber, calculator.secondNumber);

    } else if (calculator.operator === "multiply") {
        displayResults.textContent = multiply(calculator.firstNumber, calculator.secondNumber);

    } else if (calculator.operator === "divide") {
        if (calculator.secondNumber === 0) {
            return displayResults.textContent = "Math Error!";
        }
        displayResults.textContent = divide(calculator.firstNumber, calculator.secondNumber);
    }
    checkInteger();
}

const displayResults = document.querySelector("#display");
const displayOperands = document.querySelector("#display2");
const decimal = document.querySelector("#decimal");
const operatorsButtons = document.querySelectorAll(".operators");
const numberButtons = document.querySelectorAll(".numbers");

const calculator = {
    firstNumber: "",
    operator: "",
    secondNumber: "",
};

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.id === "del") {
            displayOperands.textContent = displayOperands.textContent.slice(0, displayOperands.textContent.length - 1)
        } else {
            displayOperands.textContent += button.textContent;
            checkDecimal();
        }
    });
});

operatorsButtons.forEach(button => {
    button.addEventListener("click", () => {

        if (button.id === "allClear") {
            clear();
        } else if (button.id === "equals" && calculator.firstNumber !== "") {
            resultsAsFirstNumber();
            calculator.secondNumber = parseFloat(displayOperands.textContent);
            clearDisplay();
            operate();
            calculator.operator = ""; //equals clear current operator
        } else if (displayOperands.textContent === "" && calculator.firstNumber !== "") { //store consecutive operators
            calculator.operator = button.id;
        } else if (calculator.operator === "" && calculator.firstNumber === "") { //store first number and operator
            calculator.operator = button.id;
            calculator.firstNumber = parseFloat(displayOperands.textContent);
            clearDisplay();
        } else if (calculator.operator !== "") {   //store second number and operate
            resultsAsFirstNumber();
            calculator.secondNumber = parseFloat(displayOperands.textContent);
            clearDisplay();
            operate();
            calculator.operator = button.id;  //store operator for consecutive calculations
        }
    });
});


