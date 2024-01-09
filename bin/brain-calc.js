#!/usr/bin/env node

import { getName, getAnswer } from '../src/cli.js';
import { getRandomNumber, compareAnswers } from '../src/index.js';
import { getRandomOperation, correctAnswer} from '../src/games/calc.js';

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
