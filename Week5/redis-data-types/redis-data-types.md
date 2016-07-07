#Redis data types 📚

__Redis is a fast in memory key-value data store.__

Redis is not a plain key-value store as it supports different kind of values, not only strings.
Usually key-value stores you associated string keys to string values, in Redis the value is not limited to a simple string, but can also hold more complex data structures. The following is the list of all the data structures supported by Redis, which will be covered separately in this README.

##Redis Keys 🔑
These are the __key__ part of key-value.


Redis keys are binary safe, this means that you can use any binary sequence as a key, from a string like "foo" to the content of a JPEG file. The empty string is also a valid key.

Good to know:

* It's not a good idea to write very long keys because these are very memory-inefficient and might make your database lookup slower.
* It's also not good to write very short and cryptic keys. For example it's much easier to read and understand user:1001:followers than u1001flw
* Stick to certain naming convention with your keys for clarity.

##Redis Values

###Redis strings 🐸

The Redis String type is the simplest type of value you can associate with a Redis key.

Since Redis keys are strings, when we use the string type as a value too, we are mapping a string to another string. The string data type is useful for a number of use cases, like caching HTML fragments or pages.

Here is a simple example of the redis keys and string values:

	> SET tutorial:key "Hello FAC8"
	> OK
	> GET tutorial:key
	> "Hello FAC8"
	
	
###Redis lists 📝

Redis Lists are simply lists of strings, sorted by insertion order. It is possible to add elements to a Redis List pushing new elements on the head (on the left) or on the tail (on the right) of the list.

__Common use cases for lists__

Lists are useful for a number of tasks, two very representative use cases are the following:

* Remember the latest updates posted by users into a social network.

* Model a timeline in a social network, using LPUSH in order to add new elements in the user time line, and using LRANGE in order to retrieve a few of recently inserted items.

* Every time a user posts a new photo, we add its ID into a list with LPUSH.

* When users visit the home page, we use LRANGE 0 9 in order to get the latest 10 posted items.

You can access redis lists like you do with Arrays, by index :

	> RPUSH fac8:students Kara
	> OK
	> RPUSH fac8:students Noga
	> OK
	> RPUSH fac8:students Sofia
	> OK
	> LRANGE mylist 0 -1 # prints the whole list
	> 1) "Kara"
	> 2) "Noga"
	> 3) "Sofia"

When fast access to the middle of a large collection of elements is important, there is a different data structure that can be used, called sorted sets. 

###Redish hashes 🗿
Usually hashes are handy to represent objects, actually the number of fields you can put inside a hash has no practical limits (other than available memory), so you can use hashes in many different ways inside your application.

A hash with a few fields (where few means up to one hundred or so) is stored in a way that takes very little space, so you can store millions of objects in a small Redis instance.

	> HMSET user:1000 username nogainbar birthyear 1984 verified 1
	OK
	> HGET user:1000 username
	"nogainbar"
	> HGET user:1000 birthyear
	"1984"
	> HGETALL user:1000
	1) "username"
	2) "nogainbar"
	3) "birthyear"
	4) "1984"
	5) "verified"
	6) "1"
	
It is worth noting that small hashes (i.e., a few elements with small values) are encoded in special way in memory that make them very memory efficient.

###Redish sets 🔣

Redis Sets are unordered collections of strings.

Redis Sets have the desirable property of not allowing repeated members. Adding the same element multiple times will result in a set having a single copy of this element. Practically speaking this means that adding a member does not require a check if exists then add operation.
Sets are good for expressing relations between objects. For instance we can easily use sets in order to implement tags.

	> SADD myset hello people from fac8
	(integer) 4
	> SMEMBERS myset
	1) "fac8"
	2) "people"
	3) "from"
	4) "hello"
	
Here we have added three elements to my set and told Redis to return all the elements. As you can see they are not sorted -- Redis is free to return the elements in any order at every call, since there is no contract with the user about element ordering.

###Redis sorted sets 🔡

Redis Sorted Sets are, similarly to Redis Sets, non repeating collections of Strings. The difference is that every member of a Sorted Set is associated with score, that is used in order to take the sorted set ordered, from the smallest to the greatest score. While members are unique, scores may be repeated.

Elements in a sorted sets are taken in order and they are ordered according to the following rule:

* If A and B are two elements with a different score, then A > B if A.score is > B.score.

* If A and B have exactly the same score, then A > B if the A string is lexicographically greater than the B string. A and B strings can't be equal since sorted sets only have unique elements.

For example adding a few FAC8 student names as sorted set elements, with their year of birth as "score".

	> ZADD students 1993 "Emma Deacon"
	(integer) 1
	> ZADD students 1992 "Rich Warren"
	(integer) 1
	> ZADD students 1983 "Troy Maeder"
	(integer) 1
	> ZADD hackers 1992 "Sofia Pohjalainen"
	(integer) 1

###Bitmaps 🤖

Bitmaps are not an actual data type, but a set of bit-oriented operations defined on the String type. Since strings are binary safe blobs and their maximum length is 512 MB, they are suitable to set up to 232 different bits.

Bit operations are divided into two groups: constant-time single bit operations, like setting a bit to 1 or 0, or getting its value, and operations on groups of bits, for example counting the number of set bits in a given range of bits (e.g., population counting).

One of the biggest advantages of bitmaps is that they often provide extreme space savings when storing information. For example in a system where different users are represented by incremental user IDs, it is possible to remember a single bit information (for example, knowing whether a user wants to receive a newsletter) of 4 billion of users using just 512 MB of memory.
Bits are set and retrieved using the SETBIT and GETBIT commands:

	> SETBIT key 10 1
	(integer) 1
	> GETBIT key 10
	(integer) 1
	> GETBIT key 11
	(integer) 0
	
Common user cases for bitmaps are:

* Real time analytics of all kinds.

* Storing space efficient but high performance boolean information associated with object IDs.

### HyperLogLogs 😹	

A HyperLogLog is a probabilistic data structure used in order to count unique things (technically this is referred to estimating the cardinality of a set).
 
Usually counting unique items requires using an amount of memory proportional to the number of items you want to count, because you need to remember the elements you have already seen in the past in order to avoid counting them multiple times. However there is a set of algorithms that trade memory for precision: you end with an estimated measure with a standard error, in the case of the Redis implementation, which is less than 1%

The magic ✨ of this algorithm is that you no longer need to use an amount of memory proportional to the number of items counted 📈❌, and instead can use a constant amount of memory! 12k bytes in the worst case, or a lot less if your HyperLogLog has seen very few elements.

HyperLogLogs in Redis, while technically a different data structure, is encoded as a Redis string, so you can call GET to serialize a HyperLogLog, and SET to deserialize it back to the server.

__An example of use__ case for this data structure is counting unique queries performed by users in a search form every day.

##Resources 🛠

* [Simple introduction to Redis data types] (https://matt.sh/introduction-to-redis-data-types)
* [Official Redis documentation about the data types] (http://redis.io/topics/data-types)
* [Interesting debate about sets vs hashes](http://stackoverflow.com/questions/13557075/redis-set-vs-hash)

## 🎉 Pop Quiz! 🎊

1. What datatypes can Redis keys be?
2. Do redis sets have unique indexes?
3. Example of when you could use a bitmap.


##Redis command cheat sheet
	
###SET
will store the key into the db:

SET server:name "fido"

###GET
will get the value of serer:name 

GET server:name => "fido"

###DEL
Delete a given key - when delete and then GET the value, 1 equals true, meaning: it was deleted. if DEL again, it will give you 0 but that means that is a falsy value.

###SETNX

SET-if-not-exist
will set a key only if doesnt exist already

###INCR

automatically increment a number stored at a given key

###EXPIRE

set the key to exist only for a certain amount of time

###TTL

will tell how long there is until its expired
(-2 means that the key doesnt exist anymore)
(-1 means it will never exipres, if you set TTL to -1 it will never exipre, but that will be the default if you dont set a specific TTL to it.)


##LISTS

have a specific order

###RPUSH

puts the new value at the end of a list

###LPUSH

puts the value at the start of the list

###LRANGE

gives you as many bits of the list that you want:

LRANGE friends 0 -1 => 1)'sam'   2)'alice'   3)'bob'
LRANGE friends 0 1 => 1)'sam'   2)'alice'
LRANGE friends 1 2 => 1)'alice'  2)'bob'

###LLEN

will give you the current length of list

###LPOP

removes the first element from the list and returns it.

###RPOP

removes the last element from the list and returns it

##SETS

dont have a specific order and the elements can onlt appear once

###SADD

will add the given value to the set

###SREM
REMOVES THE GIVEN VALUE FROM THE SET

will remove the given value to the set

###SISMEMBER

will test if the value is in the set. retunr 1 if its there and 0 if not.

###SMEMBERS

return the list of the members in set

###SUNION

combines two or more sets and returns the list of elements.


##SORTED SETS

Sorted set is like a regular set but has a score associated to each value (so that you can order the set)

###ZADD

will add a value to the set with a score:

    ZADD hackers 1940 "Alan Kay"
    ZADD hackers 1906 "Grace Hopper"
    ZADD hackers 1953 "Richard Stallman"
    ZADD hackers 1965 "Yukihiro Matsumoto"
    ZADD hackers 1916 "Claude Shannon"
    ZADD hackers 1969 "Linus Torvalds"
    ZADD hackers 1957 "Sophie Wilson"
    ZADD hackers 1912 "Alan Turing"
    	
    	
###ZRANGE

get a range of values 

    ZRANGE hackers 2 4 => 1) "Claude Shannon", 2) "Alan Kay", 3) "Richard Stallman"


##HASHES

###HSET
will set the data

 	HSET user:1000 name "John Smith"
    HSET user:1000 email "john.smith@example.com"
    HSET user:1000 password "s3cret" 
    
or

	HMSET user:1001 name "Mary Jones" password "hidden" email "mjones@example.com"
    
###HGETALL
will get all the data

###HGET
will get a single value from the Hash table

  	HGET user:1001 name => "Mary Jones"
  	
Numerical values in hash fields are handled exactly the same as in simple strings and there are operations to increment this value in an atomic way.

  	HSET user:1000 visits 10
    HINCRBY user:1000 visits 1 => 11
    HINCRBY user:1000 visits 10 => 21
    HDEL user:1000 visits
    HINCRBY user:1000 visits 1 => 1


