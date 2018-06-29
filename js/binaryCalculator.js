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
  const stringIntValue1 = parseInt(firstValue, 2).toString();
  const stringIntValue2 = parseInt(secondValue, 2).toString();
  const output = eval(stringIntValue1 + _operator + stringIntValue2);
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
