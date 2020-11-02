/* eslint-disable */

import { jest, afterEach } from '@jest/globals';
import { calculate } from '../src/games/brain-calc.js';

afterEach(() => {
  jest.clearAllMocks();
});

test('Calculate', async () => {
    const cases = [
        [2, '+', 2, 4],
        [3, '-', 2, 1],
        [4, '*', 4, 16],
    ];

    for (const [opnd1, operator, opnd2, equal] of cases) {
        expect(calculate(opnd1, opnd2, operator)).toBe(equal);
    }
});