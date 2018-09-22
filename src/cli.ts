/**
 * @description Checking file size.
 */

import "@babel/polyfill";
import * as clc      from "cli-color";
import { countBy }   from "lodash";
import checkFileSize from "./util/checker";

const checkFiles = async (files: string[], limitSize: number): Promise<boolean> => {
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
