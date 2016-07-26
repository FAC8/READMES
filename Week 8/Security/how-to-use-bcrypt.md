#How to use bcrypt

bcrypt allows you to easily salt, hash and check passwords.


##1 - Installation
bcrypt comes as a node module, so will have to be installed in your repository:

```
npm install --save bcrypt
```
and then required:

```
var bcrypt = require('bcrypt');
```

##2 - Salting and Hashing

First, you need to set a variable that will tell bcrypt how many rounds of salting you want it to conduct:

```
const saltRounds = 10;

```
You'll also need a variable which will contain the user's password, which they'll have submitted in plaintext:

```
const userPassword = "password";

```

You then need to create an asynchronous function, ```bcrypt.hash```, which will take the two variables and an anonymous function as parameters. Within this anonymous function, you will need to send the hashed password to your database.


```
bcrypt.hash(userPassword, saltRounds, function(err, hash) {
  // Send the hash to be stored in your password database
});

```

And that's it!

##3 - Checking a Password

When a user comes back to log in again, you'll have to check they've entered the correct password. We can compare the just entered password (``loginPassword``) with the password stored in the database (``hash``) with:

```
// Load the hash from your password database

bcrypt.compare(loginPassword, hash, function(err, res) {

});
```
If the passwords match, ``res`` will equal ``true``. If they differ, ``res`` will equal ``false``. That means you can handle the result in a simple if/else statement:

```
bcrypt.compare(loginPassword, hash, function(err, res) {
	if (res == true) {
		// Allow user access to their account
	} else {
		// Return user to login page
	}
});
```
