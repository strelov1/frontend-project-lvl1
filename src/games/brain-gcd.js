import promptly from 'promptly';
import configureGame from '../index.js';
import { generateRandomNumber, calculateGcd } from '../calculate.js';

const userQuestion = async () => {
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();

  console.log(`Question: ${num1} ${num2}`);

  return calculateGcd(num1, num2);
};

const userAnswer = () => promptly.prompt('Your answer:');

const condition = (question, answer) => question === Number(answer);

const createGame = configureGame(
  {
    gameName: 'Find the greatest common divisor of given numbers.',
    gameConditions:  {
      question: userQuestion,
      answer: userAnswer,
      condition,
    }
  }
);

export default createGame;