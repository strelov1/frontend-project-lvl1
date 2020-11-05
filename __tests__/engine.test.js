/* eslint-disable */

import { jest, afterEach } from '@jest/globals';
import runGame from '../src/index.js';

jest.spyOn(console, 'log').mockImplementation(() => {});

afterEach(() => {
  jest.clearAllMocks();
});


test('Success game', async (done) => {
  const userQuestion = jest.fn()
    .mockResolvedValueOnce(['question', 'yes'])
    .mockResolvedValueOnce(['question', 'yes'])
    .mockResolvedValueOnce(['question', 'no']);

  const userAnswer = jest.fn()
    .mockResolvedValueOnce('yes')
    .mockResolvedValueOnce('yes')
    .mockResolvedValueOnce('no');

  const userName = 'TestUser';
  const gameName = 'Game Greeting!';
  
  await runGame(
      gameName,
      userQuestion,
      {
        greeting: async () => userName,
        userAnswer: userAnswer,
        onSuccessStep: (rightAnswer, userAnswer) => {
          expect(userAnswer).toBe(rightAnswer);
        },
        onFailStep: (rightAnswer, userAnswer) => {
          expect(userAnswer).not.toBe(rightAnswer);
        }, 
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

  const userAnswer = jest.fn()
    .mockResolvedValueOnce('no')
    .mockResolvedValueOnce('yes')
    .mockResolvedValueOnce('yes');

  const userName = 'TestUSER2';
  const gameName = 'Game Greeting!';
 
  await runGame(
      gameName,
      userQuestion,
      {
        greeting: async () => userName,
        userAnswer: userAnswer,
        onSuccessStep: (rightAnswer, userAnswer) => {
          expect(userAnswer).toBe(rightAnswer);
        },
        onFailStep: (rightAnswer, userAnswer) => {
          expect(userAnswer).not.toBe(rightAnswer);
        }, 
        onFinishGame: (user) => {
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

  const userAnswer = jest.fn()
    .mockResolvedValueOnce('yes')
    .mockResolvedValueOnce('no')
    .mockResolvedValueOnce('yes');

  const userName = 'TestUSER3';
  const gameName = 'Game Greeting!';
 
  await runGame(
      gameName,
      userQuestion,
      {
        greeting: async () => userName,
        userAnswer: userAnswer,
        onSuccessStep: (rightAnswer, userAnswer) => {
          expect(userAnswer).toBe(rightAnswer);
        },
        onFailStep: (rightAnswer, userAnswer) => {
          expect(userAnswer).not.toBe(rightAnswer);
        }, 
        onFinishGame: (user) => {
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

  const userAnswer = jest.fn()
    .mockResolvedValueOnce('yes')
    .mockResolvedValueOnce('yes')
    .mockResolvedValueOnce('no');

  const userName = 'TestUSER3';
  const gameName = 'Game Greeting!';
 
  await runGame(
      gameName,
      userQuestion,
      {
        greeting: async () => userName,
        userAnswer: userAnswer,
        onSuccessStep: (rightAnswer, userAnswer) => {
          expect(userAnswer).toBe(rightAnswer);
        },
        onFailStep: (rightAnswer, userAnswer) => {
          expect(userAnswer).not.toBe(rightAnswer);
        }, 
        onFinishGame: (user) => {
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