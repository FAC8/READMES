# Choosing table structure and joining

## Best practices in table structures

## The primary key

A primary key is a value that is unique for every record in a table, and so provides an unambiguous way of linking a record in one table with a record in another table. Any column or combination of columns can be used as the primary key, providing they hold or combine to produce a unique value. In practice, it is often best to create a special column to hold a primary key rather than attempting to use existing data (such as a national insurance number).

Why do we need a primary key? Suppose we have two tables in our database: one holds information on every customer (name, address, telephone, etc.), another holds information about that customer's account (subscription plan, personalised options, etc.). These tables are related – every customer has, as well as the data in the customer table, an account which is uniquely theirs. The primary key allows us to keep track of which records are related.

CUSTOMERS TABLE
| key | name | address | telephone |
|-----|------|---------|-----------|
| 27  | Sam  | Camden  | 01234...  |
| 28  | Sam  | Dundee  | 01949...  |

ACCOUNTS TABLE
| key | customer | name | plan | time_left |
|-----|----------|------|------|-----------|
| 13  | 27       | Sam  | free | 5 months  |
| 14  | 28		 | Sam  | paid | 7 months  |

Now suppose we are talking to a customer and want to find out what account plan they are on. Since more than one customer is called 'Sam', we cannot use the name to pull out the appropriate record from the account table. With the primary key, we can find the record in the account table that holds that key in its customer column, and be sure that this record is related to the same customer.

The column in a table holding the primary of another table is called the foreign key. In this example, the customer column is the foreign key in the account table.

## Joining tables

Suppose we wish to extact all data about a customer and the account of that customer. We can 'join' the tables using the primary key.

SELECT 

Here we are joining records in the table `orders` to `customers` where the values of the `key` and `customer` fields are the same. We can perform exactly the same task more idiomatically by using the `JOIN` command:

```SQL
SELECT * FROM customers
    JOIN orders ON key=customer
```

This query will return every record. If we just want the addresses and times left for a specific customer name we can use

```SQL
SELECT address, time_left FROM customers
    JOIN orders ON key=customer
    	WHERE name='Sam'
```
The argument of `ON` (`key=customer`) is called the **predicate** of the join.

##Normalisation

Note that if we join our `customer` and `account` tables, we will have two columns containing information about customer names. Normalisation is the process of eliminating such reduncancy. Not only does this reduce the size of the database, but, more importantly, it ensures that if we need to change data, we need do so at only one location. With the current structure, if 'Sam' changes his name to 'Salmon', we will need to update two tables. If the name were stored in one table and only referred to in others by its primary key, then we would only need to update a single table.

The inventor of the relational model of database design, Edgar Codd, identified the following goals of normalisation:

1. To free the collection of relations from undesirable insertion, update and deletion dependencies;
2. To reduce the need for restructuring the collection of relations, as new types of data are introduced, and thus increase the life span of application programs;
3. To make the relational model more informative to users;
4. To make the collection of relations neutral to the query statistics, where these statistics are liable to change as time goes by.

## Inner vs. outer joints

There are many kinds of join, the most common being **inner** and **outer**. By default the `JOIN` command performs an inner join, which selects only records that share a key in both tables. But what if some customers do not have accounts? An `OUTER LEFT` join will return all records from our selected table even if they are not matched by a record in the joined table. It will of course also return any records in the joined table that DO match. An `OUTER RIGHT` join will return all records from the joined table and only those records from the first table which match those in the joined table.

## References
[Normalisation](https://en.wikipedia.org/wiki/Database_normalization)

