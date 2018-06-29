let firstValue = '';
let secondValue = '';
let operator = '';

function addNumber(number) {
  if (!operator) {
    firstValue += number;
  } else {
    secondValue += number;
  }
  updateDisplay();
}

function addOperator(operand) {
  if (!operator) {
    operator += operand;
    updateDisplay();
  }
}

function updateDisplay() {
  const equation = firstValue + operator + secondValue;
  document.getElementById('res').innerHTML = equation;
}

function calculate() {
  let output;
  firstValue = parseInt(firstValue, 2);
  secondValue = parseInt(secondValue, 2);

  switch (operator) {
    case '+':
      output = firstValue + secondValue;
      break;
    case '-':
      output = firstValue - secondValue;
      break;
    case '*':
      output = firstValue * secondValue;
      break;
    case '/':
      output = firstValue / secondValue;
      break;
  }
  document.getElementById('res').innerHTML = output.toString(2);
}

function clearDisplay() {
  firstValue = '';
  secondValue = '';
  operator = '';
  document.getElementById('res').innerHTML = '';
}
