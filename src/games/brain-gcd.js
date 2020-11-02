import promptly from 'promptly';
import configureGame from '../index.js';
import { generateRandomNumber } from '../utils.js';

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
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();

  console.log(`Question: ${num1} ${num2}`);

  return calculateGcd(num1, num2);
};

const userAnswer = () => promptly.prompt('Your answer:');

const createGame = configureGame(
  {
    gameName: 'Find the greatest common divisor of given numbers.',
    gameConditions: {
      question: userQuestion,
      answer: userAnswer,
    },
  },
);

export default createGame;
