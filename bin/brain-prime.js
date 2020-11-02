#!/usr/bin/env node

import greeting from '../src/games/greeting.js';
import runBrainPrimeGame from '../src/games/brain-prime.js';

const main = async () => {
  const userName = await greeting();
  await runBrainPrimeGame.run(userName);
};

main();
