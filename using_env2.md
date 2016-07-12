#Using env2

##What?
env2 is an npm module that allows teams to safely and securely share sensitive enviroment variables such as API keys, login credentials and Data Base passwords.

##Why?
when sharing a project on github with other members of your team, you do not want to make all private information such as keys to everyone and env2 is a platform which helps you do this quickly and efficiently. 

##How?

env2 requires a use of a .env file in your projects which is used to store your private info. Make sure that you put your .env file into a gitignore file so that when you push your project into github it will not be tracked.

the env2 is a npm module which will be part of the dev dependencies modules that you will install when starting to work on the project. env2 enable you to access variables defined in the .env file. it is not writte in json specifically to avoid syntax mistakes and typos- it is written in a much more simple way which you can easily copy and paste into your files as well as send through to other collegues.

you will need to require the module at the top of your script as well as export it from the .env file.



example for .end file(make sure no spaces at all in the variable name (key) and value):

```
export DB_PORT=4000

export API_PASSWORD=LMFAMkanfaklsfmm
```

example require at the top of the file:

```
const env2 = require('env2')('.env');
```

example definition of variable using reference to .env file:

```
const port = process.env.DB_PORT;
```
