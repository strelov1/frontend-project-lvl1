import { generateRandomNumber, getRandomElement } from '../utils.js';
import engine from '../index.js';

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

const question = async () => {
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();
  const operation = generateRandomOperation();

  console.log(`Question: ${num1} ${operation} ${num2}`);

  return String(calculate(num1, num2, operation));
};

const createGame = engine(
  {
    gameName: 'What is the result of the expression?',
    question,
  },
);

export default createGame;
