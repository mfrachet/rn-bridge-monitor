import ObservableHelpers from "./helpers/ObservableHelpers";

export default class BridgeMonitor {
  constructor(source, config) {
    this.source = source;
    this.config = config;
  }

  stream() {
    return ObservableHelpers.applyOperators(this.source, this.config);
  }

  getModuleContainer() {
    return this.moduleContainer;
  }

  getSource() {
    return this.source;
  }
}
