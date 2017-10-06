const _ = require("lodash");
const TreeModule = require("./../TreeModule");
const Constants = require("./../../../constants");
const View = require("./../../views/View");
const Command = require("./../../command/Command");

/**
 * Native module
 */
class RCTEventEmitter extends TreeModule {
  receiveTouches(command) {
    const { args } = command;
    const topTouch = args[0];
    const touches = args[1];
    // don't know what is the aim of changedIndices on here
    const changedIndices = args[2];

    return new Command(command);
  }

  receiveEvent(command) {
    return new Command(command);
  }
}

module.exports = RCTEventEmitter;
