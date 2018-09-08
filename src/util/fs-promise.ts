import * as fs from "fs";
import {Stats} from "fs";

export function stat(filePath: string): Promise<Stats> {
  return new Promise((resolve, reject) => {
    fs.stat(filePath, (err: NodeJS.ErrnoException, stats: Stats) => {
      if (err) {
        reject(err);
      }

      resolve(stats);
    });
  });
}
