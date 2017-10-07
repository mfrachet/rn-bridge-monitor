import ObservableHelpers from "./helpers/ObservableHelpers";

const MODERATED = "moderated";
const ALL = "all";

export default class BridgeMonitor {
  constructor(source, config) {
    this.source = source;
    this.config = config;
  }

  /**
   * It's possible to manage different level of streams.
   * - moderated is the default one meaning that it will only display
   * the implemented modules / methods in the output
   * - all will display absolutely all the messages that pass through the bridge.
   * Quite laggy and not performant at all
   */
  stream(toStream = MODERATED) {
    if (toStream === ALL) {
      return ObservableHelpers.applyOperators(this.source, this.config);
    }

    return ObservableHelpers.applyOperators(this.source, this.config).filter(
      msg =>
        msg.module === "UIManager" ||
        msg.module === "AppRegistry" ||
        msg.module === "RCTEventEmitter"
    );
  }

  getModuleContainer() {
    return this.moduleContainer;
  }

  getSource() {
    return this.source;
  }
}
