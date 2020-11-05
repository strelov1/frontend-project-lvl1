import { generateRandomNumber, getRandomElement } from '../utils.js';
import createGame from '../index.js';

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
  const num1 = generateRandomNumber(1, 10);
  const num2 = generateRandomNumber(1, 10);
  const operation = generateRandomOperation();

  return [`${num1} ${operation} ${num2}`, String(calculate(num1, num2, operation))];
};

const game = () => createGame('What is the result of the expression?', question);

export default game;
