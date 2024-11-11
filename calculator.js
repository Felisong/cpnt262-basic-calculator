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
  "*": multiply,
  "/": divide,
  "+": sum,
  "-": subtract,
};
numOne = parseFloat(numOne);
numTwo = parseFloat(numTwo);

console.log(`test type:` + typeof numOne);
try {
  if (isNaN(numOne) || isNaN(numTwo)) {
    throw new Error("One is not a valid number, please try again!");
  }
  // convert number to float

  // calculator in here

  // is the operator a valid supportedOperator?
  // if else should work.
  if (operator !== supportedOperators) {
    return `not a supported operator, please use "+", "-", "/" or "*".`;
  }
  {
    // which operator is it?
    // is operator === "*"
    // pull from object.["*"]
    //  console.log answer
    //repeat steps depending on operator
  }
} catch (error) {
  console.error("Both inputs were not a valid number, please try again!");
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
