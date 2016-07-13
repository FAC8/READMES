# Choosing table structure and joining

## Best practices in table structures
This section provides a few main tips for making it easier to work with data.
* Understand how your database will be used.  Depending on the expected usage patterns, you may choose to Normalise the data.  Normalisation is the process of breaking the data into multiple tables so the column values don't repeat (see 'Normalisation' below). The goal with a Normalised database is to organise the data to avoid duplication of fields and repeating data, and to ensure the purity of the data. So, for example, a customer’s name is in one column in one table only, and other pieces of data, for example sales, will ‘link’ to that single customer row by the use of keys (see info on Primary Keys below and code examples).

* Naming Conventions: Beware of using SQL Server reserved words (User, Date, etc.) in table names, column names and elsewhere. Use of a reserved word will give a syntax error unless you specify [square brackets] around the value, making development slower and the statements longer.  Similarly, don’t use hyphens, spaces, quotes, etc. Because they will be invalid or require [square brackets], e.g. SELECT [category-id] FROM [custom-category].

## The primary key

A primary key is a value that is unique for every record in a table, and so provides an unambiguous way of linking a record in one table with a record in another table. Any column or combination of columns can be used as the primary key, providing they hold or combine to produce a unique value. In practice, it is often best to create a special column to hold a primary key rather than attempting to use existing data (such as a national insurance number).

Why do we need a primary key? Suppose we have two tables in our database: one holds information on every customer (name, address, telephone, etc.), another holds information about that customer's account (subscription plan, personalised options, etc.). These tables are related – every customer has, as well as the data in the customer table, an account which is uniquely theirs. The primary key allows us to keep track of which records are related.

CUSTOMERS TABLE

key | name | address | telephone
-----|------|---------|---------
 27  | Sam  | Camden  | 01234...
 28  | Sam  | Dundee  | 01949...

ACCOUNTS TABLE

key | customer | name | plan | time_left
-----|----------|------|------|-----------
 13  | 27       | Sam  | free | 5 months
 14  | 28		 | Sam  | paid | 7 months

Now suppose we are talking to a customer and want to find out what account plan they are on. Since more than one customer is called 'Sam', we cannot use the name to pull out the appropriate record from the account table. With the primary key, we can find the record in the account table that holds that key in its customer column, and be sure that this record is related to the same customer.

The column in a table holding the primary of another table is called the foreign key. In this example, the customer column is the foreign key in the account table.

## Joining tables

Suppose we wish to extract all data about a customer and the account of that customer. We can 'join' the tables using the primary key. Here we are joining records in the table `orders` to `customers` where the values of the `key` and `customer` fields are the same:

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

Note that if we join our `customer` and `account` tables, we will have two columns containing information about customer names. Normalisation is the process of eliminating such redundancy. Not only does this reduce the size of the database, but, more importantly, it ensures that if we need to change data, we need do so at only one location. With the current structure, if 'Sam' changes his name to 'Salmon', we will need to update two tables. If the name were stored in one table and only referred to in others by its primary key, then we would only need to update a single table.

The inventor of the relational model of database design, Edgar Codd, identified the following goals of normalisation:

1. To free the collection of relations from undesirable insertion, update and deletion dependencies;
2. To reduce the need for restructuring the collection of relations, as new types of data are introduced, and thus increase the life span of application programs;
3. To make the relational model more informative to users;
4. To make the collection of relations neutral to the query statistics, where these statistics are liable to change as time goes by.

## Inner vs. outer joints

There are many kinds of join, the most common being **inner** and **outer**. By default the `JOIN` command performs an inner join, which selects only records that share a key in both tables. But what if some customers do not have accounts? An `OUTER LEFT` join will return all records from our selected table even if they are not matched by a record in the joined table. It will of course also return any records in the joined table that DO match. An `OUTER RIGHT` join will return all records from the joined table and only those records from the first table which match those in the joined table.

## Create View

Views are pseudo-tables: they are not real tables, but appear as ordinary tables to SELECT. A view can represent a subset of a real table or joined tables. Because views are assigned separate permissions, you can use them to restrict table access so that users see only specific rows or columns of a table.

Views allow you to:

* Restrict access to the data such that a user can only see limited data instead of complete table.

* Structure data in ways that may seem more natural or intuitive.

* Summarise data from various tables which can be used to generate reports, receipts, etc.

The PostgreSQL views are created using the `CREATE VIEW` statement. You can include multiple tables in your `SELECT` statement in very similar way as you use them in normal PostgreSQL `SELECT` query. Views can be created to be temporary, using the `TEMPORARY` keyword; they can also be deleted using the `DROP VIEW` statement.

```SQL
fake_store=# insert into sales_item (id, name, price) values (12345, 'Mac', 826.99);
INSERT 0 1
fake_store=# select * from sales_item;
  id   | name | price  
-------+------+--------
 12345 | Mac  | 826.99
(1 row)

fake_store=# insert into sales_customer (id, name, nationality) values (234, 'Sofia', 'Finland');
INSERT 0 1
fake_store=# select * from sales_customer
fake_store-# ;
 id  | name  | nationality
-----+-------+-------------
 456 | Sam   | UK
 234 | Sofia | Finland
(2 rows)

fake_store=# update sales_purch set quantity = 2 where id = 1;
UPDATE 1
fake_store=# select * from sales_purch;
 id | purch_date | cust_id | item_id | quantity
----+------------+---------+---------+----------
  2 | 2016-07-12 | 234     | 12345   |        1
  1 | 2016-07-12 | 456     | 12345   |        2
(2 rows)


fake_store=# CREATE VIEW sales_invoice as (
select sales_customer.name,
sales_purch.purch_date,
sales_item.name AS item_name,
sales_item.price,
sales_purch.quantity,
(sales_purch.quantity * sales_item.price) AS subtotal
from sales_purch, sales_customer, sales_item
where (sales_customer.id = sales_purch.cust_id) and
(sales_item.id = sales_purch.item_id)
);

fake_store=# select * from sales_invoice;
 name  | purch_date | item_name | price  | quantity | subtotal
-------+------------+-----------+--------+----------+----------
 Sofia | 2016-07-12 | Mac       | 826.99 |        1 |   826.99
 Sam   | 2016-07-12 | Mac       | 826.99 |        2 |  1653.98
(2 rows)
```



## References
[Normalisation](https://en.wikipedia.org/wiki/Database_normalization)

[Intro to Database Design](http://www.sqlwatchmen.com/blog/best-practices-for-database-schema-design/)
