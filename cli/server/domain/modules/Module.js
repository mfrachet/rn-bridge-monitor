const Constants = require("./../../constants");

class Module {
  constructor(viewContainer) {
    this.viewContainer = viewContainer;
  }

  dispatch(io, command) {
    return io.emit(`${Constants.SOCKET_PREFIX}-new-console`, command);
  }
}

module.exports = Module;
