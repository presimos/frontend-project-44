#!/usr/bin/env node

import { getName, getAnswer } from '../src/cli.js';
import { getRandomNumber, compareAnswers } from '../src/index.js';
import findGCD from '../src/games/gcd.js';

const name = getName();
console.log('Find the greatest common divisor of given numbers.');
for (let i = 0; i <= 2; i += 1) {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  console.log(`Question: ${number1} ${number2}`);
  if (compareAnswers(name, Number(getAnswer()), findGCD(number1, number2))) {
    break;
  }
  if (i === 2) {
    console.log(`Congratulations, ${name}!`);
  }
}
