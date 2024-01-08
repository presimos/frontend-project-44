#!/usr/bin/env node

import { getName, getAnswer } from '../src/cli.js';
import { compareAnswers, getRandomNumber } from '../src/index.js';

const correctAnswer = (number) => {
  if (number === 1) {
    return 'yes';
  }
  let count = 0;
  for (let i = 0; i <= number; i += 1) {
    if (number % i === 0) {
      count += 1;
    }
  }
  return count === 2 ? 'yes' : 'no';
};

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
