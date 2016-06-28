# module.exports and require()

We use module.exports and require() all the time in Node.js, but how do they work?

Node's module system has a core module, called module.js, which provides a foundation for all Node.js modules to build off of. Each file is given a new instance of this base module on load, which persists even after the file has run.  This is why we are able attach properties to module.exports and require() them later as needed.

## The module wrapper
Before a module's code is executed, Node.js will wrap it with a function wrapper that looks like the following:

``` javascript
(function (exports, require, module, __filename, __dirname) {
// Your module code actually lives in here
});
```

By doing this, Node.js achieves a few things:

* It keeps top-level variables (defined with var, const or let) scoped to the module rather than the global object.  That is to say, the wrapper function created by Node.js creates a new functional scope just for that module so that there is no pollution of the rest of the Node.js environment.

* It helps to provide some global-looking variables that are actually specific to the module, such as:
The module and exports objects that the implementor can use to export values from the module;
The convenience variables ``` __filename and __dirname```, containing the module's absolute filename and directory path.

To be clear: Node.js wraps a module's code in a wrapper function that provides variables that are specific to the module, including the module and exports objects.  These objects are used to export and require modules.

To expose things in a module (ie, to make them available outside the module) we use module.exports and export the variables, functions, etc that we want to expose outside of the module.  For example, a file called misc.js contains:

```javascript
var x = 5;
var addX = function(value) {
  return value + x;
};
module.exports.x = x;
module.exports.addX = addX;
```

These then can be imported into another file/module with require():
```javascript
var misc = require('./misc.js');

```
## EventsEmitters

Events must be emitted and, sometimes, listened to. Any object that produces an event is a type of EventEmitter class.

EventEmitter class lies in events module. It is accessibly via following syntax:

```
 // Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();
```

**.on** is a listener method, which is attached to the object. Objects can have more than one listener method.

``
emitter.on(event, function1);
``

Here is an example attempting to show this below:

```
//events is a core module which exposes the eventEmitter class
var events = require('events');
var eventEmitter = new events.EventEmitter();

var tickClock = function () {
  console.log(‘tick tock tick tock');
}
//tickClock is the listener function
//it will begin when the 'startClock' event is emitted.

eventEmitter.on('startClock', tickClock);

eventEmitter.emit('startClock');
// prints ‘tick tock tick tock'

//now we can remove the listener - it is effectively stopping the clock.
eventEmitter.removeListener(‘startClock' tickClock);
```

## What are streams?

Steams are an efficient way of reading and writing files. Streams are objects that allow you to read data from a source or write data to a destination in continuous fashion. There are four types of streams:
  * Readable - used for read operation
  * Writable - used for write operation
  * Duplex - both read and write operation
  * Transform - duplex stream where the output is computed based on input

Each type of Stream is an EventEmitter. The most commonly used events are:

  * End - event when no more data is available to read
  * Data - event is used when there is data to be read
  * Error - event is triggered when there is an error in receiving or writing data
  * Finish - event when all data has been flushed to an uderlying system.
