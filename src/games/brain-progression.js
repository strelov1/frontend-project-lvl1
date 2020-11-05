import {
  generateRandomNumber,
  getRandomElement,
  range,
} from '../utils.js';
import createGame from '../index.js';

// eslint-disable-next-line arrow-body-style
export const arrayReplaceValue = (array, searchValue, replaceValue) => {
  return array.map((item) => (item === searchValue ? replaceValue : item));
};

const question = async () => {
  const progression = range(generateRandomNumber(), 10);
  const element = getRandomElement(progression);
  const replacedProgression = arrayReplaceValue(progression, element, '..');

  return [replacedProgression.join(' '), String(element)];
};

const game = () => createGame('What number is missing in the progression?', question);

export default game;
