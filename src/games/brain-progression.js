import {
  getRandomElement,
} from '../utils.js';
import createGame from '../index.js';

// eslint-disable-next-line arrow-body-style
export const arrayReplaceValue = (array, searchValue, replaceValue) => {
  return array.map((item) => (item === searchValue ? replaceValue : item));
};

const generateProgreesion = (start, stop, step) => {
  const progression = [];
  for (let i = start; i <= stop; i += step) {
    progression.push(i);
  }
  return progression;
};

const question = async () => {
  const progression = generateProgreesion();
  const element = getRandomElement(progression);
  const replacedProgression = arrayReplaceValue(progression, element, '..');

  return [replacedProgression.join(' '), String(element)];
};

const game = () => createGame('What number is missing in the progression?', question);

export default game;
