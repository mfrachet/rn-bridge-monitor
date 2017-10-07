import Rx from 'rx';
import BridgeMonitor from './BridgeMonitor';
import SocketWrite from './helpers/SocketWriter';

export const SocketWriter = SocketWrite;
const defaultConfig = {
  exclude: ['WebSocketModule'],
};

export default class RnBridgeMonitor {
  static prepareMobile(MessageQueue, config = {}) {
    const source = Rx.Observable.create((observer) => {
      MessageQueue.spy(observer.onNext.bind(observer));
    });
    const realConfig = { ...defaultConfig, ...config };
    return new BridgeMonitor(source, realConfig);
  }
}
