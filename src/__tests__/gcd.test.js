/* eslint-disable */

import { jest, afterEach } from '@jest/globals';
import { calculateGcd } from '../calculate.js';

afterEach(() => {
  jest.clearAllMocks();
});

test('GCD', async () => {
    const cases = [
        [4, 4, 4],
        [5, 9, 1],
        [18, 9, 9],
        [70, 120, 10],
    ];

    for (const [num1, num2, equal] of cases) {
        expect(calculateGcd(num1, num2)).toBe(equal);
    }
});