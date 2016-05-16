#!/usr/bin/env node

/**
 * @description File size checker.
 * @author sota1235
 */

import { isUndefined, isEmpty } from 'lodash';
import clc from 'cli-color';
import glob from 'glob';
import program from 'commander';
import checkFiles from '../cli';

// get arguments
program
  .option('--files <target>', 'target files for lint')
  .option('--limit <Byte>', 'limit size', parseInt)
  .parse(process.argv);

const targetFiles = program.files;
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

  for (const file of files) {
    promises.push(checkFileSize(file, limitSize));
  }

  Promise.all(promises)
    .then(() => console.log('All check finished!'))
    .catch(e => {
      console.error(`something error, ${e}`);
      process.exit(1);
    });
});
