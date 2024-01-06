#!/usr/bin/env node

import { getName, getAnswer } from '../src/cli.js';

const getRandomNumber = () => {
  const min = 0;
  const max = Math.floor(100);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const correctAnswer = (number) => (number % 2 === 0 ? 'no' : 'yes');

const name = getName();
console.log('Answer yes if the number is even, otherwise answer "no".');
for (let i = 0; i < 3; i += 1) {
  const number = getRandomNumber();
  console.log(`Question: ${number}`);
  const answer = getAnswer();
  const correct = correctAnswer(number);
  if (answer === correct) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'`);
    console.log(`Let's try again, ${name}`);
    break;
  }
  if (i === 2) {
    console.log(`Congratulations, ${name}!`);
  }
}
