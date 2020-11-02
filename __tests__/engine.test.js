/* eslint-disable */

import { jest, afterEach } from '@jest/globals';
import configureGame from '../src/index.js';

jest.spyOn(console, 'log').mockImplementation(() => {});

afterEach(() => {
  jest.clearAllMocks();
});

test('Success game', async (done) => {
  const userQuestion = jest.fn().mockResolvedValueOnce('yes').mockResolvedValueOnce('yes').mockResolvedValueOnce('no');
  const userAnswer = jest.fn().mockResolvedValueOnce('yes').mockResolvedValueOnce('yes').mockResolvedValueOnce('no');

  const condition = (question, answer) => question === answer;
  const gameName = 'Game Greeting!';
  const game = configureGame(
    {
      gameName,
      gameConditions: {
        question: userQuestion,
        answer: userAnswer,
        condition,
        onSuccessStep: (question, answer) => {
          expect(question).toBe(answer);
        },
        onFailStep: (question, answer) => {
          expect(question).not.toBe(answer);
        },
      },
      gameSettings: {
        onFinishGame: () => done(),
        onFailGame: () => done(new Error('Игра завершилась ошибкой')),
      },
    },
  );

  await game.run('TestUSER');

  expect(console.log).toHaveBeenCalledWith(gameName);
});

test('Failed game first step', async (done) => {
  const userQuestion = jest.fn().mockResolvedValueOnce('yes').mockResolvedValueOnce('yes').mockResolvedValueOnce('yes');
  const userAnswer = jest.fn().mockResolvedValueOnce('no').mockResolvedValueOnce('yes').mockResolvedValueOnce('yes');

  const game = failGameConfig(userQuestion, userAnswer, done);
  await game.run('TestUSER');
});

test('Failed game second step', async (done) => {
  const userQuestion = jest.fn().mockResolvedValueOnce('yes').mockResolvedValueOnce('yes').mockResolvedValueOnce('yes');
  const userAnswer = jest.fn().mockResolvedValueOnce('yes').mockResolvedValueOnce('no').mockResolvedValueOnce('no');

  const game = failGameConfig(userQuestion, userAnswer, done);
  await game.run('TestUSER');
});

test('Failed game last step', async (done) => {
  const userQuestion = jest.fn().mockResolvedValueOnce('yes').mockResolvedValueOnce('yes').mockResolvedValueOnce('no');
  const userAnswer = jest.fn().mockResolvedValueOnce('yes').mockResolvedValueOnce('yes').mockResolvedValueOnce('yes');

  const game = failGameConfig(userQuestion, userAnswer, done);
  await game.run('TestUSER');
});

const failGameConfig = (userQuestion, userAnswer, done) => {
  const condition = (question, answer) => question === answer;
  return configureGame(
    {
      gameName: 'Game Greeting!',
      gameConditions: {
        question: userQuestion,
        answer: userAnswer,
        condition,
        onSuccessStep: (question, answer) => {
          expect(question).toBe(answer);
        },
        onFailStep: (question, answer) => {
          expect(question).not.toBe(answer);
        },
      },
      gameSettings: {
        onFinishGame: () => done(new Error('Игра не дождна была завершиться успехом')),
        onFailGame: () => done(),
      },
    },
  );
};
