import { random, getRandomElement } from '../utils.js';
import createGame from '../index.js';

// eslint-disable-next-line arrow-body-style
export const arrayReplaceValue = (array, searchValue, replaceValue) => {
  return array.map((item) => (item === searchValue ? replaceValue : item));
};

export const generateProgressions = (start, stop, step) => {
  const progression = [];
  for (let i = start; i <= stop; i += step) {
    progression.push(i);
  }
  return progression;
};

const question = async () => {
  const settings = [random(1, 10), random(20, 100), random(1, 10)];
  const progression = generateProgressions(...settings);
  const element = getRandomElement(progression);
  const replacedProgression = arrayReplaceValue(progression, element, '..');

  return [replacedProgression.join(' '), String(element)];
};

export default () => createGame('What number is missing in the progression?', question);
