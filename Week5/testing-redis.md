# Testing Redis

## Testing your database

Require the redis module into your testing suite to start testing. For example, as below you can test your connection to the redis server.

```javascript
const tape = require("tape");
const redis = require("redis");

tape("test to see if connection is made to server", t => {
  const testClient = redis.createClient();
  let connected = false;
  testClient.on("connect", function(){
    connected = true;
    testClient.quit();
    t.equal(connected, true, "client must make connection to server");
    t.end();
  });
})

```

But testing your code's logic doesn't necessarily require a connection to your real database and you don't want to add/remove real data so as discussed in [this](http://stackoverflow.com/questions/12526160/mocking-database-in-node-js) readme, it is common to use a mock database.

## Testing your mock database

Start by requiring the fakeredis npm module and creating an instance of the fake client using the `.createClient` method. The client object contains the database and the methods for interacting with it. This has almost all of the same methods as a normal redis client so you can use the same syntax to interact with it.

```javascript
const fakeredis = require('fakeredis');

tape("test to see if connection is made to server", t => {
  const fakeClient = fakeredis.createClient();
  fakeClient.set("jakub","czech",fakeredis.print);
  fakeClient.get("jakub", function(err, reply) {
    if(err) console.log(err);
    t.equal(reply,"czech", "client should set and get data");
    t.end();
  });
})

```
## Asynchronous testing

Remember that some of your methods for interacting with the database are asynchronous so you will have to nest your assertions within the method's callback function.

In the example above, we are testing whether or not we have successfully carried out set and get methods (your logic will of course be a lot more complicated than this!)

* The first call to the database:
```javascript
fakeClient.set("jakub","czech",fakeredis.print);
```
Is synchronous and sets a key:value pair of `"jakub":"czech"` in the fakeClient database.

* The second call to the database:
```javascript
  fakeClient.get("jakub", callback(err, reply))
```
Gets the value associated with the key,`"jakub"` and takes a callback as its second parameter. The callback is passed either an error or successful response (called reply by convention) asynchronously so if you don't nest your assertion within this callback, the assertion will take place before the response from the `.get` method is ready!! These methods are asynchronous because it can take some time to query the database and get the answer back and you wouldn't want your programme to be held up for this operation.

* The assertion:
```javascript
function(err, reply) {
   if(err) console.log(err);
   t.equal(reply,"czech", "client should set and get data");
   t.end();
}
```
Therefore has to take place within the callback using the `reply` parameter, which in this case is the value, `"czech"`

## Problems with mocking

There is line of thought that says that mocking may not be a sufficiently comprehensive method to test database code. See below for the discussion on stack overflow on the topic:

"I don't think database related code can be properly tested without testing it with the database software. That's because the code you're testing is not just javascript but also the database query string. Even though in your case the queries look simple you can't rely on it being that way forever.

So any database emulation layer will necessarily implement the entire database (minus disk storage perhaps). By then you end up doing integration testing with the database emulator even though you call it unit testing. Another downside is that the database emulator may end up having a different set of bugs compared to the database and you may end up having to code for both the database emulator and the database (kind of like the situation with IE vs Firefox vs Chrome etc.).

Therefore, in my opinion, the only way to correctly test your code is to interface it with the real database."

[Stackoverflow discussion on database testing](http://stackoverflow.com/questions/12526160/mocking-database-in-node-js)

## Lolipop questions

1. Which of the methods `.get` or `.set` needs to have the assertion placed within the callback and why are some redis client methods asynchronous?
2. Name a drawback of using a mock database for testing your code.
