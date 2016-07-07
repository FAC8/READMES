#Mocking Redis

## Why mock?
- We do not need to run a redis server process or import any environment variables. We can even create multiple instances of fakeredis and run tests in parallel.
- We do not need to create a testing database or risk tampering with our actual database.
- Therefore, mocking is safer and faster.

So...

```bash
npm install fakeredis
```

##Create a mock client

We can call our mocked database anything we like when we first create it.

```javascript
const client = require("fakeredis").createClient('anything we like');
```

And we can create multiple client connections by reusing the name:

```javascript
const anotherClient = require("fakeredis").createClient('anything we like');
```

That's just
```javascript
const fakeredis = require("fakeredis")
fakeredis.createClient('anything we like')
```

##Beware
Not all commmands that work in redis work in fakeredis.

See the README [here](https://github.com/hdachev/fakeredis) for an explanation of what commands you can and cannot use.

##You guessed it...

**That's basically it!** Run your tests exactly as you would on the real database. Oh wait, you didn't read that readme. [DO IT NOW!](https://github.com/hdachev/fakeredis)

## OK, if you insist...

Here's a little trick you might like. Use your testing library to mock redis with fakeredis, so your commands can look exactly as they would with the real database. For example, with sinon:

```javascript
sinon.stub(redis, 'createClient', fakeredis.createClient);
client = redis.createClient(); //creates fakeredis instance
redis.createClient.restore(); //restore original after test
```

##Need for speed?
Did you read that [readme](https://github.com/hdachev/fakeredis)? ALL of it? Hurry up! 

Fine, if you really can't be bothered, maybe just take note of this: since your redis is a mock it can return results without latency. Some latency is mocked by default. But you can turn it off. Pass an options object as the second parameter:

```javascript
var client = require("fakeredis").createClient('name', {
    fast : true
});
```
Now go and read the [readme](https://github.com/hdachev/fakeredis)

##Links

[DWYL intro to Redis](https://github.com/dwyl/learn-redis)

[Some more detailed examples using fakeredis](https://ejosh.co/de/2015/01/node-js-socket-io-and-redis-intermediate-tutorial-server-side/)

####To mock or not to mock? 

[Stackexchange](http://stackoverflow.com/questions/12526160/mocking-database-in-node-js)

[Stackexchange](http://stackoverflow.com/questions/3111645/mock-objects-vs-test-database)

[Stackexchange](http://stackoverflow.com/questions/310307/mocking-vs-test-db)

[Stackexchange](http://programmers.stackexchange.com/questions/206539/unit-tests-and-databases-at-which-point-do-i-actually-connect-to-the-database)

[8th light](https://blog.8thlight.com/uncle-bob/2014/05/10/WhenToMock.html)
