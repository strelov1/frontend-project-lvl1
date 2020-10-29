/* eslint-disable */

import { jest, afterEach } from '@jest/globals';
import greeting from '../games/greeting.js';

jest.setTimeout(30000);

const sendLine = (line, delay = 0) => {
  if (!delay) {
    setImmediate(() => process.stdin.emit('data', `${line}\n`));
  } else {
    setTimeout(() => process.stdin.emit('data', `${line}\n`), delay);
  }
};

jest.spyOn(process.stdout, 'write').mockImplementation(() => {});
jest.spyOn(console, 'log').mockImplementation(() => {});

afterEach(() => {
  jest.clearAllMocks();
});

test('greeting', async (done) => {
  const userName = 'TEST_NAME';
  sendLine(userName);
  const value = await greeting();

  expect(value).toBe(userName);

  expect(console.log).toHaveBeenCalledWith('Welcome to the Brain Games!');
  expect(process.stdout.write).toHaveBeenCalledWith('May I have your name? ');
  expect(console.log).toHaveBeenCalledWith(`Hello, ${userName}!`);

  done();

});
