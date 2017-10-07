const UIManager = require('./UIManager');
const AppRegistry = require('./AppRegistry');
const RCTEventEmitter = require('./RCTEventEmitter');

class ModuleFactory {
  constructor(viewContainer) {
    this.viewContainer = viewContainer;
  }

  create(moduleName) {
    if (moduleName === 'UIManager') {
      return new UIManager(this.viewContainer);
    }
    if (moduleName === 'AppRegistry') {
      return new AppRegistry(this.viewContainer);
    }
    if (moduleName === 'RCTEventEmitter') {
      return new RCTEventEmitter(this.viewContainer);
    }
    return null;
  }
}

module.exports = ModuleFactory;
