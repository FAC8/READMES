# Postgres with node and heroku

> In order to do this tutorial you will need to install
> [heroku-toolbelt](https://toolbelt.heroku.com/)

Postgres can be run in node by using a node module to create a client to interact with the database.

There are many node modules for interacting with postgres, for example
*sequelize*, an
[ORM](https://en.wikipedia.org/wiki/Object-relational_mapping) module that
provides an interface for making SQL queries in a object-oriented way.

This tutorials covers *[pg](https://www.npmjs.com/package/pg)*, a popular
node module which allows you to make queries to the database using SQL syntax.

## Connect to a local pg database from your server

We have set up a basic server for interacting with postgres database
using the *pg* module. You can clone it
[here](https://github.com/FAC8/pg-node-demo).

```bash
$ git clone https://github.com/FAC8/pg-node-demo.git && cd pg-node-demo
```

```bash
$ npm install
```

```bash
$ heroku create
```

Now, you should go to heroku, log in in to the website and find the
application you have just created. Go to the resources tab, and search
for *postgres* and choose **Heroku Postgres**, the free version of course ;)

```bash
$ heroku pg:psql # this will log you into the postgresql
```

Now the terminal is showing a postgres prompt which will use to create the question table for our project. We will also insert some questions. Copy the commands below into the postgres prompt.

```
CREATE TABLE questions (question text, answer text, key text);

INSERT INTO questions (question, answer, key) VALUES ('Favourite cheese?', 'Cheddar', 'key1');

INSERT INTO questions (question, answer, key) VALUES ('Do you like Cheddar?', 'No', 'key1');

INSERT INTO questions (question, answer, key) VALUES ('Favourite planet?', 'Jupiter', 'key1');

INSERT INTO questions (question, answer, key) VALUES ('Favourite carpenter?', 'Jesus', 'key1');
```

After populating that table we can exit the prompt with `\q`. Then run the project with:

```
$ git push heroku
```
