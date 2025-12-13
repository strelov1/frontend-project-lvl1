import { random, range } from '../utils.js';
import createGame from '../index.js';

export const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0) return false;

  const limit = Math.sqrt(num);
  for (let i = 3; i < limit; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

const userQuestion = async () => {
  const question = random(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => createGame('Answer "yes" if given number is prime. Otherwise answer "no".', userQuestion);
