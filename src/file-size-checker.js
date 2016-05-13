#!/usr/bin/env node

/**
 * @description File size checker.
 * @author sota1235
 */

"use strict";

import { create } from 'node-getopt';

const opt = create([
  ['', 'files=ARG', 'target files for lint'],
  ['', 'limit=ARG', 'limit size'],
]).bindHelp().parseSystem();

console.log(opt);
