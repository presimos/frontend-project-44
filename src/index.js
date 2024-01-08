export const getRandomNumber = (mi, ma) => {
  const min = Math.ceil(mi);
  const max = Math.floor(ma);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const compareAnswers = (name, answer, correct) => {
  if (answer === correct) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'`);
    console.log(`Let's try again, ${name}`);
    return true;
  }
  return false;
};
