import { generateRandomNumber } from '../utils.js';
import createGame from '../index.js';

export const isEven = (num) => num % 2 === 0;

const question = async () => {
  const num = generateRandomNumber(1, 100);

  return [num, isEven(num) ? 'yes' : 'no'];
};

const game = () => createGame('Answer "yes" if the number is even, otherwise answer "no".', question);

export default game;
