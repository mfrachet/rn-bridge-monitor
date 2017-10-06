**Quite a POC by now, currently work in progress**

*Visualize and monitor React Native bridge messages with a Web UI or RxJs*

---

![rn-bridge-monitor](https://cdn-images-1.medium.com/max/2000/1*_3ZomJ1QiV4YkvirY22v6A.gif)

---

# Content

* <a href="#usage">How to use it ?</a>
* [What's inside ?](./docs/INSIDE.md)
* [Why to create such a module ?](./docs/WHY.md)


<h1 name="#howto">How to use it ?</h1>

### Installation

The module is currently not available on NPM. Thus, you can use this github repo as a source for the module using the following documentation :

https://docs.npmjs.com/files/package.json#dependencies

### In your code using RxJs

Add these line on your root file :

```javascript
import MessageQueue from "react-native/Libraries/BatchedBridge/MessageQueue";
import RnBridgeMonitor from "rn-bridge-monitor";

RnBridgeMonitor.prepareMobile(MessageQueue)
  .stream()
  .subscribe((msg) => {
    console.log('RxJs subscribe call. Message received: ', msg);
  });
```

### In your code using the Web UI

Add these line on your root file :

```javascript
import MessageQueue from "react-native/Libraries/BatchedBridge/MessageQueue";
import RnBridgeMonitor, { SocketWriter } from "rn-bridge-monitor";

RnBridgeMonitor.prepareMobile(MessageQueue)
  .stream()
  .subscribe(SocketWriter.write());
```

And run the following command at your project root :

```
$ ./node_modules/.bin/rnbridgemonitor start
```

It will start a Web UI at http://localhost:5000
