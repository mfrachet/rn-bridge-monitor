# Why to create such a module ?

At React Native EU, on September 2017, Emil SJOLANDER has explained how the Native part of React Native is working.
He has explained how the JavaScript Realm drives the Native one by sending messages with informations to create views or to handle specific events.

At this point, I had a simple idea of how RN works under the hood, but I wanted to investiguate a bit more.

This way, I created this project that was only supposed to log messages through the bridge for understanding purpose.

Since I realized that it was possible to recreate the Native tree view and to provide informations concerning the current state of an application, both on Android and iOS, I tried to implement something visual.


[![Emil SJOLANDER at RN EU 2017](https://img.youtube.com/vi/jFiQ6FxBDqY/0.jpg)](https://www.youtube.com/watch?v=jFiQ6FxBDqY)
