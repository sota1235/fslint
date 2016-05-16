/**
 * @description Checking file size.
 */

import 'babel-polyfill';
import fs from 'fs';
import clc from 'cli-color';
import filesize from 'filesize';
import { countBy } from 'lodash';

/**
 * @param {string} filePath - The file of the target.
 * @return {Promise}
 */
const getSize = (filePath) =>
  new Promise((resolve, reject) => {
    fs.stat(filePath, (err, stats) => {
      if (err) {
        reject(err);
      }

      resolve(stats.size); // Byte
    });
  });

/**
 * @description Check file size and print message.
 * @param {string} filePath - The file of the target
 * @param {number} limitSize - Threshold for the file.
 * @return {Promise}
 */
const checkFileSize = async (filePath, limitSize) => {
  const fileSize         = await getSize(filePath);
  const readableFileSize = filesize(fileSize);

  if (Number(limitSize) < fileSize) {
    console.log(`[${clc.red('NG')}] ${readableFileSize}\t${filePath}`);
    return false;
  }

  console.log(`[${clc.green('OK')}] ${readableFileSize}\t${filePath}`);
  return true;
};

/**
 * @description Check files.
 * @param {Array} files - Array of the target files.
 * @param {number} limitSize - Threshold for the file.
 * @return {Promise}
 */
const checkFiles = async (files, limitSize) => {
  const promises = [];
  let exitStatus = true;

  for (const file of files) {
    promises.push(checkFileSize(file, limitSize));
  }

  const checkingResults = countBy(await Promise.all(promises), Boolean);

  const greenNumber = checkingResults.true || 0;
  const redNumber   = checkingResults.false || 0;
  const allNumber   = greenNumber + redNumber;

  console.log(`\n   There are ${allNumber} cases.`);

  if (greenNumber > 0) {
    console.log(`\t${clc.green('✓')} ${greenNumber} cases OK`);
  }

  if (redNumber > 0) {
    console.log(`\t${clc.red('✗')} ${redNumber} cases NG`);
    exitStatus = false;
  }

  console.log(`\nAll checking finished!`);

  return exitStatus;
};

export default checkFiles;
