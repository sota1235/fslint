/**
 * @description Wrapper functions for 'fs' module using Promise.
 */

import fs from 'fs';

/**
 * @description Wrapper for fs.stat
 * @param {string} filePath
 * @return {Promise}
 */
export function stat(filePath) {
  return new Promise((resolve, reject) => {
    fs.stat(filePath, (err, stats) => {
      if (err) {
        reject(err);
      }

      resolve(stats);
    });
  });
}
