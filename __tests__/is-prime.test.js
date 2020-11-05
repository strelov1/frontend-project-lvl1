/* eslint-disable */

import { jest, afterEach } from '@jest/globals';
import { isPrime } from '../src/games/brain-prime.js';

afterEach(() => {
  jest.clearAllMocks();
});

test('Is Prime', async () => {
    const evenNumbers = [2, 3, 5, 7, 79, 191, 197, 313, 449];

    for (const number of evenNumbers) {
        expect(isPrime(number)).toBe(true);
    }
});

test('Not even', async () => {
    const evenNumbers = [1, 4, 8, 84, 194, 312, 440, 576];
    
    for (const number of evenNumbers) {
        expect(isPrime(number)).not.toBe(true);
    }
});