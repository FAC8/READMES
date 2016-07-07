# Folder Structure

If you would like to do the tutorial on this subject, open startHere and look at the disorganised files!  Try and structure the files following the suggestions in this ReadMe.  You have some leeway for personal choice in how you organise the files. When you are done you may look at our answersFolderStructure folder to see how we chose to organise the files.

It is important to structure your files for greater organisation; however, you have a good deal of leeway in how you do so.  There is no absolute standard, but there are some conventions.  We will go over some of those conventions in this ReadMe.


Let’s assume you are building an HTML5 application. You may choose to use the root of your server as the main container. However, for this tutorial we will assume that you are going to contain your application in a folder.

Inside the application folder create your application index file (or main entry point).

Your application will be composed of files specific to your application and general-purpose files (ie, files used across multiple applications), such as libraries, etc.

Start by separating general-purpose files from application-specific resources.

This simple separation makes navigating through your files a lot easier. Place application-specific resources in a folder named 'resources'. Place libraries and general-purpose files inside the their own folder; one convention is to name that folder 'vendors'. The vendors folder will hold libraries, plugins, components, etc. That is to say, it holds, not just libraries, but anything that's provided by a third party.  Third party libraries may have their own folder(s) within the vendors folder.  If you have many libraries you put them into a lib folder.  For example, jQuery could have its own jquery folder, etc.

You should put node_modules in your .gitignore file. There is no valid reason to do otherwise. In .gitignore you will also place config.env.

Generally, your README.md, .travis.yml, .gitignore, index.js will remain at root level.

Chances are that you already group your application files inside folders that correspond to assets such as CSS, Javascript, and images.  These folders will be contained in the resources folder.  You may wish to place public files in a public folder.  You may also have an API folder for the APIspecs, which you may wish to place inside an src folder.

The js folder will contain your javaScript code.  The images folder is the place where you should add images that are used directly from the index.html or any other page in your application. This images folder should not be used to host stylesheet-related files. Your CSS code and related images (like background images) should be located inside the css folder.  This allows you to build pages that can easily use different themes and enables your application to be more portable.


### Tips:

As a general rule make sure that you use lower case letters in all folder and file names. When using multiple words to name a file or a folder separate them with a hyphen (i.e. my-company-logo-small.png).

Special characters such as underscore will force the folder to float to the top of the alphabetically sorted list.

Even if you do not choose to use the structure recommended in this article, it is important to stick to a convention. It will increase your productivity and more important it will make the work that you do easy to understand by others.

### Questions:

Explain how you prefer to create your folder structure and give your reasons why!
