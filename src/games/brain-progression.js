import {
  generateRandomNumber,
  getRandomElement,
  range,
} from '../utils.js';
import engine from '../index.js';

// eslint-disable-next-line arrow-body-style
export const arrayReplaceValue = (array, searchValue, replaceValue) => {
  return array.map((item) => (item === searchValue ? replaceValue : item));
};

const userQuestion = async () => {
  const progression = range(generateRandomNumber(), 10);
  const element = getRandomElement(progression);
  const replacedProgression = arrayReplaceValue(progression, element, '..');

  console.log(`Question: ${replacedProgression.join(' ')}`);

  return String(element);
};

const createGame = engine(
  {
    gameName: 'What number is missing in the progression?',
    question: userQuestion,
  },
);

export default createGame;
