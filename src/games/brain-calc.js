import promptly from 'promptly';
import configureGame from '../index.js';
import {
  generateRandomNumber,
  generateRandomOperation,
  calculate,
} from '../calculate.js';

const userQuestion = async () => {
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();
  const operation = generateRandomOperation();

  console.log(`Question: ${num1} ${operation} ${num2}`);

  return calculate(num1, num2, operation);
};

const userAnswer = () => promptly.prompt('Your answer:');

const condition = (question, answer) => question === Number(answer);

const createGame = configureGame(
  {
    gameName: 'What is the result of the expression?',
    gameConditions: {
      question: userQuestion,
      answer: userAnswer,
      condition,
    },
  },
);

export default createGame;
