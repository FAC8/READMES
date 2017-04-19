#How to join tables like a pro 🆒

So at this point we presume you have a database and can create tables on that DB, if you feel a bit shaky with the syntax here is a quick remider:

	>CREATE TABLE table_name(
	>col1 datatype,
	>col2 datatype,
	>col3 datatype,
	);
	> INSERT INTO table_name(col1,col2,col3)
	> VALUES ('value1', 'value2, 'value3');
	


So here we have two tables, students and students_orders, which are totally different apart from their ```studentid``` key that serves as the ```primary key 🔑``` for both tables. This will help us associate students and their orders even though the tables -- apart from the primary key -- don't look alike.

Here are the two tables I've created, first for students:

![screenshot1](psql2.png?raw=true)

And the second table for orders:

![screenshot2](psql3.png?raw=true)

And now we are ```RIGHT JOIN```ing them to associate students with what they bought:

![screenshot3](psql.png?raw=true1)

In this instance, both tables have studentid column and each student has their id which are same in both tables. When comparing two columns that have the same name remeber to specify which table's ```studentid``` you're referring to. Two different ways are demonstrated on the screenshot above.

[Here is a good resource for explaining different joins](http://www.tutorialspoint.com/postgresql/postgresql_using_joins.htm)


