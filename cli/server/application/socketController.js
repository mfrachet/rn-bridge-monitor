const Constants = require('./../constants');
const { logError } = require('./../application/log');

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
      logError(
        'An error occured',
        `"${command.module}.${command.method}(...args)" may not have been implemented yet. Feel free to send a PR or open an issue to improve this module`,
        e,
      );
      console.log(command.module, command.method);
      console.log(e);
      io.emit(`${Constants.SOCKET_PREFIX}-module-improve`, command);
    }
  }
}

module.exports = Controller;
