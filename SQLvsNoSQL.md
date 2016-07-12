### SQL Vs. NoSQL

Imagine, if you will, the relational database as Microsoft Excel programme. You can have several tables and they can affect each other, that is, they can have relations and that’s why we call them relational. When you update one table, it is possible to link it to another table and have that other table updated automatically. In a non-relational structure, this is not possible. 

A non-relational database just stores data without explicit and structured mechanisms to link data from different tables (or buckets) to one another.

**Data analysis, querying data**

However, in a distributed system, joining the tables may be a very challenging task. Further, all data must be converted into tables. This is often difficult and may slow down the workflow significantly. 

However, if one of the primary purposes of your programme is data analysis, you will probably be best off using the relational database. If you want your application to handle a lot of complicated querying, database transactions and routine analysis of data, you’ll probably want to stick with a relational database.

Data in an application has value to the business that goes beyond the insert-read-update-delete cycle of a typical Web application. Businesses mine information in corporate databases to improve their efficiency and competitiveness, and business intelligence (BI) is a key IT issue for all medium to large companies.

**Modifying database**

But it's hard to add new content to a relational database. Or new features. Or new attributes. Not without disrupting performance or taking your database offline.

With non-relational databases you can store any type of content. Incorporate any kind of data in a single database.Data now includes rich data types – tweets, videos, podcasts, animated gifs – which are hard, if not impossible, to store in a relational database. 


NoSQL databases offer few facilities for ad-hoc query and analysis. Even a simple query requires significant programming expertise,

There are companies that work on solutions to this. For instance Quest Software has developed a product — Toad for Cloud Databases — that can provide ad-hoc query capabilities to a variety of NoSQL databases.

**Cost and code**

In non-relational databases like Mongo, there are no joins like there would be in relational databases. This means you need to perform multiple queries and join the data manually within your code -- and that can get very ugly, very fast.

Of course, everything comes at a cost. Maintenance of RDBMS (relational database management system) is not easy to maintain and requires a lot of skilled and highly trained database administrators. It turns out, however, that even the non-relational databases are not as easily managed as may seem. 

**BIG DATA and scalability**

As the sheer volume of data has increased, commercial opportunities have presented themselves.

Today, the volumes of "big data" that can be handled by NoSQL systems, such as Hadoop, outstrip what can be handled by the biggest RDBMS.

High-end RDBMS systems can be maintained only with the assistance of expensive, highly trained DBAs. DBAs are intimately involved in the design, installation, and ongoing tuning of high-end RDBMS systems.

It is much easier to scale up a non-relational database. In the case of relational database, scaling up could mean buying bigger servers as database load increases — rather than scale out — distributing the database across multiple hosts as load increases as in the case of non-relational DB. The economic advantages of scaling out on commodity hardware become irresistible.
because:
RDBMS tends to rely on expensive proprietary servers and storage systems. The result is that the cost per gigabyte or transaction/second for NoSQL can be many times less than the cost for RDBMS, allowing you to store and process more data at a much lower price point.

Another complication of the relational databases is that you have to plan much more carefully and more in advance what your data structure will be like. You are likely to have to keep in mind the concept of REFERENTIAL INTEGRITY. Referential integrity is the concept in which multiple database tables share a relationship based on the data stored in the tables, and that relationship must remain consistent.The burden of instilling and maintaining referential integrity rests on the The burden of instilling and maintaining referential integrity rests on the person who designs the database schema.


**Quick recap**

**SQL(Relational) database pros**

* Better support, product suites and add-ons to manage these databases due to the length of time they've been available.
* Atomicity, Consistency, Isolation and Durability (*ACID*) compliant.

**NoSQL(Non-Relational) database pros**

* They’re usually much more open and flexible as databases. They allow adapting to the needs of a project in a much easier way than entity related models.
* Changes in the schemes can be done without having to stop the database.
* Scalability & *Horizontal scaling:* they’re capable of growing in device number, instead of having to reside in one large device.
* Query optimization on databases designed for large amounts of data.

**NoSQL(Non-Relational) databases cons**

* Lack of *standardizing*. There are many NoSQL databases and there is still no standard like the ones that exist in relational databases. An uncertain future is predicted for these databases.
* Cross-platform support. There are still many improvements to be made on some systems so that they can run on non-Linux operating systems.

## When to use each database or even both

If your data needs are changing rapidly, you have high amount of items to handle viral growth, or your data is growing fast and you need to be able to scale out quickly and efficiently, maybe NoSQL is for you. But if the data you have isn’t changing in structure and you’re experiencing moderate, manageable growth, your needs may be best met by SQL technologies.

Just about any industry that has a need to store data, and allow end users to quickly and easily access the data can benefit from the integration of multiple database types, such as financial, transportation, manufacturing, health care, legal, point of sale, to name only a few.

**EXAMPLE!**

For example, an online retail website when it comes to handling transactions, immediate consistency – not eventual consistency – is key. Every transaction must be accurately and consistently applied, which means any NoSQL database used for a mission critical financial application should be fully Atomicity, Consistency, Isolation and Durability (ACID) compliant to process purchasing transactions.

At the same time, the portion of the website that handles customer reviews and comments does not require the same level of consistency. Leveraging NoSQL performance for the front-end data capture, and SQL for the back-end reporting and analysis.
