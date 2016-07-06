# Create a Socket.io server

### Step One - create a simple http server.

This a socket.io tutorial, so for ease of setup we're going to use express.js. Socket.io can also be installed without a web framework.

To setup the basic app create a new directory, install express `npm install --save express`, and copy in the files index.html and server.js from the /tutorial directory.

Run the server and check your server logs a message that it's running and serves up a simple html page.


### Step Two -  setup socket.io on the server:

Install socket.io module `npm install --save socket.io`

Enable socket.io on the express server, and use socket.io's connection event handler to log each time a user connects (a simple check to make sure everything is working).

```javascript
const io = require('socket.io')(http);

...

io.on('connection', (socket) => {
  console.log('a user connected');

  // Add server side socket code here
});
```

### Step Three: add socket.io on the client

Include socket.io support on the client side by adding the following scripts to the bottom of index.html.

```html
<script src="/socket.io/socket.io.js"></script>
<script>
  var socket = io();

  // Add client side socket code here
</script>
```
The first script includes the socket.io library. The second script creates a socket instance we can use to communicate with the server.

Now restart the server and refresh the browser. The server should log 'a user connected'.

### Step 4: add disconnect event to server.js

Inside the connect handler add a disconnect handler.

```javascript
socket.on('disconnect', function(){
  console.log('user disconnected');
});
```

Restart the server, and then close a tab. The server should log 'user disconnected'.

### Step 5: send data from the client to the server

Add jquery for simplictity:

```html
<script src="http://code.jquery.com/jquery-1.11.1.js"></script>
```

Add a submit handler to send data over the web socket connection.

```javascript
$('form').submit(() => {
  socket.emit('chat message', $('#m').val());
  $('#m').val('');
  return false;
});
```

Add an event handler to catch 'chat message' events on the server:

```javascript
socket.on('chat message', (msg) => {
  console.log(`message: ${msg}`);
});
```

### Step 5: broadcast events back to all clients

Update the chat message event handler on the server:

```javascript
socket.on('chat message', (msg) => {
  io.emit('chat message', msg);
});
```
Handle the chat message event on the client side:

```javascript
socket.on('chat message', (msg) => {
  $('#messages').append($('<li>').text(msg));
});
```

Step 6: You're done!

Two way communication between client and server, which supports multiple clients.

### Links

[socket.io chat tutorial (which is the basis of this tutorial)](http://socket.io/get-started/chat/)
