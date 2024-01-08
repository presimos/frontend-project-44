export default function correctAnswer(number) {
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
}
