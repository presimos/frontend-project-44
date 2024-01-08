#!/usr/bin/env node

import { getName, getAnswer } from '../src/cli.js';
import { getRandomNumber, compareAnswers } from '../src/index.js';
import correctAnswer from '../src/games/even.js';

const name = getName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
for (let i = 0; i < 3; i += 1) {
  const number = getRandomNumber(0, 100);
  console.log(`Question: ${number}`);
  if (compareAnswers(name, getAnswer(), correctAnswer(number))) {
    break;
  }
  if (i === 2) {
    console.log(`Congratulations, ${name}!`);
  }
}
