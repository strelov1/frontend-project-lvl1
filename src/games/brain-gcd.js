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

const question = async () => {
  const num1 = random(1, 10);
  const num2 = random(1, 10);

  return [`${num1} ${num2}`, String(calculateGcd(num1, num2))];
};

const game = () => createGame('Find the greatest common divisor of given numbers.', question);

export default game;
