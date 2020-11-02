import promptly from 'promptly';
import configureGame from '../index.js';
import {
  generateRandomNumber,
  getRandomElement,
  range,
} from '../utils.js';

// eslint-disable-next-line arrow-body-style
export const arrayReplaceValue = (array, searchValue, replaceValue) => {
  return array.map((item) => (item === searchValue ? replaceValue : item));
};

const userQuestion = async () => {
  const progression = range(generateRandomNumber(), 10);
  const element = getRandomElement(progression);
  const replacedProgression = arrayReplaceValue(progression, element, '..');

  console.log(`Question: ${replacedProgression.join(' ')}`);

  return element;
};

const userAnswer = () => promptly.prompt('Your answer:');

const createGame = configureGame(
  {
    gameName: 'What number is missing in the progression?',
    gameConditions: {
      question: userQuestion,
      answer: userAnswer,
    },
  },
);

export default createGame;
