import greeting from './games/greeting.js';
import runBrainEvenGame from './games/brain-even.js';
import runBrainCalcGame from './games/brain-calc.js';
import runBrainGcdGame from './games/brain-gcd.js';
import runBrainProgressionGame from './games/brain-progression.js';
import runBrainPrimeGame from './games/brain-prime.js';

export const brainGames = async () => {
  await greeting();
};

export const brainEvenGame = async () => {
  const userName = await greeting();
  await runBrainEvenGame.run(userName);
};

export const brainCalcGame = async () => {
  const userName = await greeting();
  await runBrainCalcGame.run(userName);
};

export const brainGcdGame = async () => {
  const userName = await greeting();
  await runBrainGcdGame.run(userName);
};

export const brainProgressionGame = async () => {
  const userName = await greeting();
  await runBrainProgressionGame.run(userName);
};

export const brainPrimeGame = async () => {
  const userName = await greeting();
  await runBrainPrimeGame.run(userName);
};
