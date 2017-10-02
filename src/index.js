/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const mock = require('jest-mock');
const {FakeTimers, installCommonGlobals} = require('jest-util');
const { JSDOM } = require('jsdom');

class JSDOMEnvironment {
  constructor(config) {
    const jsdomInitialized = process.hrtime();

    this.document = new JSDOM('<!DOCTYPE html>', {
      url: config.testURL,
      runScripts: "dangerously",
    });
    const global = (this.global = this.document.window.document.defaultView);
    // Node's error-message stack size is limited at 10, but it's pretty useful
    // to see more than that when a test fails.
    global.Error.stackTraceLimit = 100;
    installCommonGlobals(global, config.globals);

    if (!global.requestAnimationFrame) {
      global.requestAnimationFrame = callback => {
        const hr = process.hrtime(jsdomInitialized);
        const hrInNano = hr[0] * 1e9 + hr[1];
        const hrInMicro = hrInNano / 1e6;

        return global.setTimeout(callback, 0, hrInMicro);
      };
    }

    this.moduleMocker = new mock.ModuleMocker(global);
    this.fakeTimers = new FakeTimers(global, this.moduleMocker, config);
  }

  dispose() {
    if (this.fakeTimers) {
      this.fakeTimers.dispose();
    }
    if (this.global) {
      this.global.close();
    }
    this.global = null;
    this.document = null;
    this.fakeTimers = null;
  }

  runScript(script) {
    if (this.global) {
      return this.document.runVMScript(script);
    }
    return null;
  }
}

module.exports = JSDOMEnvironment;
