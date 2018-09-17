/**
 * @description Checking file size.
 */

import "@babel/polyfill";
import clc           from "cli-color";
import { countBy }   from "lodash";
import checkFileSize from "./util/checker";

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
    console.log(`\t${clc.green("✓")} ${greenNumber} cases OK`);
  }

  if (redNumber > 0) {
    console.log(`\t${clc.red("✗")} ${redNumber} cases NG`);
    exitStatus = false;
  }

  console.log("\nAll checking finished!");

  return exitStatus;
};

export default checkFiles;
