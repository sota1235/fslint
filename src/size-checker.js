/**
 * @description Checking file size.
 */

"use strict";

import 'babel-polyfill';
import fs from 'fs';
import clc from 'cli-color';
import filesize from 'filesize';

/**
 * @param {string} filePath - The file of the target.
 * @return {Promise}
 */
const getSize = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.stat(filePath, (err, stats) => {
      if (err) {
        reject(err);
      }

      resolve(stats.size); // Byte
    });
  });
};

/**
 * @description Check file size and print message.
 * @param {string} filePath - The file of the target
 * @param {number} limitSize - Threshold for the file.
 */
const checkFileSize = async (filePath, limitSize) => {
  const fileSize         = await getSize(filePath);
  const readableFileSize = filesize(fileSize);

  if (Number(limitSize) < fileSize) {
    console.log(`[${clc.red('NG')}] ${filePath} ${readableFileSize}`);
    return;
  }

  console.log(`[${clc.green('OK')}] ${filePath} ${readableFileSize}`);
};

export default checkFileSize;
