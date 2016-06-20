## Command Line


The command line is a text interface for your computer. It's a program that takes in commands, which it passes on to the computer's operating system to run.

From the command line, you can navigate through files and folders on your computer, just as you would with Windows Explorer on Windows or Finder on Mac OS. The difference is that the command line is fully text-based.

This readme will cover some of the common commands you will use with the Command Line (Bash) on UNIX-based systems such as MAC OS X and Linux.

### Navigation

A file system organises a computers files and directories (folders) into a tree structure. It starts with the root directory. Each parent directory can then contain more child directories and files.

From Command Line you can navigate through files and folders on your computer.

#### Commands

`$` is called a 'shell prompt.' When it appears the terminal is ready to accept a command you can enter after it. To navigate your computer's file system you can use the following commands:

##### Print working directory

`$ pwd` -- outputs the name of the current 'working directory' (i.e. the 'path' to the folder you're currently in):

```bash
Bradleys-MBP:documents BradleyMac$ pwd
/Users/BradleyMac/documents
```
##### List Directory

`$ ls` -- lists all files and directories in the working directory:

```bash
Bradleys-MBP:documents BradleyMac$ ls
Code	E-books	Images	Nexus
```
Certain commands have 'options' available to them that can be used to modify the behaviour of commands. `ls` has the following options available:

`$ ls -a` -- lists all contents in the working directory, including hidden files and directories (that usually begin with a `.`):

```bash
Bradleys-MBP:documents BradleyMac$ ls -a
.		.DS_Store	Code		Images
..		.localized	E-books		Nexus
```

`$ ls -l` -- lists all contents of a directory in long format as a table, with more information about them:

```bash
Bradleys-MBP:documents BradleyMac$ ls -l
total 0
drwxr-xr-x   11 BradleyMac  staff   374  7 Jun 11:50 Code
drwxrwxrwx    8 BradleyMac  staff   272  5 Jun 16:06 E-books
drwxr-xr-x  120 BradleyMac  staff  4080  5 Jun 16:05 Images
drwxr-xr-x@  14 BradleyMac  staff   476  5 Jun 21:33 Nexus
Bradleys-MBP:documents BradleyMac$
```
`$ ls -t` -- orders the listed files by the time they were last modified:

```bash
Bradleys-MBP:documents BradleyMac$ ls -t
Code	Nexus	E-books	Images
```
Options can be used in combination. For example,`$ ls -alt` will combine all of the above:
```bash
Bradleys-MBP:documents BradleyMac$ ls -alt
total 32
drwxr-xr-x   11 BradleyMac  staff    374  7 Jun 11:50 Code
-rw-r--r--@   1 BradleyMac  staff  14340  6 Jun 21:53 .DS_Store
drwx------+   8 BradleyMac  staff    272  6 Jun 16:49 .
drwxr-xr-x+  27 BradleyMac  staff    918  6 Jun 11:28 ..
drwxr-xr-x@  14 BradleyMac  staff    476  5 Jun 21:33 Nexus
drwxrwxrwx    8 BradleyMac  staff    272  5 Jun 16:06 E-books
drwxr-xr-x  120 BradleyMac  staff   4080  5 Jun 16:05 Images
-rw-------    1 BradleyMac  staff      0 27 Mar  2015 .localized
```

##### Change Directory

`$ cd` -- Switches you into the directory you specify. It takes the file you want to switch to after the command as an 'argument':

```bash
Bradleys-MBP:documents BradleyMac$ cd code
Bradleys-MBP:code BradleyMac$ ls
CSS-library		FAC8day1		The Weird Parts
Codewars		Founders & Coders	chat
Coursera		Miscellaneous
```
You can use the `..` syntax to go back one directory or `../../..`, etc to move back multiple directories:
```bash
Bradleys-MBP:code BradleyMac$ cd ..
Bradleys-MBP:documents BradleyMac$ cd ../..
Bradleys-MBP:Users BradleyMac$ ls
BradleyMac	Guest		Shared
Bradleys-MBP:Users BradleyMac$ pwd
/Users
```
##### Make Directory

`$ mkdir` -- Takes in a directory name as argument and then creates a new directory in the current working directory:

```bash
Bradleys-MBP:documents BradleyMac$ mkdir newdirectory.js
Bradleys-MBP:documents BradleyMac$ ls
Code		E-books		Images		Nexus		newdirectory.js
Bradleys-MBP:documents BradleyMac$
```
Commands can be combined. For example, the following will change directory then create a new folder in the new working directory:

```bash
Bradleys-MBP:documents BradleyMac$ cd code mkdir newdirectory.js
Bradleys-MBP:code BradleyMac$ ls
CSS-library		FAC8day1		The Weird Parts
Codewars		Founders & Coders	chat
Coursera		Miscellaneous
```
##### Making Empty Files

`$ touch` -- Takes a filename as an argument, and then creates an empty file in the current working directory:

```bash
Bradleys-MBP:code BradleyMac$ touch newfile.txt
Bradleys-MBP:code BradleyMac$ ls
CSS-library		FAC8day1		The Weird Parts
Codewars		Founders & Coders	chat
Coursera		Miscellaneous		newfile.txt
```

### Manipulation

Commands to consider adding to this section:

`$ cp`, `$ mv`, `$ rm`, `$ rm -r`, `$ rmdir`, `$ pushd` and `$ popd`.

See resources at the bottom of this readme for more information on them.

### Print History

`$ history` will log the history of your bash commands. Use:

```bash
Redchamp:Documents redchamp$ history
```

### Stream a File

`$ cat` prints the file input to the terminal screen.


1.Type **touch file.txt** to create a file.

2.Add some text to your file and save.

3.Type **file.txt** to print the input of the file to the screen.

```bash
Redchamp:Documents redchamp$ cat file.txt
var x = myFunction(4, 3);        // Function is called, return value will end up in x

function myFunction(a, b) {
    return a * b;                // Function returns the product of a and b
}
```

### Redirection

The `<` (less than) and `>` (greater than) operators are used for redirection. The `>` takes the output of the command on the left and writes it to the file on the right.
We can send the output of one file to the input of another file using this operator.

1.Type **cat testfile.js > anotherfile.js**

```bash
Redchamp:Documents redchamp$ cat testfile.js > anotherfile.js
```
Now **anotherfile.js** contains the content of **testfile.js**

The `<` operator takes the input of the command on the right and send it to the program on the left. In this example we take the input of the file **file.js** and we send it to the command **cat**.

```bash
Redchamp:Documents redchamp$
cat < file.js
```

This prints (cat) the contents of **file.js** to the terminal.

### Grep

`$ grep` stands for global regular expressions. Grep prints the lines which match a specified pattern. If we wanted to search for the literal "else" string inside a file called **text.js** we could run:

```bash
Redchamp:Documents redchamp$ grep "else" testfile.js
```

This would print all the lines inside of **text.js** that contain "else" to the terminal.

### Pipes

`|` takes the output from the command on the left and "pipes" it  to the command on the right. Here we use the "pipe" to print any history commands which contain ".txt".

```bash
Redchamp:Documents redchamp$ history | grep .txt
```

### Things to Learn

Find out what `*` is used for in GREP.

Learn how to extend your grep search to subdirectories and any files they contain. HINT: This is done recursevily.

Find out how `>>` is different from `>`.

### Resources

[The Command Line Crash Course by Zed A. Shaw](http://cli.learncodethehardway.org/book/)

[Learn the Command Line (Codecademy)](https://www.codecademy.com/learn/learn-the-command-line)