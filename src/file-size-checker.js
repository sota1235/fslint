#!/usr/bin/env node

/**
 * @description File size checker.
 * @author sota1235
 */

"use strict";

import { isUndefined, isEmpty } from 'lodash';
import clc from 'cli-color';
import glob from 'glob';
import program from 'commander';
import checkFileSize from './size-checker';

// get arguments
program
  .option('--files <target>', 'target files for lint')
  .option('--limit <Byte>', 'limit size', parseInt)
  .parse(process.argv);

const targetFiles = program.files
const limitSize   = program.limit;

if (isUndefined(targetFiles)) {
  console.log(`${clc.red('Error')}: Please add -f option`);
  console.log('Try again please!');
  process.exit(1);
}

if (isUndefined(limitSize)) {
  console.log(`${clc.red('Error')}: Please add -l option`);
  console.log('Try again please!');
  process.exit(1);
}

glob(targetFiles, (err, files) => {
  if (err) {
    console.log(`Error: ${err.message}\n`);
    console.log('Try again please!\n');
    process.exit(1);
  }

  if (isEmpty(files)) {
    console.log('Target file is nothing :(');
    process.exit(0);
  }

  const promises = [];

  for (let file of files) {
    promises.push(checkFileSize(file, limitSize));
  }

  Promise.all(promises)
    .then(result => console.log('All check finished!'))
    .catch(err => {
      console.error(`something error, ${err}`)
      process.exit(1);
    });
});
