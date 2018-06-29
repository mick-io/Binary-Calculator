let firstValue = '';
let secondValue = '';
let _operator = '';

function addNumber(number) {
  if (!_operator) {
    firstValue += number;
  } else {
    secondValue += number;
  }
  updateDisplay();
}

function addOperator(operator) {
  if (!_operator) {
    _operator += operator;
    updateDisplay();
  }
}

function updateDisplay() {
  const equation = firstValue + _operator + secondValue;
  document.getElementById('res').innerHTML = equation;
}

function calculate() {
  if (secondValue === '') {
    return;
  }

  let output;
  firstValue = parseInt(firstValue, 2);
  secondValue = parseInt(secondValue, 2);

  switch (_operator) {
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
  setPrivateValuesToEmptyString();
}

function clearDisplay() {
  setPrivateValuesToEmptyString();
  updateDisplay();
}

function setPrivateValuesToEmptyString() {
  firstValue = '';
  secondValue = '';
  _operator = '';
}
