import promptly from 'promptly';
import Engine, { failGame, successGame } from '../index.js';
import * as messages from '../messages.js';
import { greeting } from './brain-games.js';
import { generateRandomNumber, generateRandomOperation, calculate } from '../utils.js';

const userQuestion = async () => {
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();

  const operation = generateRandomOperation();

  console.log(`Question: ${num1} ${operation} ${num2}`);

  return calculate(num1, num2, operation);
};

const userAnswer = () => promptly.prompt('Your answer:');

const condition = (question, answer) => {
  if (question === Number(answer)) {
    return true;
  }
  return false;
};

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
    console.log('What is the result of the expression?');
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
