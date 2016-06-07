# Creating a README with markdown basics

## Introduction

This README explains why and how to create a README for a Github project, including a brief tutorial to create a Readme.

## Why create a README

A README should provide an overview of the project. It should pitch its content and level of detail to its intended audience.

It is good practice to write the README before starting a project as this sets a clear scope and set of goals for the project known to everyone involved before any code is written. Tom Preston-Werner, the co-founder of Github, wrote [this article](http://tom.preston-werner.com/2010/08/23/readme-driven-development.html) elaborating on why this approach is so useful.

Whilst there is not one universally adopted structure for a README, it can be helpful to adopt the WHY/WHAT/HOW model.

## How to create your README

Github will look for a file called README.md in the root of a git repository and display it by default. The file should be formatted in Markdown, which allows Github to display your page including advanced formatting, images and links.

## Markdown basics

# \#           H1
## \#\#         H2
### \#\#\#       H3
#### \#\#\#\#     H4
##### \#\#\#\#\#   H5
###### \#\#\#\#\#\# H6

## Basic Text Formatting

\**italics*\*
\*\***bold**\*\*

\*\*\_**_combined_**\_\*\*
 \*\_\_**_combined_**\_\_\*

\~\~~~strike-through~~\~\~

## Lists


```
1. Numbered lists use a number followed by a .
1. It doesn't matter what number you use
6. It will still count up
  - you can create unordered
4. and ordered
  1. sublists
```


1. Numbered lists use a number followed by a .
1. It doesn't matter what number you use
6. It will still count up
  - you can create unordered
4. and ordered
  1. sublists  
5. Use \+, \- or \* for unordered lists.


##  Links

Links are fundmentally created in this format:

```
[Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
```

[Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

You can use reference style links which you can refer to in different parts of the document.

## Images
```
![alt text](https://assets-cdn.github.com/images/modules/open_graph/github-mark.png "Meoww")
```

![alt text](https://assets-cdn.github.com/images/modules/open_graph/github-mark.png "Meoww")

Like the links above, you can replace the URL with a reference which can be defined later.

## Code

```Markdown

You can use ``` at the beginning and end of some code to separate it into a code block.
Entering the name of the language e.g. ```javascript will add code syntax.

```

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

## Tables
You can do lots with table - see [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for a fuller description.

## Github specific
@s can be used for mentions and

# Build a Basic README

The simplest way to create a README is when creating a repository. Underneath the "Private/Public" selection check the "Initialize this repository with a README" box. This will create a README with the title and decription of the repository.

Clone the repo to your local machine and open the README.md file.

Add a few section titles and change the main title if you like.

Under one of the titles add a code block in any language using

\`\`\`javascript

Your code goes here

\`\`\`
