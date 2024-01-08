#!/usr/bin/env node

import { getName, getAnswer } from '../src/cli.js';
import { compareAnswers, getRandomNumber } from '../src/index.js';

const generateProgression = () => {
  const progression = [getRandomNumber(0, 50)];
  const difference = getRandomNumber(5, 10);
  for (let i = 0; i <= 9; i += 1) {
    progression.push(progression[i] + difference);
  }
  return progression;
};

const name = getName();
console.log('What number is missing in the progression?');
for (let i = 0; i <= 2; i += 1) {
  const progression = generateProgression();
  const correctAnswer = progression.splice(getRandomNumber(0, progression.length), 1, '..');
  console.log(`Question: ${progression.join(' ')}`);
  if (compareAnswers(name, Number(getAnswer()), Number(correctAnswer))) {
    break;
  }
  if (i === 2) {
    console.log(`Congratulations, ${name}!`);
  }
}
