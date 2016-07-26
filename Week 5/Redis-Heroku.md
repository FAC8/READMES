
# The main Repo
Check out [our repo](https://github.com/matthewiiv/redis-on-heroku) and [demo website](https://heroku-redis-tutorial.herokuapp.com) to see redis deployed on Heroku.

# Connections

## Connections

Redis can only handle a limited number of client connections at once.
It doesn't automatically close connections with clients that are idle and so connections can remain open forever.
To avoid this you can configure the redis client to close connections with a timeout. Subscribers and publishers won't be timed out since their defualt state is idle.

To avoid creating multiple connections within your apps and forgetting to close them [redis connection](https://github.com/dwyl/redis-connection) provides an easy way to reuse a single connection within your app.

## Publish/Subscibe

Publish and subscribe allows publishers (those sending messages) to send messages to anyone who subscribes to a channel, rather than to specific receivers.
Subscribers subscribe to a channel and receive messages of interest from that channel.
Neither the subscriber nor the publisher needs to know exactly who is on the other end of the transactions.

The messages received from the channel consist of three parts:
1. The kind of message
2. The name of the originating channel
3. The message itself

### The kind of message
- subscribe: received if the user succesfully subscribes to the channel
- unsubscribe: received if the user succesfully unsubscribes from the channel
- message: received as a result of the PUBLISH command from the publisher

## Commands
- SUBSCRIBE
- UNSUBSCRIBE
- PUBLISH
- PSUBSCRIBE
- PUNSUBSCRIBE

The P* methods allow you to subscribe to messages following a specific format
You can use the [glob](https://en.wikipedia.org/wiki/Glob_(programming) wildcards for this.

Checkout [this](http://redis.io/topics/pubsub) for a couple of examples.
