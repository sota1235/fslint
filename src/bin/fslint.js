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
  .option('--limit-mb <Mega Byte>', 'limit size, specify with mega byte', parseInt)
  .parse(process.argv);

const targetFiles  = program.files;
const byteSize     = program.limit;
const megaByteSize = program.limitMb;

// --limit-mb option takes priority over --limit option
const limitSize = megaByteSize || byteSize;

if (isUndefined(targetFiles)) {
  console.log(`${clc.red('Error')}: Please add -f option`);
  console.log('Try again please!');
  process.exit(1);
}

if (isUndefined(limitSize)) {
  console.log(`${clc.red('Error')}: Please add size option`);
  console.log(`\t--limit    <Byte>`);
  console.log(`\t--limit-mb <Mega Byte>`);
  console.log('Try again please!');
  process.exit(1);
}

glob(targetFiles, { realpath: true }, (err, files) => {
  if (err) {
    console.log(`Error: ${err.message}\n`);
    console.log('Try again please!\n');
    process.exit(1);
  }

  if (isEmpty(files)) {
    console.log('Target file is nothing :(');
    process.exit(0);
  }

  checkFiles(files, limitSize)
    .then(result => {
      const exitStatus = result ? 0 : 1;
      process.exit(exitStatus);
    })
    .catch(e => {
      console.error(`something error, ${e}`);
      process.exit(1);
    });
});
