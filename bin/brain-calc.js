#!/usr/bin/env node

import { env } from '../src/cli.js';
import runBrainCalcGame from '../src/games/brain-calc.js';

runBrainCalcGame(env);
