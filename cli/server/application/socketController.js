const Constants = require('./../constants');

class Controller {
  constructor(moduleContainer) {
    this.moduleContainer = moduleContainer;
    this.handleCommand = this.handleCommand.bind(this);
  }

  handleCommand(command, io) {
    try {
      const module = this.moduleContainer.findOrRegister(command.module);
      const newCommand = module[command.method](command);
      module.dispatch(io, newCommand.toStr());
    } catch (e) {
      console.log(command.module, command.method);
      console.log(e);
      io.emit(`${Constants.SOCKET_PREFIX}-module-improve`, command);
    }
  }
}

module.exports = Controller;
