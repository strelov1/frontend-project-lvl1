import runBrainGame from './brain-games.js';
import runBrainEvenGame from './brain-even.js';
import runBrainCalcGame from './brain-calc.js';

export const brainGames = async () => {
  await runBrainGame.run();
};

export const brainEvenGame = async () => {
  await runBrainEvenGame.run();
};

export const brainCalcGame = async () => {
  await runBrainCalcGame.run();
};
