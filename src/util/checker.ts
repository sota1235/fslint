import * as clc from 'cli-color';
import * as filesize from 'filesize';
import { stat } from './fs-promise';
import logger from './logger';

const checkFileSize = async (filePath: string, limitSize: number): boolean => {
  const fileSize: number = (await stat(filePath)).size;
  const readableFileSize = filesize(fileSize);

  if (Number(limitSize) < fileSize) {
    logger.info(`[${clc.red('NG')}] ${readableFileSize}\t${filePath}`);
    return false;
  }

  logger.info(`[${clc.green('OK')}] ${readableFileSize}\t${filePath}`);
  return true;
};

export default checkFileSize;
