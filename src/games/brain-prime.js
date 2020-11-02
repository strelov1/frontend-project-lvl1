import promptly from 'promptly';
import configureGame from '../index.js';
import { generateRandomNumber, range } from '../utils.js';

// eslint-disable-next-line no-bitwise
const isInteger = (n) => (n ^ 0) === n;

export const isPrime = (num) => {
  if (num <= 0) {
    return false;
  }
  return range(2, num - 2)
    .map((item) => (num / item))
    .filter(isInteger)
    .length === 0;
};

const userQuestion = async () => {
  const num = generateRandomNumber();

  console.log(`Question: ${num}`);

  return isPrime(num) ? 'yes' : 'no';
};

const userAnswer = () => promptly.prompt('Your answer:');

const createGame = configureGame(
  {
    gameName: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    gameConditions: {
      question: userQuestion,
      answer: userAnswer,
    },
  },
);

export default createGame;
