const ModuleFactory = require("./ModuleFactory");
const ViewContainer = require("./../views/ViewContainer");

class ModuleContainer {
  constructor() {
    this.modules = [];
    this.moduleNames = {};
    this.moduleFactory = new ModuleFactory(new ViewContainer());
  }

  register(moduleName) {
    const module = this.moduleFactory.create(moduleName);
    this.modules.push(moduleName);
    this.moduleNames[moduleName] = module;
    return module;
  }

  find(moduleName) {
    if (this.moduleNames[moduleName]) {
      return this.moduleNames[moduleName];
    }
    return null;
  }

  findOrRegister(moduleName) {
    const module = this.find(moduleName);
    if (module) {
      return module;
    }
    return this.register(moduleName);
  }
}

module.exports = ModuleContainer;
