#!/usr/bin/env node

import { getName, getAnswer } from '../src/cli.js';
import { compareAnswers, getRandomNumber } from '../src/index.js';
import correctAnswer from '../src/games/prime.js';

const name = getName();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
for (let i = 0; i <= 2; i += 1) {
  const number = getRandomNumber(1, 100);
  console.log(`Question: ${number}`);
  if (compareAnswers(name, getAnswer(), correctAnswer(number))) {
    break;
  }
  if (i === 2) {
    console.log(`Congratulations, ${name}!`);
  }
}
