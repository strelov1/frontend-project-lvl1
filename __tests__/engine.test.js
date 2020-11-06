/* eslint-disable */

import { jest, afterEach, expect } from '@jest/globals';
import { env } from '../src/cli.js';
import runGame from '../src/index.js';

jest.spyOn(console, 'log').mockImplementation(() => {});
jest.spyOn(process.stdout, 'write').mockImplementation(() => {});
jest.spyOn(process.stdin, 'write').mockImplementation(() => {});

const sendLine = (line) => {
  setImmediate(() => process.stdin.emit('data', `${line}\n`));
};

afterEach(jest.clearAllMocks);

test('Success game', async () => {
  const userQuestion = jest.fn()
    .mockResolvedValueOnce(['question', 'yes'])
    .mockResolvedValueOnce(['question', 'yes'])
    .mockResolvedValueOnce(['question', 'no']);

  const userName = 'TestUserSuccess';
  const gameName = 'Game Greeting!';

  sendLine(userName);
  sendLine('yes');
  sendLine('yes');
  sendLine('no');
  
  await runGame(gameName, userQuestion, env);

  expect(console.log).toHaveBeenCalledWith('Welcome to the Brain Games!');
  expect(console.log).toHaveBeenCalledWith(`Congratulations, ${userName}!`);

});

test('Failed game first step', async () => {
  const userQuestion = jest.fn()
    .mockResolvedValueOnce(['question', 'yes'])
    .mockResolvedValueOnce(['question', 'yes'])
    .mockResolvedValueOnce(['question', 'yes']);

  const userName = 'TestUSERFail1';
  const gameName = 'Game Greeting!';
  
  sendLine(userName);
  sendLine('no');

  await runGame(gameName, userQuestion, env);

  expect(console.log).toHaveBeenCalledWith('Welcome to the Brain Games!');
  expect(console.log).toHaveBeenCalledWith(`Let's try again, ${userName}!`);
});

test('Failed game second step', async () => {
  const userQuestion = jest.fn()
    .mockResolvedValueOnce(['question', 'yes'])
    .mockResolvedValueOnce(['question', 'yes'])
    .mockResolvedValueOnce(['question', 'yes']);

  const userName = 'TestUSERFail2';
  const gameName = 'Game Greeting!';
  
  sendLine(userName);
  sendLine('yes');
  sendLine('no');
  
  await runGame(gameName, userQuestion, env);
  
  expect(console.log).toHaveBeenCalledWith('Welcome to the Brain Games!');
  expect(console.log).toHaveBeenCalledWith(`Let's try again, ${userName}!`);
});

test('Failed game last step', async () => {
    const userQuestion = jest.fn()
      .mockResolvedValueOnce(['question', 'yes'])
      .mockResolvedValueOnce(['question', 'yes'])
      .mockResolvedValueOnce(['question', 'yes']);

    const userName = 'TestUSERFailLast';
    const gameName = 'Game Greeting!';
    
    sendLine(userName);
    sendLine('yes');
    sendLine('yes');
    sendLine('no');
    
    await runGame(gameName, userQuestion, env);
    
    expect(console.log).toHaveBeenCalledWith('Welcome to the Brain Games!');
    expect(console.log).toHaveBeenCalledWith(`Let's try again, ${userName}!`);
});