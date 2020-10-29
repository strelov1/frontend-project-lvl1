/* eslint-disable */

import { jest, afterEach } from '@jest/globals';
import {
    generateProgression,
    generateRandomNumber,
    getRandomElement,
    arrayReplaceValue,
  } from '../calculate.js';

afterEach(() => {
  jest.clearAllMocks();
});

test('Progression', async () => {
    const progression = generateProgression(generateRandomNumber(), 10);
    const element = getRandomElement(progression);
    const replacedProgression = arrayReplaceValue(progression, element, '..');

    const newProgression = arrayReplaceValue(replacedProgression, '..', element);

    expect(progression).toEqual(newProgression);
});