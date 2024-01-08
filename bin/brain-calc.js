#!/usr/bin/env node

import { getName, getAnswer } from '../src/cli.js';
import { getRandomNumber, compareAnswers } from '../src/index.js';

const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[getRandomNumber(0, 2)];
};

const correctAnswer = (n1, n2, operation) => {
  let answer = 0;
  switch (operation) {
    case '+':
      answer = n1 + n2;
      break;
    case '-':
      answer = n1 - n2;
      break;
    case '*':
      answer = n1 * n2;
      break;
    default:
      break;
  }
  return answer;
};

const name = getName();
console.log('What is the result of the expression?');

for (let i = 0; i <= 2; i += 1) {
  const number1 = getRandomNumber(0, 30);
  const number2 = getRandomNumber(0, 30);
  const operation = getRandomOperation();
  console.log(`Question: ${number1} ${operation} ${number2}`);
  if (compareAnswers(name, Number(getAnswer()), correctAnswer(number1, number2, operation))) {
    break;
  }
  if (i === 2) {
    console.log(`Congratulations, ${name}!`);
  }
}
