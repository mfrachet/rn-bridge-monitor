import Rx from "rx";
import BridgeMonitor from "./lib/BridgeMonitor";
import SocketWrite from "./lib/SocketWriter";

export const SocketWriter = SocketWrite;
const defaultConfig = {
  exclude: ["WebSocketModule"]
};

export default class RnBridgeMonitor {
  static prepareMobile(MessageQueue, config = {}) {
    const source = Rx.Observable.create(observer => {
      MessageQueue.spy(observer.onNext.bind(observer));
    });
    const realConfig = { ...defaultConfig, ...config };
    return new BridgeMonitor(source, realConfig);
  }
}
