## REDIS PERSISTENCE

Persistence in computer science refers to object and process characteristics that continue to exist even after the process that created it ceases or the machine it is running on is powered off. When an object or state is created and needs to be persistent, it is saved in a non-volatile storage location, like a hard drive, versus a temporary file or volatile random access memory (RAM).

####RDB
RDB allows to take snapshots at certain points in time so we can save our data. You can alter how often Redis does this by changing redis.conf file through the Redis CLI like so: 

```
CONFIG SET SAVE "800 2 200 30"
```

In this example we would take a snapshot every 800 seconds when there are two changes commited or every 200 seconds if there are at least 30 changes. By default, RBD will save the dataset in a ```dump.rdb``` file in the root, from which you can restore the database if there is a failure. 

Using RDB has disadvantages. In the event of failure data could be lost that hasn't been saved in the snapshot time frame. To avoid this we can use the other option.

###AOF (Append only file)
This is Redi's main persistance option. AOF uses the append only file to log each operation that modifies the database. If there is a failure, Redis restarts and replays the operation in the AOF. This allows it to start where it was before the failure. 

To allow this option, change your config file by writing ``` CONFIG SET appendonly yes ``` 

With AOF, there are three sub-options. These are chosen depending on the user's priorities.

* __appendfsync no__: this is the fastest option, but comes with risks, as we have no control over when to save the operating system as this is enforced by the system. 
* __appendfsync everysec__: this syncs every second, and whilst it is still fast, you could lose a second of data. Redis chooses this as the __default__ option. 
* __appendfsync always__: syncs every options. It is the slowest of the three, but safest in terms of losing data.

###Tutorial 
1) If we were to use Redis without persistence options, we could save an item to a database, close the database and CLI. What would happen - when we start the database and CLI - we would not be able to retrieve the data and the item. By default, this is not saving the data when the server is not running. In order to avoid this, look at step 2.

2) We would have to make a ```redis.conf``` file in the root of our project. 

3) We would then start our database again, passing the path of our new ```conf``` file as an argument. e.g ```redis-server ./redis.conf```

4) Open ```redis-cli``` again, and run the following commands:

```

CONFIG SET appendonly yes		// changes the configuration of the Redis server to enable AOF
CONFIG REWRITE					// saves this configuration to your redis.conf file, so that when you close and open the database, the setting will be remembered

```

5) Your server is now saving all 'write' operations to the ```redis.conf``` file every second (as this is the default setting).

##REDIS OPTIMIZATION
###Using short keys
A really easy way to reduce memory is to use less keys. Lets think that if we used 10,0000 keys named: 

```
my/special/key-name/... (18 characters)
```

As opposed to:

```
m/special/key-name/...   (7 characters)
```

We save 11 characters (11 bytes) which at a large scale can bring us a very large saving.  

###Using hashes

You must be aware that every key in Redis comes with some additional metadata. So when you’ll store objects like “key=value” that doesn’t mean you will use 8 bytes per key.

```
redis redis:6379> DEBUG OBJECT my/key
Value at:0x7f36f2980900 refcount:1 encoding:raw serializedlength:4 lru:463740 lru_seconds_idle:1215660
```

Redis has to e.g. store some info for LRU algorithm.

Values stored in hashes don’t come with additional metadata. Internally Redis uses simple dictionary structure for storing them.

###Lollipop questions:
- AOF has three sub options. Which one of these is the fastest? Extra points if you can mention the downside of this system. 
- Explain any of the ways that Redis will be optimized. 

[Redis CONFIG SET documentation](http://redis.io/commands/config-set)

[Redis persistence documentation](http://redis.io/topics/persistence)

[Redis optimization](http://labs.octivi.com/how-we-cut-down-memory-usage-by-82/)