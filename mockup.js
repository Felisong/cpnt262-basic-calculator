// VARIABLES
const commandArr = process.argv.splice(2);
// argument variables
let numOne = commandArr[0];
const operator = commandArr[1];
let numTwo = commandArr[2];
const supportedOperators = ["+", "-", "/", "*"];

let result;

numOne = parseFloat(numOne);
numTwo = parseFloat(numTwo);

// object declaration
const whichOperation = {
  "*": multiply(),
  "/": divide(),
  "+": sum(),
  "-": subtract(),
};

// console.log to show result variable add .toFixed(2)
console.log(arithmetic(operator));

// FUNCTIONS

// converting functions
function convertToFloat(number) {
  if (isNaN(number)) {
    return "input not a number, please try again!";
  }
  parseFloat(number);
  return number;
}

// ARITHMETIC FUNCTIONS
function multiply() {
  result = numOne * numTwo;
  return result;
}
function divide() {
  if (numOne == 0 || numTwo == 0) {
    return "cannot divide by one";
  }
  result = numOne / numTwo;
  return result;
}
function sum() {
  result = numOne + numTwo;
  return result;
}
function subtract() {
  result = numOne - numTwo;
  return result;
}

// function to choose which one.
function arithmetic(operator) {
  if (operator === "*") {
    console.log(whichOperation["*"]);
  }
  if (operator === "/") {
    console.log(whichOperation["/"]);
  }
  if (operator === "+") {
    console.log(whichOperation["+"]);
  }
  if (operator === "-") {
    console.log(whichOperation["-"]);
  }
}

// NOTE : TO DO LIST:

// WHEN I ADD 10 "-" 5 IT MAKES 105 WHICH IS WRONG, MUST FIX (ADDING IT AS STRINGS, MUST BE BC THEY ARE STRINGS)
// UNDEFINED IS POPPING UP UNDER THE ANSWERS
//
