/* eslint-disable */

import { jest, afterEach } from '@jest/globals';
import { env } from '../src/cli.js';
import runGame from '../src/index.js';

jest.spyOn(console, 'log').mockImplementation(() => {});
jest.spyOn(process.stdout, 'write').mockImplementation(() => {});

afterEach(() => {
  jest.clearAllMocks();
});

const sendLine = (line) => {
  setImmediate(() => process.stdin.emit('data', `${line}\n`));
};

test('Success game', async (done) => {
  const userQuestion = jest.fn()
    .mockResolvedValueOnce(['question', 'yes'])
    .mockResolvedValueOnce(['question', 'yes'])
    .mockResolvedValueOnce(['question', 'no']);

  const userName = 'TestUser';
  const gameName = 'Game Greeting!';

  sendLine(userName);
  sendLine('yes');
  sendLine('yes');
  sendLine('no');
  
  await runGame(
      gameName,
      userQuestion,
      env,
      {
        onFinishGame: (user) => {
          expect(user).toBe(userName);
          done();
        },
        onFailGame: (user) => {
          expect(user).toBe(userName);
          done(new Error('Игра завершилась ошибкой'))
        },
      },
  );
});

test('Failed game first step', async (done) => {
  const userQuestion = jest.fn()
    .mockResolvedValueOnce(['question', 'yes'])
    .mockResolvedValueOnce(['question', 'yes'])
    .mockResolvedValueOnce(['question', 'yes']);

  const userName = 'TestUSER2';
  const gameName = 'Game Greeting!';
  
  sendLine(userName);
  sendLine('no');

  await runGame(
      gameName,
      userQuestion,
      env,
      {
        onFinishGame: (user) => {
          console.log('user', user)
          expect(user).toBe(userName);
          done(new Error('Игра не дождна была завершиться успехом'));
        },
        onFailGame: (user) => {
          expect(user).toBe(userName);
          done();
        },
      },
  );
});

test('Failed game second step', async (done) => {
  const userQuestion = jest.fn()
    .mockResolvedValueOnce(['question', 'yes'])
    .mockResolvedValueOnce(['question', 'yes'])
    .mockResolvedValueOnce(['question', 'yes']);

  const userName = 'TestUSER2';
  const gameName = 'Game Greeting!';
  
  sendLine(userName);
  sendLine('yes');
  sendLine('no');
  
  await runGame(
      gameName,
      userQuestion,
      env,
      {
        onFinishGame: (user) => {
          console.log('user', user)
          expect(user).toBe(userName);
          done(new Error('Игра не дождна была завершиться успехом'));
        },
        onFailGame: (user) => {
          expect(user).toBe(userName);
          done();
        },
      },
  );
});

test('Failed game last step', async (done) => {
    const userQuestion = jest.fn()
      .mockResolvedValueOnce(['question', 'yes'])
      .mockResolvedValueOnce(['question', 'yes'])
      .mockResolvedValueOnce(['question', 'yes']);

    const userName = 'TestUSER2';
    const gameName = 'Game Greeting!';
    
    sendLine(userName);
    sendLine('yes');
    sendLine('yes');
    sendLine('no');
    
    await runGame(
        gameName,
        userQuestion,
        env,
        {
          onFinishGame: (user) => {
            console.log('user', user)
            expect(user).toBe(userName);
            done(new Error('Игра не дождна была завершиться успехом'));
          },
          onFailGame: (user) => {
            expect(user).toBe(userName);
            done();
          },
        },
    );
});