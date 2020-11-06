import { random } from '../utils.js';
import createGame from '../index.js';

export const isEven = (num) => num % 2 === 0;

const question = async () => {
  const num = random(1, 100);

  return [num, isEven(num) ? 'yes' : 'no'];
};

export default () => createGame('Answer "yes" if the number is even, otherwise answer "no".', question);
