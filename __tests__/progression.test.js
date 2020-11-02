/* eslint-disable */

import { jest, afterEach } from '@jest/globals';
import {
    generateRandomNumber,
    getRandomElement,
    range,
  } from '../src/utils.js';

import {
    arrayReplaceValue,
} from '../src/games/brain-progression.js';

afterEach(() => {
  jest.clearAllMocks();
});

test('Progression', async () => {
    const progression = range(generateRandomNumber(), 10);
    const element = getRandomElement(progression);
    const replacedProgression = arrayReplaceValue(progression, element, '..');

    const newProgression = arrayReplaceValue(replacedProgression, '..', element);

    expect(progression).toEqual(newProgression);
});