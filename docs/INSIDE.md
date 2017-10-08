# What's inside ?

## RxJS

The projects uses RxJS under the hood to facilitate computations and the use of streams.

## Configurations

#### Starting the server on another port

It's possible to choose the port the server is running on by adding the argument `-p` when running the server :

```
$ rnbridgemonitor start -p 3000
```

#### Choosing the server location from the React Native application

While running with Android emulators, it's not possible to use the default loopback address to access the server.
The default IP address of this project is set to `http://localhost`. You can change it with your local network ip address
to be able to use the Web UI.

From the React Native root file :

```javascript
RnBridgeMonitor
  .prepareMobile(MessageQueue)
  .stream()
  .subscribe(SocketWriter.write({ server: 'http://192.168.1.2:3000' }));
```

## Messages

When working with React Native, the JavaScript Realm and the Native Realms communicate using a bridge.
They communicate to each other by sending messages with multiple informations.

A message is composed of :


**type: Number**

The message type. If `0`, the message comes from Native to JavaScript. If `1`, the message comes from JavaScript to Native.

**isSync: Boolean**

Not sure but it seems that the message asks for a synchronous task.

**module: String**

The module name to deal with, such as `UIManager`, `RCTEventEmitter` and many others.

**method: String**

The method name to call on the module. It can be something like `createView`, `receiveEvent` etc...

**args: Array<any>**

An array of arguments that can contain any kind of values dependending on the module / method called.

**failCbId: Number**

The callback ID in case of failure

**successCbId: Number**

The callback ID in case of success
