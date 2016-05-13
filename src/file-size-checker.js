#!/usr/bin/env node

/**
 * @description File size checker.
 * @author sota1235
 */

"use strict";

import { create } from 'node-getopt';
import glob from 'glob';

// get arguments
const opt = create([
  ['', 'files=ARG', 'target files for lint'],
  ['', 'limit=ARG', 'limit size'],
]).bindHelp().parseSystem();

console.log(opt);

const targetFiles = opt.options.files;

glob(targetFiles, (err, files) => {
  console.log(files);
});
