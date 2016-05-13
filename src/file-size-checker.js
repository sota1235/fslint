#!/usr/bin/env node

/**
 * @description File size checker.
 * @author sota1235
 */

"use strict";

import { create } from 'node-getopt';
import glob from 'glob';
import checkFileSize from './size-checker';

// get arguments
const opt = create([
  ['',  'files=ARG', 'target files for lint'],
  ['',  'limit=ARG', 'limit size'],
  ['h', 'help',      'display this help'],
]).bindHelp().parseSystem();

const targetFiles = opt.options.files;
const limitSize   = opt.options.limit;

glob(targetFiles, (err, files) => {
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
