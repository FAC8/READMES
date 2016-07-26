# Storing passwords safely FAQ 🔒


I've listed some questions that I had in mind when I first came across this topic. Most of these examples expect you're using bcrypt for your hashing but it will give you a general idea of the whole process. Hope it helps!

### What is hashing? 🔠⃣➡️🔣
To put it simply, hash is just a crypted string. Hash is a one way function of some input. meaning that the same input always gives you the same output. It's practically impossible to reverse it, ie to go from the output to the input. For example the input could your password and the output a crazy string.

Here is an example: 

Let's say your password is _banana_ 🍌

Here is _banana_ after it's been hashed by bcrypt once: 

__$2a$06$ifWcxQXVi9MSP9BQklIPkuw2Ghx4eY6q6AO5UnYy/oySPSlJ.v9S.__

Here is banana after 5 iterations of bcrypt hashing: 

__$2a$05$pFQMvSGIVFqvj84XweHXDuz8Au0Mati5zT0o7f4fBbEiTMOYEV3P6__


To improve security, you can hash the hashses with bcrypt up to 31 times to make it more difficult to just bruteforce an attack. Since bcrypt is just a crypt like we previously mentioned it means for some hashes there are known outputs which people can use to try and crack your passwords. To find out more about this refer to [rainbow tables wikipedia article](https://en.wikipedia.org/wiki/Rainbow_table#Defense_against_rainbow_tables). 

### Is just hashing secure enough? 🙅🏻

As we found out in our previous answer, not really. This is where we introduce __salting__. Salting means adding a unique string into your password before it goes into your database so even if your password was banana and somewhere in a _rainbow table_ there was a known hash for banana, adding the salting data would prevent your database from being compromised. 

Bcrypt impliments salting automatically but for some you need to go and add the salt yourself. In some simple cases salt might be just your password + email ```banana+{silly.billy@badpassword.fi}``` but random data is more secure. 

### So I salted the heck out of my password with random data and now it's in my database, how can I compare it to validate? 🍌➡️🔣❓❓❓❓

After this crazy unique salting data is added to your password, it's cyphered and the hashes are hashed 12 times how can I compare my _banana_ input to the 
__$2a$05$pFQMvSGIVFqvj84XweHXDuz8Au0Mati5zT0o7f4fBbEiTMOYEV3P6__ in the database to validate?

To put it simply; this process is saved by bcrypt so everytime you log in it turns your banana into a the same hash with the same saved process.


### Okay so now my passwords are saved securely. How can I prevent someone catching them between the HTML form and the server? 📝➡️🕵🏻➡️🍌

These [man-in-the-middle](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) attacks are fairly common. It means that someone grabs your connection when you are sending data over unsecure connection. Usually at this point you are most likely still sending banana as a banana or at least something much more easily broken than our hash in the database.

To prevent these types of attacks you need to use a HTTPS connection.

__Note that using a secure connection is still not going to protect you from script injections or SQL attacks!__ 



##Pop Quiz! ✍🏽

1. After hashing, can I get revert the hash back to the original password?
2. How can I prevent someone catching my password between input and the server?
3. Is salting necessary?





