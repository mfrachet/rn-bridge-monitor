const Module = require("./../Module");
const Constants = require("./../../../constants");
const _ = require("lodash");

class TreeModule extends Module {
  constructor(viewContainer) {
    super(viewContainer);
    this._dispatchForTree = _.debounce(this._dispatchForTree, 100);
  }

  _dispatchForTree(io) {
    const rootView = this.viewContainer.findRoot();
    return io.emit(`${Constants.SOCKET_PREFIX}-module-tree`, rootView);
  }

  dispatch(io, command) {
    super.dispatch(io, command);
    return this._dispatchForTree(io);
  }
}

module.exports = TreeModule;
