/**
 * @description Handling logging for fslint
 */

const logger = {
  info(...msg: string[]): void {
    for (const m of msg) {
      console.log(m);
    }
  },
  error(...msg: string[]): void {
    for (const m of msg) {
      console.error(m);
    }
  },
};

export default logger;
