#!/usr/bin/env node
const startServer = require('../server');
const yargs = require('yargs');

const DEFAULT_PORT = 5000;

const defineOptions = (args) => {
  args.option('p', {
    describe: 'The port to be used while running the web/socket server',
    default: DEFAULT_PORT,
  });
};

const playCommand = (argv) => {
  startServer(argv.p);
};

module.exports = yargs.command('start', 'start the server', defineOptions, playCommand).argv;
