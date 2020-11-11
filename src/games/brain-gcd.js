import { random } from '../utils.js';
import createGame from '../index.js';

export const calculateGcd = (num1, num2) => {
  const max = Math.max(num1, num2);
  for (let divider = max; divider > 0; divider -= 1) {
    if (num1 % divider === 0 && num2 % divider === 0) {
      return divider;
    }
  }
  return 1;
};

const userQuestion = async () => {
  const num1 = random(1, 10);
  const num2 = random(1, 10);

  const question = `${num1} ${num2}`;
  const answer = String(calculateGcd(num1, num2));

  return [question, answer];
};

export default () => createGame('Find the greatest common divisor of given numbers.', userQuestion);
