import { random, getRandomElement } from '../utils.js';
import createGame from '../index.js';

// eslint-disable-next-line arrow-body-style
export const arrayReplaceValue = (array, searchValue, replaceValue) => {
  return array.map((item) => (item === searchValue ? replaceValue : item));
};

export const generateProgressions = (start, length, step) => {
  const progression = [];
  let incrment = start;
  for (let i = 0; i < length; i += 1) {
    progression.push(incrment);
    incrment += step;
  }
  return progression;
};

const userQuestion = async () => {
  const start = random(1, 10);
  const length = random(5, 10);
  const step = random(1, 10);

  const progression = generateProgressions(start, length, step);

  const element = getRandomElement(progression);
  const replacedProgression = arrayReplaceValue(progression, element, '..');

  const question = replacedProgression.join(' ');
  const answer = String(element);

  return [question, answer];
};

export default () => createGame('What number is missing in the progression?', userQuestion);
