import promptly from 'promptly';
import configureGame from '../index.js';
import { generateRandomNumber, isEven } from '../calculate.js';

const userQuestion = async () => {
  const question = generateRandomNumber();
  console.log(`Question: ${question}`);
  return isEven(question) ? 'yes' : 'no';
};

const userAnswer = () => promptly.prompt('Your answer:');

const condition = (question, answer) => question === answer;

const game = configureGame(
  {
    gameName: 'Answer "yes" if the number is even, otherwise answer "no".',
    gameConditions:  {
      question: userQuestion,
      answer: userAnswer,
      condition: condition,
    }
  }
);

export default game;