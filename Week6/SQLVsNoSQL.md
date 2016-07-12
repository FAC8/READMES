### SQL Vs. NoSQL

**SQL(Relational) database pros**

* Better support, product suites and add-ons to manage these databases due to the length of time they've been available.
* Atomicity, Consistency, Isolation and Durability (*ACID*) compliant.

**SQL(Relational) databases cons**

* Scalability, even though it’s usually tested in productive environments, it’s usually lower than NoSQL databases.


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
