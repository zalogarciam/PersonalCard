'use strict';

const documentReady = () => {
  const calculatorForm = document.getElementById('calculatorForm');

  const calculate = (e) => {
    e.preventDefault();
    const number1 = document.getElementById('number1').value;
    const operator = document.getElementById('operator').value;
    const number2 = document.getElementById('number2').value;

    var result =(eval(+number1 + operator + +number2))
    resultContainer.innerText = result;
  };

  calculatorForm.addEventListener('submit', calculate);
};

document.addEventListener('DOMContentLoaded', documentReady);