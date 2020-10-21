import runBrainGame from './games/brain-games.js';
import runBrainEvenGame from './games/brain-even.js';
import runBrainCalcGame from './games/brain-calc.js';

export const brainGames = async () => {
  await runBrainGame.run();
};

export const brainEvenGame = async () => {
  await runBrainEvenGame.run();
};

export const brainCalcGame = async () => {
  await runBrainCalcGame.run();
};
