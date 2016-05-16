/**
 * @description Unit test for util/fs-promise
 */

import 'babel-polyfill';
import { rejects } from './test-helper';
import assert      from 'power-assert';
import proxyquire  from 'proxyquire';

describe('Unit tests for util/fs-promise', () => {
  it('Should resolve result of fs module\'s method', async () => {
    const expected = 'expected';
    const mockFsPromise = proxyquire('../src/util/fs-promise', {
      fs: {
        stat(file, callback) {
          callback(null, expected);
        },
      },
    });

    assert.equal(await mockFsPromise.stat('file path'), expected);
  });

  it('Should reject error of fs module\'s method', async () => {
    const expected = 'error';
    const mockFsPromise = proxyquire('../src/util/fs-promise', {
      fs: {
        stat(file, callback) {
          callback(expected, null);
        },
      },
    });

    assert((await rejects(mockFsPromise.stat('file path'))) === expected);
  });
});
