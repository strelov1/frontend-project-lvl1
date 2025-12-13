import { random } from '../utils.js';
import createGame from '../index.js';

// Euclidean algorithm for GCD
export const calculateGcd = (a, b) => (b === 0 ? a : calculateGcd(b, a % b));

const userQuestion = async () => {
  const num1 = random(1, 10);
  const num2 = random(1, 10);

  const question = `${num1} ${num2}`;
  const answer = String(calculateGcd(num1, num2));

  return [question, answer];
};

export default () => createGame('Find the greatest common divisor of given numbers.', userQuestion);
