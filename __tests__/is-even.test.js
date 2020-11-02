/* eslint-disable */

import { jest, afterEach } from '@jest/globals';
import { isEven } from '../src/games/brain-even.js';

afterEach(() => {
  jest.clearAllMocks();
});

test('Is even', async () => {
    const evenNumbers = [2, 4, 6, 8, 10, 12];

    for (const number of evenNumbers) {
        expect(isEven(number)).toBe(true);
    }
});

test('Not even', async () => {
    const evenNumbers = [1, 3, 5, 7, 9, 11];

    for (const number of evenNumbers) {
        expect(isEven(number)).not.toBe(true);
    }
});
