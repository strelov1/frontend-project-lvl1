import { random, range } from '../utils.js';
import createGame from '../index.js';

export const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  return range(2, num / 2)
    .every((item) => (num % item !== 0));
};

const question = async () => {
  const num = random(1, 100);

  return [num, isPrime(num) ? 'yes' : 'no'];
};

const game = () => createGame('Answer "yes" if given number is prime. Otherwise answer "no".', question);

export default game;
