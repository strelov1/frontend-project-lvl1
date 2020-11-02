import promptly from 'promptly';
import configureGame from '../index.js';
import { generateRandomNumber, getRandomElement } from '../utils.js';

export const generateRandomOperation = () => getRandomElement(['+', '-', '*']);

export const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw Error('Wrong operation');
  }
};

const userQuestion = async () => {
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();
  const operation = generateRandomOperation();

  console.log(`Question: ${num1} ${operation} ${num2}`);

  return calculate(num1, num2, operation);
};

const userAnswer = () => promptly.prompt('Your answer:');

const createGame = configureGame(
  {
    gameName: 'What is the result of the expression?',
    gameConditions: {
      question: userQuestion,
      answer: userAnswer,
    },
  },
);

export default createGame;
