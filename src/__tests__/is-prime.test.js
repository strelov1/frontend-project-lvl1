/* eslint-disable */

import { jest, afterEach } from '@jest/globals';
import { isPrime } from '../calculate.js';

afterEach(() => {
  jest.clearAllMocks();
});

test('Is Prime', async () => {
    const evenNumbers = [2, 79, 191, 197, 313, 449];

    for (const number of evenNumbers) {
        expect(isPrime(number)).toBe(true);
    }
});

test('Not even', async () => {
    const evenNumbers = [4, 84, 194, 312, 440, 576];

    for (const number of evenNumbers) {
        expect(isPrime(number)).not.toBe(true);
    }
});
