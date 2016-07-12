# Postgres with node and heroku

> In order to do this tutorial you will need to have
> [heroku-toolbelt](https://toolbelt.heroku.com/)

Postgres can be run in node with the use of a node module which enable
you to interact with the database.

There are many node modules for interacting with postgres, for example
*sequelize*, an
[ORM](https://en.wikipedia.org/wiki/Object-relational_mapping) module
provides an interface for making SQL queries in a object oriented way.

This tutorials covers *[pg](https://www.npmjs.com/package/pg)* a popular
node module which allows you to make queries to database through the
conection created with that module.

## Conect to a local pg database from your server

We have set up a basic server for interacting with postgres database
using the *pg* module. You can clone it
[here](https://github.com/FAC8/pg-node-demo).

```bash
$ git clone ...

$ npm install # this will install the dependencies of our test project
```

```bash
$ heroku create
```

Now, you should got to heroku and log in in to the website and find the
application you have just created. Go to the resources tab, and search
for *postgres* and choose **Heroku Postgres**.

```bash
$ heroku pg:psql # this will log you into the postgresql
```

Now, the terminal is showing a postgres prompt, there we can create
the question table used in our project. Also we can insert some questions.
Next lines are an example of how we can do it.

```
CREATE TABLE questions (question text, answer text, key text);

INSERT INTO questions (question, answer, key) VALUES ('Favourite cheese?', 'Cheddar', 'key1');

INSERT INTO questions (question, answer, key) VALUES ('Do you like Cheddar?', 'No', 'key1');

INSERT INTO questions (question, answer, key) VALUES ('Favourite planet?', 'Jupiter', 'key1');

INSERT INTO questions (question, answer, key) VALUES ('Favourite carpenter?', 'Jesus', 'key1');
```

After populate that table we can exit from that prompt with `\q`.

Once we have populated our table we can run our project with:

```
$ git push heroku
```
