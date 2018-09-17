import * as clc from 'cli-color';
import * as fileSize from 'filesize';
import { stat } from './fs-promise';
import logger from './logger';

const reFormatter = fileSize.partial({ round: 0 });

const checkFileSize = async (
  filePath: string,
  limitSize: number,
): Promise<boolean> => {
  const byte: number = (await stat(filePath)).size;
  const readableFileSize: string = reFormatter(byte);

  if (Number(limitSize) < byte) {
    logger.info(`[${clc.red('NG')}] ${readableFileSize}\t${filePath}`);
    return false;
  }

  logger.info(`[${clc.green('OK')}] ${readableFileSize}\t${filePath}`);
  return true;
};

export default checkFileSize;
