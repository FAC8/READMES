# WHAT

The command line is an interface for typing commands directly to your computer and in this case, allowing you to work from repositories on Github and to submit your code also.

# WHY

When working with multiple people on a project, you will find that you are often working on different parts of the code at the same time. It is good practice to work from a copy of the master file, so that you always have something to step back from if any mistakes occur. It also allows for code to be combined without conflicting issues (__hopefully!__).

# HOW

## Cloning:

The first step is to clone the original master files to work from.

To do this you need to open your command line (this may be Terminal or iTerm for example). You need to move into the folder that you wish to work from. You may need to create a new folder.

To create a new folder simply type: _mkdir NameofFolder_

Move inside the folder by typing: _cd NameofFolder_

Next you will need to go back to Github and navigate to the main page of the repository you wish to clone from.
There should be a green button on this page that says "__Clone or Download__". Once you click on this, you can see the link you need to copy for cloning.

Go back to your command line and now type _git clone URL_.

## Branching:

You now need to create a branch to work from for the section of code that you are working on. (This could be HTML, CSS, Javascript etc). This will allow you to step back if you encounter any problems with your code further down the line.

To do this you now go back to your command line and type _git checkout -b NameofBranch_. You can type this without the word checkout, however you will then need to move onto the branch to work from. Checkout simply allows you to create the branch and also move onto it at the same time.

## Staging (Add & Commit):

Next comes the "staging". This is where you can check what files have been modified from the original, add those files and commit them to Github.

First you can check the status of modified files. In your command line type _git status_. This will show you which files have already been added and which ones still need to be added. These will be indicated in red (not added yet) and green (already added).

If there are any files that have yet to be added for a commit to Github, you now need to add these on the command line. To do this simply type _git add NameofFile_. You can also use _git add dot_ (actually type a dot, not the word). This will add everything that has been modified, this may be quicker for some projects, but may not be suitable when you only want to add certain files.

Finally comes the commit. You now need to commit the files to your chosen branch on Github. To do this, type _git commit -m and then a message that describes what changes you made and why_. This needs to be in quote marks. (e.g _git commit -m "Updated javascript variable problem"_). This is good practice as it allows you and your team to see what changes were made and why you have made this commit.

## Pushing to Github:

You now need to push the files to Github. This will usually be to the branch you are working on. This is your way to save each stage as you work on it before moving to the next stage, which again allows you to step back if you need to.

In your command line type _git push origin BranchName_. This will take a bit of time.

## Merging:

If you have finished with your branch and are ready to commit the new files/changes to the original master files, you need to go back to Github.

In the repository for the project, you must now click through the following:

- __Branches__ - this will show you all the branches people are working on from the original repository.
Find the branch you are merging with the master and click "__New pull request__".

- This will open a box that allows you to submit a pull request. In here you will need to give a brief description of changes you have made to the original master copy.

Once you have submitted this, another person from your team will be able to check your request and see the changes you have made to the code.

They can then accept the request, or reject it if they notice any problems with the code that you made.

Once this has been done, your files have been merged with the original and are now part of the master.
