import promptly from 'promptly';
import Engine, { failGame, successGame } from '../index.js';
import * as messages from '../messages.js';
import { greeting } from './brain-games.js';
import { generateRandomNumber, isPrime } from '../utils.js';

const userQuestion = async () => {
  const num = generateRandomNumber();

  console.log(`Question: ${num}`);

  return isPrime(num) ? 'yes' : 'no';
};

const userAnswer = () => promptly.prompt('Your answer:');

const condition = (question, answer) => question === answer;

const gameConditions = {
  question: userQuestion,
  answer: userAnswer,
  condition,
  onSuccess: messages.correctMessage,
  onFail: messages.failMessage,
  fail: failGame,
};

export default new Engine({
  greeting: async () => {
    const name = await greeting();
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    return name;
  },
  rules: [
    {
      name: 'one',
      success: 'two',
      ...gameConditions,
    },
    {
      name: 'two',
      success: 'three',
      ...gameConditions,
    },
    {
      name: 'three',
      success: successGame,
      ...gameConditions,
    },
  ],
  fail: messages.failGameMessage,
  finish: messages.successGameMessage,
});
