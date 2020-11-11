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

const userQuestion = async () => {
  const question = random(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => createGame('Answer "yes" if given number is prime. Otherwise answer "no".', userQuestion);
