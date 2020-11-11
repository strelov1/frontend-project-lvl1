import { random, getRandomElement } from '../utils.js';
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

const userQuestion = async () => {
  const num1 = random(1, 10);
  const num2 = random(1, 10);
  const operation = generateRandomOperation();

  const question = `${num1} ${operation} ${num2}`;
  const answer = String(calculate(num1, num2, operation));

  return [question, answer];
};

export default () => createGame('What is the result of the expression?', userQuestion);
