const ioX = require("socket.io-client");
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const ModuleContainer = require("./domain/modules/ModuleContainer");
const Controller = require("./application/socketController");
const Constants = require("./constants");
const path = require("path");
const open = require("opn");

// Setup
const app = express();
const server = http.Server(app);
const io = socketIo(server);
const controller = new Controller(new ModuleContainer());

// Web
app.use(express.static(path.resolve(__dirname, "../client", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
});

// Socket
io.on("connection", socket => {
  console.log("a user connected");
  const handleCommands = command => controller.handleCommand(command, io);

  socket.on(Constants.SOCKET_PREFIX, handleCommands);
  socket.on(`${Constants.SOCKET_PREFIX}-module-tree`, handleCommands);
  socket.on("disconnect", () => io.emit("user-disconnection"));
});

server.listen(Constants.PORT, () => {
  console.log("Server sarted");
  open(`http://localhost:${Constants.PORT}`);
});
