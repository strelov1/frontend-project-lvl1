import promptly from 'promptly';
import Engine, { failGame, successGame } from '../index.js';
import * as messages from '../messages.js';
import { greeting } from './brain-games.js';
import {
  generateProgression,
  generateRandomNumber,
  getRandomElement,
  arrayReplaceValue,
} from '../utils.js';

const userQuestion = async () => {
  const progression = generateProgression(generateRandomNumber(), 10);

  const element = getRandomElement(progression);

  const replacedProgression = arrayReplaceValue(progression, element, '..');

  console.log(`Question: ${replacedProgression.join(' ')}`);

  return element;
};

const userAnswer = () => promptly.prompt('Your answer:');

const condition = (question, answer) => question === Number(answer);

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
    console.log('What number is missing in the progression?');
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
