#Redis data structures 📚
	Redis is not a plain key-value store. It is a data structures server, supporting different kind of values. What this means is that usually key-value stores you associated string keys to string values, in Redis the value is not limited to a simple string, but can also hold more complex data structures. The following is the list of all the data structures supported by Redis, which will be covered separately in this README.

##Redis Keys 🔑
(_Not a datatype but good to know_)


Redis keys are binary safe, this means that you can use any binary sequence as a key, from a string like "foo" to the content of a JPEG file. The empty string is also a valid key.

Good to know:

* It's not a good idea to write very long keys because these are very memory-inefficient and might make your database lookup slower.
* It's also not good to write very short and cryptic keys. For example it's much easier to read and understand user:1001:followers than u1001flw
* Stick to certain naming convention with your keys for clarity.

##Redis strings 🐸

The Redis String type is the simplest type of value you can associate with a Redis key.

Since Redis keys are strings, when we use the string type as a value too, we are mapping a string to another string. The string data type is useful for a number of use cases, like caching HTML fragments or pages.

Here is a simple example of the redis keys and string values:

	> SET tutorial:key "Hello FAC8"
	> OK
	> GET tutorial:key
	> "Hello FAC8"
	
	
##Redis lists 📝

For the purpose of our use, redis lists are like Arrays. 

__Common use cases for lists__

Lists are useful for a number of tasks, two very representative use cases are the following:

* Remember the latest updates posted by users into a social network.

* Communication between processes, using a consumer-producer pattern where the producer pushes items into a list, and a consumer (usually a worker) consumes those items and executed actions.
* Every time a user posts a new photo, we add its ID into a list with LPUSH.

* When users visit the home page, we use LRANGE 0 9 in order to get the latest 10 posted items.

You can access redis lists like you do with Arrays, by index :

	> RPUSH fac8:students Kara
	> OK
	> RPUSH fac8:students Noga
	> OK
	> RPUSH fac8:students Sofia
	> OK
	> LRANGE mylist 0 -1 (prints the whole list)
	> 1) "Kara"
	> 2) "Noga"
	> 3) "Sofia"

When fast access to the middle of a large collection of elements is important, there is a different data structure that can be used, called sorted sets. 

##Redish hashes 🗿
Usually hashes are handy to represent objects, actually the number of fields you can put inside a hash has no practical limits (other than available memory), so you can use hashes in many different ways inside your application.

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

##Redish sets 🔣

Redis Sets are unordered collections of strings.

	> SADD myset hello people from fac8
	(integer) 3
	> SMEMBERS myset
	1) "fac8"
	2) "people"
	3) "from"
	4) "hello"
	
Here we have added three elements to my set and told Redis to return all the elements. As you can see they are not sorted -- Redis is free to return the elements in any order at every call, since there is no contract with the user about element ordering.

Sets are good for expressing relations between objects. For instance we can easily use sets in order to implement tags.

A simple way to model this problem is to have a set for every object we want to tag. The set contains the IDs of the tags associated with the object.

##Redis sorted sets 🔡

Sorted sets are a data type which is similar to a mix between a Set and a Hash. Like sets, sorted sets are composed of unique, non-repeating string elements, so in some sense a sorted set is a set as well.


However while elements inside sets are not ordered, every element in a sorted set is associated with a floating point value, called the score (this is why the type is also similar to a hash, since every element is mapped to a value).
Moreover, elements in a sorted sets are taken in order (so they are not ordered on request, order is a peculiarity of the data structure used to represent sorted sets). They are ordered according to the following rule:

* If A and B are two elements with a different score, then A > B if A.score is > B.score.

* If A and B have exactly the same score, then A > B if the A string is lexicographically greater than the B string. A and B strings can't be equal since sorted sets only have unique elements.

For example adding a few FAC8 student names as sorted set elements, with their year of birth as "score".

	> ZADD students 1994 "Emma Deacon"
	(integer) 1
	> ZADD students 1992 "Rich Warren"
	(integer) 1
	> ZADD students 1983 "Troy Maeder"
	(integer) 1
	> ZADD hackers 1992 "Sofia Pohjalainen"
	(integer) 1

##Bitmaps 🤖

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

## HyperLogLogs 😹	

A HyperLogLog is a probabilistic data structure used in order to count unique things (technically this is referred to estimating the cardinality of a set).
 
Usually counting unique items requires using an amount of memory proportional to the number of items you want to count, because you need to remember the elements you have already seen in the past in order to avoid counting them multiple times. However there is a set of algorithms that trade memory for precision: you end with an estimated measure with a standard error, in the case of the Redis implementation, which is less than 1%

The magic ✨ of this algorithm is that you no longer need to use an amount of memory proportional to the number of items counted 📈❌, and instead can use a constant amount of memory! 12k bytes in the worst case, or a lot less if your HyperLogLog has seen very few elements.

HyperLogLogs in Redis, while technically a different data structure, is encoded as a Redis string, so you can call GET to serialize a HyperLogLog, and SET to deserialize it back to the server.

__An example of use__ case for this data structure is counting unique queries performed by users in a search form every day.




