# Further Node

## Event Emitters

An event emitter can be declared as follows:

```javascript
const events = require('events')
const yourEmitter = new events.EventEmitter;
```

Event emitters provide a method that allows you to add listeners.

```javascript
yourEmitter.on('someEvent', function1);
```
Whenever yourEmitter emits the event 'someEvent', function1 will be called

You can add or remove as many listeners to yourEmitter as you like

```javascript
yourEmitter.on('someEvent', function1);
yourEmitter.on('someEvent', function2);
yourEmitter.on('someEvent', function3);

yourEmitter.removeListener('someEvent', function1);
```

```javascript
yourEmitter.emit('someEvent')
```
Emitting 'someEvent' will call function2 and function3.

If your functions accept parameters you can include these in the emit.

```javascript
yourEmitter.emit('someEvent', 'parameterString')
```
Will call function2 and function3 with the 'parameterString' as an argument.

```javascript
yourEmitter.removeAllListeners('someEvent')
yourEmitter.emit('someEvent')
```
Will call nothing.

### Examples

```javascript
// Run this in you command screen to see what event emitters do
// You can just type node to be able to do this.
const events = require('events');
var yourEmitter = new events.EventEmitter;
yourEmitter.on("Hello", function () {
  console.log("Hello");
});
yourEmitter.on("Greet", function (message) {
  console.log(message);
});
yourEmitter.emit("Hello");
yourEmitter.emit("Greet", "Hey there!");
yourEmitter.emit("unhandled");

```
You can see how a basic event emitter works:

- The first event calls a function to console log "Hello"
- The second calls a function which requires an argument. "Hey there!" is passed as the message argument.
- The third event has no listener so returns false.

```javascript
// Run this in you command screen to see what event emitters do
// You can just type node to be able to do this.
const events = require('events');
var yourEmitter = new events.EventEmitter;
yourEmitter.once("Hello", function () {
  console.log("Hello");
});
yourEmitter.on("Greet", function (message) {
  console.log(message);
});
yourEmitter.emit("Hello");
yourEmitter.emit("Hello");
yourEmitter.emit("Greet", "Hey there!");
yourEmitter.emit("unhandled");

```
Using yourEmitter.once defines a listener that will be removed after it is call once. Run the code above to see.

### Servers

The http.Server you created is also an event emitter. It can emit 4 events:
- 'close' : emitted when the server closes
- 'error' : emitted when an error occurs - 'close will be called following this event'
- 'connection' : emitted when a new connection is made
- 'listening' : emitted after the method .listen has been called on the server.

```javascript
const http = require('http');
const handler = require('./handler.js');
const port = 4000;
// Creates a http.Server object which has the aboce event emitters.
const server = http.createServer(handler);
// Does lots of things but for these purposes emits the event 'listening'. You may choose to handle this how you wish.
server.listen(port);
```

You may wish to set up some event listeners to your node server:

Try adding the following instead of the console.log() after server.listen(port);

```javascript
server.on('listening', () => {
  console.log(`The server is now listening to on port: ${port}`);
});

server.on('error', () => {
  console.log('The server has experienced and error');
});
```

## Uses

Using objects that emit events allows you to choose which functions to call after creating the object.
You can essentially create call back functions within premade objects!
It also allows you to easily perform different actions dependent on how many times the event has been emitted.




## Streams

A stream is an eventEmitter with some methods.

Streams can be readable, writable, or both. All streams are instances of EventEmitter.

To access the stream module:
```javascript
const stream = require('stream');
```

In a Node.js based HTTP server, request is a readable stream and response is a writable stream
The stream module itself is most useful for developer's that are creating new types of stream instances. Developer's who are primarily consuming stream objects will rarely need to use the stream module.

All streams created by Node.js APIs operate exclusively on strings and Buffer objects.
- READABLE STREAMS let you red data from a source.
- WRITABLE STREAMS let you write data to a destination.
- DUPLEX STREAMS let you do both.

A key goal of the stream API, and in particular the stream.pipe() method, is to limit the buffering of data to acceptable levels such that sources and destinations of differing speeds will not overwhelm the available memory.
Readable streams use the EventEmitter API for notifying application code when data is available to be read off the stream. That available data can be read from the stream in multiple ways.

```javascript
const myStream = getWritableStreamSomehow();
myStream.write('some data');
myStream.write('some more data');
myStream.end('done writing data');
```

The 'close' event is emitted when the stream and any of its underlying resources (a file descriptor, for example) have been closed. The event indicates that no more events will be emitted, and no further computation will occur.
Readable streams effectively operate in one of two modes: flowing and paused.

When in flowing mode, data is read from the underlying system automatically and provided to an application as quickly as possible using events via the EventEmitter interface.
The readable.read() method should only be called on Readable streams operating in paused mode. In flowing mode, readable.read() is called automatically until the internal buffer is fully drained.

The best way to read data from a stream is to listen to data event and attach a callback. When a chunk of data is available, the readable stream emits a data event and your callback executes.

```javascript
var fs = require('fs');
var readableStream = fs.createReadStream('file.txt');
var data = '';
readableStream.on('data', function(chunk) {
data+=chunk;
});
readableStream.on('end', function() {
console.log(data);
});
```
