#!/usr/bin/env node

import { env } from '../src/cli.js';
import runBrainProgressionGame from '../src/games/brain-progression.js';

runBrainProgressionGame(env);
