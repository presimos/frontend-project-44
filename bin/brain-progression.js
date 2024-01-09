#!/usr/bin/env node

import { getName, getAnswer } from '../src/cli.js';
import { compareAnswers, getRandomNumber } from '../src/index.js';
import generateProgression from '../src/games/progression.js';

const name = getName();
console.log('What number is missing in the progression?');
for (let i = 0; i <= 2; i += 1) {
  const progression = generateProgression();
  const correctAnswer = progression.splice(getRandomNumber(0, progression.length - 1), 1, '..');
  console.log(`Question: ${progression.join(' ')}`);
  if (compareAnswers(name, Number(getAnswer()), Number(correctAnswer))) {
    break;
  }
  if (i === 2) {
    console.log(`Congratulations, ${name}!`);
  }
}
