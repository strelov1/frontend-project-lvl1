import { generateRandomNumber } from '../utils.js';
import engine from '../index.js';

export const isEven = (num) => num % 2 === 0;

const question = async () => {
  const num = generateRandomNumber();
  console.log(`Question: ${num}`);
  return isEven(num) ? 'yes' : 'no';
};

const brainEvenGame = engine(
  {
    gameName: 'Answer "yes" if the number is even, otherwise answer "no".',
    question,
  },
);

export default brainEvenGame;
