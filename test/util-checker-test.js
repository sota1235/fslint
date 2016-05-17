/**
 * @description Unit test for util/checker
 */

import 'babel-polyfill';
import assert     from 'power-assert';
import proxyquire from 'proxyquire';

describe('Unit tests for util/checker', () => {
  it('Should resolve true', async () => {
    const mockMethod = proxyquire('../src/util/checker', {
      './fs-promise': {
        stat(file) {
          return new Promise((resolve) => resolve({ size: 100 }));
        },
      },
      './logger': {
        default:{
          info() {
            return; // do nothing
          },
        },
      },
    });

    assert(await mockMethod.default('file path', 100));
    assert(await mockMethod.default('file path', 101));
  });

  it('Should resolve false', async () => {
    const mockMethod = proxyquire('../src/util/checker', {
      './fs-promise': {
        stat(file) {
          return new Promise((resolve) => resolve({ size: 100 }));
        },
      },
      './logger': {
        default: {
          info() {
            return; // do nothing
          },
        },
      },
    });

    assert(!(await mockMethod.default('file path', 99)));
    assert(!(await mockMethod.default('file path', 50)));
  });

});
