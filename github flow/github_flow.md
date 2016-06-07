# GitHub Flow

_This readme expects you to be familliar with some basic consepts like pushing and branching so we will not go to those in depth but if you don't know about them you can get to know them [here](http://codingforeveryone.foundersandcoders.org/programmer-skills/git-basics.html)_

## Making a repo

First thing you want to do is click this green button to create a new repository.

![alal](create1.png?raw=true =500x200)

At this point you want to add a member of your team to your repo and give them your preferred premissions. You can do this by clicking the ``Settings`` tab.

![alal](create2.png?raw=true =500x400)

Once you're on the ``Settings`` tab, you want to go to the collaborators and add each person by their full name or GitHub username.

####Until people you have invited have accepted the invitation, they can only view your repo.

For regular repository you don't have to give people permission to push and pull. If you are creating an organization repository remember to give everyone you want contributing the correct access.

![alal](create3.png?raw=true =200x200)

If upon creation you didn't choose to make a ``README`` on your repository you need to initialise it by _pushing something to it_.

## How to contribute to a repo

This following image shows a good way to approach contibuting to a repository.

![alal](http://image.slidesharecdn.com/introductiontogithubslideshare-150913080822-lva1-app6892/95/introduction-to-github-slideshare-7-638.jpg?cb=1442131732
=500x400)

Fist step afer cloning the repo is to create your own branch.

``git branch branch name``

After creating your branch make sure you postition yourself on the new branch.

``git checkout branch name``
 
After you're happy with your changes you can:
 
``git add .`` (If you want to add all the files in the current working folder)

``git commit -m "your message"``

``git push origin your branch name``

Remember to push to to your own branch not the master. You will create a pull request to merge your changes into the master. If all is good, GitHub tells you it's able to merge. After your pull request is created all your team will be notified. __Don't merge your own pull request!__

![alal](create5.png?raw=true =500x400)

## Merge conflicts

![alal](create6.png?raw=true =500x200)

One of the problems you may enconter with your team is a merge conflict. One way this can happen is when two people are modifying the same content in the same file. One way to avoid this to assign different tasks and files to different people. __Only one person should work on one file__.

If you still __AFTER ALL THIS__ have a merge conflict, here is what to do;

1. Pull from master 
2. From the branch you're working on ``git merge master``
3. Open the file in your preferred editor and you will see the line causing the merge conflict highlighted. You will see two versions of the line, one is your local one and one you is pulled from the master. 
![alal](create7.png?raw=true =500x200)
4.Decide which line you want to keep delete the rest of the conflicting lines after that save the file and make a new pull request.

##Afterthoughts
Don't panic. Take your time. Delegate seperate tasks to people. Don't mess with team members files (unless they ask you to).












