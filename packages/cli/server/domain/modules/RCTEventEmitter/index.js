const TreeModule = require('./../TreeModule');
const Command = require('./../../command/Command');

/**
 * Native module
 */
class RCTEventEmitter extends TreeModule {
  receiveTouches(command) {
    return new Command(command);
  }

  receiveEvent(command) {
    return new Command(command);
  }
}

module.exports = RCTEventEmitter;
