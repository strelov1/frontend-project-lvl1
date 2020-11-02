import promptly from 'promptly';
import configureGame from '../index.js';
import { generateRandomNumber } from '../utils.js';

export const isEven = (num) => num % 2 === 0;

const userQuestion = async () => {
  const question = generateRandomNumber();
  console.log(`Question: ${question}`);
  return isEven(question) ? 'yes' : 'no';
};

const userAnswer = () => promptly.prompt('Your answer:');

const game = configureGame(
  {
    gameName: 'Answer "yes" if the number is even, otherwise answer "no".',
    gameConditions: {
      question: userQuestion,
      answer: userAnswer,
    },
  },
);

export default game;
