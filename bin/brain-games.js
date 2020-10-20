#!/usr/bin/env node

import { greeting } from '../src/cli.js'

const main = async () => {
   await greeting();
};

main();