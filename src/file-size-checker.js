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
import filesize from 'filesize';

// get arguments
const opt = create([
  ['',  'files=ARG', 'target files for lint'],
  ['',  'limit=ARG', 'limit size'],
  ['h', 'help',      'display this help'],
]).bindHelp().parseSystem();

console.log(opt);

const targetFiles = opt.options.files;
const limitSize   = opt.options.limit;

glob(targetFiles, (err, files) => {
  console.log(files);

  for (let fName of files) {
    let stats        = fs.statSync(fName);
    let fSize        = stats.size / 1024.0;  // KB
    let displayFSize = filesize(stats.size); // human readable

    // checking file size
    if (Number(limitSize) < fSize) {
      console.log(`name: ${fName} size: ${displayFSize} [${clc.red('NG')}]`);
      continue;
    }

    console.log(`name: ${fName} size: ${displayFSize} [${clc.green('OK')}]`);
  }
});
