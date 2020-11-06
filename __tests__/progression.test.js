/* eslint-disable */

import { jest, afterEach, expect } from '@jest/globals';
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
    const start = random(1, 10);
    const length = random(5, 10);
    const step = random(1, 10);

    const progression = generateProgressions(start, length, step);

    expect(progression).toHaveLength(length);

    const element = getRandomElement(progression);
    const replacedProgression = arrayReplaceValue(progression, element, '..');

    const newProgression = arrayReplaceValue(replacedProgression, '..', element);

    expect(progression).toEqual(newProgression);
});