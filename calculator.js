// VARIABLES
const commandArr = process.argv.splice(2);
// argument variables
let numOne = commandArr[0];
const operator = commandArr[1];
let numTwo = commandArr[2];
const supportedOperators = ["+", "-", "/", "*"];

let result;

// functions object

try {
  if (isNaN(numOne) || isNaN(numTwo)) {
    return "One is not a valid number, please try again!";
  }

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
    // return answer
    //repeat steps depending on operator
  }
} catch (error) {
  console.error("Both inputs were not a valid number, please try again!");
}

// functions for arithmetic
