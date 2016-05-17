/**
 * @description File checker.
 */

import * as pfs from './fs-promise';
import clc      from 'cli-color';
import filesize from 'filesize';
import logger   from './logger';

/**
 * @description Check file size and print message.
 * @param {string} filePath - The file of the target
 * @param {number} limitSize - Threshold for the file.
 * @return {Promise}
 */
const checkFileSize = async (filePath, limitSize) => {
  const fileSize         = (await pfs.stat(filePath)).size;
  const readableFileSize = filesize(fileSize);

  if (Number(limitSize) < fileSize) {
    logger.info(`[${clc.red('NG')}] ${readableFileSize}\t${filePath}`);
    return false;
  }

  logger.info(`[${clc.green('OK')}] ${readableFileSize}\t${filePath}`);
  return true;
};

export default checkFileSize;
