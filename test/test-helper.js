/**
 * @description Helper for testing.
 */

/**
 * @description Resolve rejected message and reject resolved message.
 * @param {Promise}
 * @return {Promise}
 */
export function rejects(promise) {
  return promise
    .then(() => Promise.reject(new Error('Missing expected rejection')))
    .catch((reason) => Promise.resolve(reason));
}
