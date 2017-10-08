**Quite a POC by now, currently work in progress**

*Visualize and monitor React Native bridge messages with a Web UI or RxJs*

---

![rn-bridge-monitor](https://cdn-images-1.medium.com/max/2000/1*_3ZomJ1QiV4YkvirY22v6A.gif)

---

# Content

* <a href="#how-to-use-it-">How to use it ?</a>
* [What's inside ?](./docs/INSIDE.md)
* [Why to create such a module ?](./docs/WHY.md)


# How to use it ?

### Installation

The module is currently not available on NPM. Thus, you can use this github repo as a source for the module using the following documentation :

https://docs.npmjs.com/files/package.json#dependencies

### In your code using RxJs

If you would like to only use the library to compute and read messages using RX, you may add the following lines at the top of your root file :

```javascript
import MessageQueue from "react-native/Libraries/BatchedBridge/MessageQueue";
import RnBridgeMonitor from "rn-bridge-monitor";

RnBridgeMonitor
  .prepareMobile(MessageQueue)
  .stream()
  .filter(yourFilterFunction) // apply any RX operator
  .subscribe((message) => {
    console.log('RxJs subscribe call. Message received: ', message);
  });
```

See the message composition on [What's inside ?](./docs/INSIDE.md)

### In your code using the Web UI

If you prefer to listen to bridge messages using a Web UI, let's add the following lines at the top of your root file :

```javascript
import MessageQueue from "react-native/Libraries/BatchedBridge/MessageQueue";
import RnBridgeMonitor, { SocketWriter } from "rn-bridge-monitor";

RnBridgeMonitor
  .prepareMobile(MessageQueue)
  .stream()
  .subscribe(SocketWriter.write());
```

And run the following command at your project root :

```
$ rnbridgemonitor start
```
or if it doesn't work :

```
$ ./node_modules/.bin/rnbridgemonitor start
```

It will start a Web UI at http://localhost:5000

See configurations details on [What's inside ?](./docs/INSIDE.md)
