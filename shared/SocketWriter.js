import io from "socket.io-client";

const defaultConfig = {
  server: "http://localhost:5000",
  eventName: "rn-bridge-monitor"
};

export default class SocketWriter {
  static write(config = defaultConfig) {
    const { server, eventName } = { ...defaultConfig, ...config };
    const socketWriter = new SocketWriter(io(server), eventName);
    return socketWriter.handleMessage.bind(socketWriter);
  }

  constructor(socket, eventName) {
    this.socket = socket;
    this.eventName = eventName;
  }

  handleMessage(message) {
    this.socket.emit(this.eventName, message);
  }
}
