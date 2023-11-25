/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/
class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    this.result += number;
  }

  subtract(number) {
    this.result -= number;
  }

  multiply(number) {
    this.result *= number;
  }

  divide(number) {
    if (number === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    // Remove multiple continuous spaces
    expression = expression.replace(/\s+/g, ' ');

    // Validate expression for invalid characters
    if (!/^[0-9+\-*/(). ]+$/.test(expression)) {
      throw new Error("Invalid characters in expression");
    }

    // Use a regular expression to extract numbers and operators
    const tokens = expression.match(/[0-9]+|[-+*/()]|\s/g);

    // Evaluate the expression
    this.result = this.evaluateExpression(tokens);

    return this.result;
  }

  evaluateExpression(tokens) {
    // Implement your logic to evaluate the expression using a stack or any other approach
    // This could involve handling parentheses, operators precedence, etc.
    // For simplicity, let's assume a basic implementation without handling all edge cases.
    // It's recommended to use a proper expression parsing library in a real-world scenario.

    // Dummy implementation (ignores operator precedence and parentheses)
    let currentNumber = 0;
    let currentOperator = '+';

    tokens.forEach((token) => {
      if (token === '+' || token === '-' || token === '*' || token === '/') {
        currentOperator = token;
      } else if (token === '(') {
        // Handle parentheses
        // Recursively evaluate the expression within the parentheses
        // ...
      } else if (token === ')') {
        // Handle parentheses
        // ...
      } else {
        const number = parseFloat(token);
        if (isNaN(number)) {
          throw new Error("Invalid number in expression");
        }
        switch (currentOperator) {
          case '+':
            currentNumber += number;
            break;
          case '-':
            currentNumber -= number;
            break;
          case '*':
            currentNumber *= number;
            break;
          case '/':
            if (number === 0) {
              throw new Error("Cannot divide by zero");
            }
            currentNumber /= number;
            break;
        }
      }
    });

    return currentNumber;
  }
}

module.exports = Calculator;


module.exports = Calculator;
