import { random } from '../utils.js';
import createGame from '../index.js';

export const isEven = (num) => num % 2 === 0;

const userQuestion = async () => {
  const question = random(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => createGame('Answer "yes" if the number is even, otherwise answer "no".', userQuestion);
