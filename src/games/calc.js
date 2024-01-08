import { getRandomNumber } from '../index.js';

export const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[getRandomNumber(0, 2)];
};

export const correctAnswer = (n1, n2, operation) => {
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
