import greeting from './greeting.js';
import runBrainEvenGame from './brain-even.js';

export const brainGame = async () => {
  await greeting();
};

export const brainEven = async () => {
  const name = await greeting();
  await runBrainEvenGame(name);
};
