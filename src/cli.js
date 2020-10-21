import runBrainGame from './games/brain-games.js';
import runBrainEvenGame from './games/brain-even.js';
import runBrainCalcGame from './games/brain-calc.js';
import runBrainGcdGame from './games/brain-gcd.js';

export const brainGames = async () => {
  await runBrainGame.run();
};

export const brainEvenGame = async () => {
  await runBrainEvenGame.run();
};

export const brainCalcGame = async () => {
  await runBrainCalcGame.run();
};

export const brainGcdGame = async () => {
  await runBrainGcdGame.run();
};
