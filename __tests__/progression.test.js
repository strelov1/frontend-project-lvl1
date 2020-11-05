/* eslint-disable */

import { jest, afterEach } from '@jest/globals';
import {
    random,
    getRandomElement,
} from '../src/utils.js';

import {
    arrayReplaceValue,
    generateProgressions
} from '../src/games/brain-progression.js';

afterEach(() => {
  jest.clearAllMocks();
});

test('Progression', async () => {
    const settings = [random(1, 10), random(20, 100), random(1, 10)];
    const progression = generateProgressions(...settings);

    const element = getRandomElement(progression);
    const replacedProgression = arrayReplaceValue(progression, element, '..');

    const newProgression = arrayReplaceValue(replacedProgression, '..', element);

    expect(progression).toEqual(newProgression);
});