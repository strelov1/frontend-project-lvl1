#!/usr/bin/env node

import greeting from '../src/games/greeting.js';
import runBrainCalcGame from '../src/games/brain-calc.js';

const main = async () => {
    const userName = await greeting();
    await runBrainCalcGame.run(userName);
};

main();