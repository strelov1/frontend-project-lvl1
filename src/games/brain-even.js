import { generateRandomNumber } from '../utils.js';
import engine from '../index.js';

export const isEven = (num) => num % 2 === 0;

const userQuestion = async () => {
  const question = generateRandomNumber();
  console.log(`Question: ${question}`);
  return isEven(question) ? 'yes' : 'no';
};

const brainEvenGame = engine(
  {
    gameName: 'Answer "yes" if the number is even, otherwise answer "no".',
    question: userQuestion,
  },
);

export default brainEvenGame;
