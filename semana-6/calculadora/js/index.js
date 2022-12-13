'use strict';

const documentReady = () => {
  const calculatorForm = document.getElementById('calculatorForm');

  const calculate = (e) => {
    e.preventDefault();
    const number1 = document.getElementById('number1').value;
    const operator = document.getElementById('operator').value;
    const number2 = document.getElementById('number2').value;

    alert(eval(+number1 + operator + +number2));
  };

  calculatorForm.addEventListener('submit', calculate);
};

document.addEventListener('DOMContentLoaded', documentReady);