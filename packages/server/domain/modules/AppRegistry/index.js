const Module = require('./../Module');
const Constants = require('./../../../constants');
const View = require('./../../views/View');
const Command = require('./../../command/Command');

class AppRegistry extends Module {
  dispatch(io, command) {
    super.dispatch(io, command);
    const rootView = this.viewContainer.findRoot();
    return io.emit(`${Constants.SOCKET_PREFIX}-module-tree`, rootView);
  }

  runApplication(command) {
    const { args } = command;
    const rootId = args[1].rootTag;
    const view = new View(rootId, args[0], args[1].initialProps);
    this.viewContainer.setRootId(rootId);
    this.viewContainer.add(view);

    return new Command(command);
  }
}

module.exports = AppRegistry;
