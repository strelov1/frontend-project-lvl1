import { generateRandomNumber, range } from '../utils.js';
import createGame from '../index.js';

// eslint-disable-next-line no-bitwise
const isInteger = (n) => (n ^ 0) === n;

export const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  return range(2, num - 2)
    .map((item) => (num / item))
    .filter(isInteger)
    .length === 0;
};

const question = async () => {
  const num = generateRandomNumber(1, 100);

  return [num, isPrime(num) ? 'yes' : 'no'];
};

const game = () => createGame('Answer "yes" if given number is prime. Otherwise answer "no".', question);

export default game;
