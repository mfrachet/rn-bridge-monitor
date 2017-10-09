const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const open = require('opn');
const ModuleContainer = require('./domain/modules/ModuleContainer');
const Controller = require('./application/socketController');
const Constants = require('./constants');
const { log, logWarn, logImportant } = require('./application/log');

function startServer(port = Constants.PORT) {
  // Setup
  const app = express();
  const server = http.Server(app);
  const io = socketIo(server, { pingTimeout: 30000 });
  const controller = new Controller(new ModuleContainer());

  // Web
  app.use(express.static(path.resolve(__dirname, '../', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../', 'build', 'index.html'));
  });

  // Socket
  io.on('connection', (socket) => {
    log('Socket.connection', `${socket.id} has just connected`);
    const handleCommands = command => controller.handleCommand(command, io);
    socket.on(Constants.SOCKET_PREFIX, handleCommands);
    socket.on(`${Constants.SOCKET_PREFIX}-module-tree`, handleCommands);
    socket.on('disconnect', () => {
      logWarn('Socket.disconnect', `${socket.id} has just disconnected`);
      io.emit('user-disconnection');
    });
  });

  server.listen(port, () => {
    logImportant('Server', 'started on port', port);
    open(`http://localhost:${port}`);
  });
}

module.exports = startServer;
