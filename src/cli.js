import readlineSync from 'readline-sync';

export function getName() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

export function getAnswer() {
  const answer = readlineSync.question('Your answer: ');
  return answer;
}
