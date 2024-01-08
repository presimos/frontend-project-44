export default function findGCD(num1, num2) {
  if (num2 === 0) {
    return num1;
  }
  return findGCD(num2, num1 % num2);
}
