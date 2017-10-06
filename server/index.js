const ioX = require("socket.io-client");
const http = require("http").createServer();
const io = require("socket.io")(http);
const ModuleContainer = require("./domain/modules/ModuleContainer");
const Controller = require("./application/socketController");
const Constants = require("./constants");

const controller = new Controller(new ModuleContainer());

io.on("connection", socket => {
  console.log("a user connected");
  const handleCommands = command => controller.handleCommand(command, io);

  socket.on(Constants.SOCKET_PREFIX, handleCommands);
  socket.on(`${Constants.SOCKET_PREFIX}-module-tree`, handleCommands);
  socket.on("disconnect", () => io.emit("user-disconnection"));
});

http.listen(Constants.PORT, () => console.log("Listening"));
