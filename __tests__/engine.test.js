/* eslint-disable */

import { jest, afterEach } from '@jest/globals';
import engine from '../src/index.js';

jest.spyOn(console, 'log').mockImplementation(() => {});

afterEach(() => {
  jest.clearAllMocks();
});


test('Success game', async (done) => {
  const userQuestion = jest.fn().mockResolvedValueOnce('yes').mockResolvedValueOnce('yes').mockResolvedValueOnce('no');
  const userAnswer = jest.fn().mockResolvedValueOnce('yes').mockResolvedValueOnce('yes').mockResolvedValueOnce('no');

  const gameName = 'Game Greeting!';
  const game = engine(
    {
      gameName,
      question: userQuestion,
      settings: {
        userAnswer: userAnswer,
        onSuccessStep: (question, answer) => {
          expect(question).toBe(answer);
        },
        onFailStep: (question, answer) => {
          expect(question).not.toBe(answer);
        }, 
        onFinishGame: () => done(),
        onFailGame: () => done(new Error('Игра завершилась ошибкой')),
      },
    },
  );

  await game('TestUSER');

  expect(console.log).toHaveBeenCalledWith(gameName);
});

test('Failed game first step', async (done) => {
  const userQuestion = jest.fn().mockResolvedValueOnce('yes').mockResolvedValueOnce('yes').mockResolvedValueOnce('yes');
  const userAnswer = jest.fn().mockResolvedValueOnce('no').mockResolvedValueOnce('yes').mockResolvedValueOnce('yes');

  const gameName = 'Game Greeting!';
  const game = engine(
    {
      gameName,
      question: userQuestion,
      settings: {
        userAnswer: userAnswer,
        onSuccessStep: (question, answer) => {
          expect(question).toBe(answer);
        },
        onFailStep: (question, answer) => {
          expect(question).not.toBe(answer);
        }, 
        onFinishGame: () => done(new Error('Игра не дождна была завершиться успехом')),
        onFailGame: () => done(),
      },
    },
  );

  await game('TestUSER');
});

test('Failed game second step', async (done) => {
  const userQuestion = jest.fn().mockResolvedValueOnce('yes').mockResolvedValueOnce('yes').mockResolvedValueOnce('yes');
  const userAnswer = jest.fn().mockResolvedValueOnce('yes').mockResolvedValueOnce('no').mockResolvedValueOnce('no');

  const gameName = 'Game Greeting!';
  const game = engine(
    {
      gameName,
      question: userQuestion,
      settings: {
        userAnswer: userAnswer,
        onSuccessStep: (question, answer) => {
          expect(question).toBe(answer);
        },
        onFailStep: (question, answer) => {
          expect(question).not.toBe(answer);
        }, 
        onFinishGame: () => done(new Error('Игра не дождна была завершиться успехом')),
        onFailGame: () => done(),
      },
    },
  );

  await game('TestUSER');
});

test('Failed game last step', async (done) => {
  const userQuestion = jest.fn().mockResolvedValueOnce('yes').mockResolvedValueOnce('yes').mockResolvedValueOnce('yes');
  const userAnswer = jest.fn().mockResolvedValueOnce('yes').mockResolvedValueOnce('no').mockResolvedValueOnce('no');

  const gameName = 'Game Greeting!';
  const game = engine(
    {
      gameName,
      question: userQuestion,
      settings: {
        userAnswer: userAnswer,
        onSuccessStep: (question, answer) => {
          expect(question).toBe(answer);
        },
        onFailStep: (question, answer) => {
          expect(question).not.toBe(answer);
        }, 
        onFinishGame: () => done(new Error('Игра не дождна была завершиться успехом')),
        onFailGame: () => done(),
      },
    },
  );

  await game('TestUSER');
});