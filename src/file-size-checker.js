#!/usr/bin/env node

/**
 * @description File size checker.
 * @author sota1235
 */

"use strict";

import { create } from 'node-getopt';
import glob from 'glob';
import fs from 'fs';

// get arguments
const opt = create([
  ['', 'files=ARG', 'target files for lint'],
  ['', 'limit=ARG', 'limit size'],
]).bindHelp().parseSystem();

console.log(opt);

const targetFiles = opt.options.files;

glob(targetFiles, (err, files) => {
  console.log(files);

  for (let f of files) {
    let stats    = fs.statSync(f);
    let fileSize = stats.size / 1000000.0;
    console.log(`name: ${f} - size: ${fileSize}`);
  }
});
