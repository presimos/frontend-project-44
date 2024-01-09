import { getRandomNumber } from '../index.js';

export default function generateProgression() {
  const progression = [getRandomNumber(0, 50)];
  const difference = getRandomNumber(5, 10);
  for (let i = 0; i <= 8; i += 1) {
    progression.push(progression[i] + difference);
  }
  return progression;
}
