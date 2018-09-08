/**
 * @description Handling logging for fslint
 */

const logger = {
  info(...msg) {
    for (let i = 0; i < msg.length; i++) {
      console.log(msg[i]);
    }
  },
  error(...msg) {
    for (let i = 0; i < msg.length; i++) {
      console.error(msg[i]);
    }
  },
};

export default logger;
