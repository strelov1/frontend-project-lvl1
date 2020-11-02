import { generateRandomNumber, range } from '../utils.js';
import engine from '../index.js';

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
  const num = generateRandomNumber();

  console.log(`Question: ${num}`);

  return isPrime(num) ? 'yes' : 'no';
};

const createGame = engine(
  {
    gameName: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    question,
  },
);

export default createGame;
