# Storing passwords safely FAQ 🔒


I've listed some questions that I had in mind when I first came across this topic. Most of these examples expect you're using bcrypt and SHA-256 for your hashing but it will give you a general idea of the whole process. Hope it helps!

### What is hashing? 🔠⃣➡️🔣
To put it simply, hash is just a enceypted string. Hash is a one way function of some input. meaning that the same input always gives you the same output. It's practically impossible to reverse it, ie to go from the output to the input. For example the input could your password and the output a crazy string.

Here is an example: 

Let's say your password is _banana_ 🍌

Here is banana after hashing it with SHA-256:	

__b493d48364afe44d11c0165cf470a4164d1e2609911ef998be868d46ade3de4e:__ 

Just using this hashing method to store your passwords isn't unfortunately secure enough because some hashes have known outputs which people can use to try and crack your passwords. To find out more about this refer to [rainbow tables wikipedia article](https://en.wikipedia.org/wiki/Rainbow_table#Defense_against_rainbow_tables). 

### Is just hashing secure enough? 🙅🏻

Not really. This is where we introduce __salting__. Salting means adding a string into your password before it gets hashed and goes into your database so even if your password was banana and somewhere in a _rainbow table_ there was a known hash for banana, the password in your database is now your hashed password + salt so the hash won't be in the raibow table.

In some simple cases salt might be just your password + email ```banana+{silly.billy@badpassword.fi}``` but a random looking enviroment variable known by the people accessing the database might be more secure. 

### So I salted the heck out of my password with random data and now it's in my database, how can I compare it to validate? 🍌➡️🔣❓❓❓❓

After all this salting data is added to your password and it's encrypted how can I compare my _banana_ input to the 
__b493d48364afe44d11c0165cf470a4164d1e2609911ef998be868d46ade3de4e:__  in the database to validate?

The simple answer is that every time you log in with your alredy stored username + password, the password gets hashed like it did originally and the two hashed passwords are matched.


### Okay so now my passwords are saved securely. How can I prevent someone catching them between the HTML form and the server? 📝➡️🕵🏻➡️🍌

These [man-in-the-middle](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) attacks are fairly common. It means that someone grabs your connection when you are sending data over unsecure connection. Usually at this point you are most likely still sending banana as a banana or at least something much more easily broken than our hash in the database.

To prevent these types of attacks you need to use a HTTPS connection.

__Note that using a secure connection is still not going to protect you from script injections or SQL attacks!__ 

### How is bcrypt different than traditional hashing algorithm? 🐴🦄
Instead of you having to add the salting yourself, bcrypt does it for you. It also gives you an option of doing up to 31 rounds of hashing over the already hashed + salted password to increase security. This obviously slows down your your user logging in slightly since the algorithm takes longer. 

For a single user the change is not huge but for a hacker trying to bruteforce attack your database the change is massive and might not be worth their while!



##Pop Quiz! ✍🏽

1. After hashing, can I get revert the hash back to the original password?
2. How can I prevent someone catching my password between input and the server?
3. Is salting necessary?





