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
console.log(`numOne: ${numOne}, operator: ${operator}, numTwo: ${numTwo}`);

if (commandArr.length !== 3) {
  console.error(
    "Please use this structure: node app.js <num1> <operator> <num2>"
  );
  process.exit(1);
}

try {
  if (isNaN(numOne) || isNaN(numTwo)) {
    throw new Error("One is not a valid number, please try again!");
  }
  // console.log(`type of: ` + typeof numTwo);

  if (!supportedOperators.includes(operator)) {
    throw new Error(`Operator not valid. Please use "/", "*", "+" or "-".`);
  }
  // which operator is it?
  result = arithmetics[operator](numOne, numTwo);
  // answer according to operator
  console.log(`answer: ${result}`);
  // meow
} catch (error) {
  console.error(error.message);
}

//
// ARITHMETIC FUNCTIONS
function multiply(num1, num2) {
  result = num1 * num2;
  return result;
}
function divide(num1, num2) {
  if (num1 == 0 || num2 == 0) {
    return "cannot divide by zero";
  }
  result = num1 / num2;
  return result;
}
function sum(num1, num2) {
  result = num1 + num2;
  return result;
}
function subtract(num1, num2) {
  result = num1 - num2;
  return result;
}
