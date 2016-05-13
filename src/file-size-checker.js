#!/usr/bin/env node

/**
 * @description File size checker.
 * @author sota1235
 */

"use strict";

import { create } from 'node-getopt';
import glob from 'glob';
import fs from 'fs';
import clc from 'cli-color';

// get arguments
const opt = create([
  ['',  'files=ARG', 'target files for lint'],
  ['',  'limit=ARG', 'limit size'],
  ['h', 'help',      'display this help'],
]).bindHelp().parseSystem();

console.log(opt);

const targetFiles = opt.options.files;

glob(targetFiles, (err, files) => {
  console.log(files);

  for (let f of files) {
    let stats    = fs.statSync(f);
    let fileSize = stats.size / 1000000.0;

    let fName = clc.red(f);
    let fSize = clc.blue(fileSize);
    console.log(`name: ${fName} - size: ${fSize}`);
  }
});
