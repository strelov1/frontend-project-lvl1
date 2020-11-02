import { generateRandomNumber } from '../utils.js';
import engine from '../index.js';

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

const createGame = engine(
  {
    gameName: 'Find the greatest common divisor of given numbers.',
    question: userQuestion,
  },
);

export default createGame;
