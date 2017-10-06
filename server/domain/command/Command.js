const sizeof = require("object-sizeof");
const moment = require("moment");

class Command {
  constructor(command) {
    this.command = command;
    this.date = moment().format("h:mm:ss:SSS");
  }

  toStr() {
    return { ...this.command, date: this.date, size: sizeof(this.command) };
  }
}

module.exports = Command;
