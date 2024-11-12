// VARIABLES
const commandArr = process.argv.splice(2);
// argument variables
let numOne = commandArr[0];
const operator = commandArr[1];
let numTwo = commandArr[2];
const supportedOperators = ["+", "-", "/", "*"];

let result;

// functions object
const arithmetics = {
  "/": divide,
  "*": multiply,
  "+": sum,
  "-": subtract,
};
numOne = parseFloat(numOne);
numTwo = parseFloat(numTwo);

try {
  if (isNaN(numOne) || isNaN(numTwo)) {
    throw new Error("One is not a valid number, please try again!");
  }
  console.log(`type of: ` + typeof numTwo);
  // calculator in here
  // is the operator a valid supportedOperator?

  if (!supportedOperators.includes(operator)) {
    throw new Error(
      ("Operator not a valid operator. Please use " / ", ") * ", " + " or " - ""
    );
  }
  // which operator is it?
  if (operator === "/") {
    arithmetics["/"];
  }
  if (operator === "*") {
    arithmetics["*"];
  }
  if (operator === "+") {
    arithmetics["+"];
  }
  if (operator === "-") {
    arithmetics["-"];
  } else console.log(result);
} catch (error) {
  console.error(error.message);
}

//
// ARITHMETIC FUNCTIONS
function multiply() {
  result = numOne * numTwo;
  return result;
}
function divide() {
  if (numOne == 0 || numTwo == 0) {
    return "cannot divide by zero";
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

// work on getting the numbers to be valid, probably an issue with parsing or the try and catch.
