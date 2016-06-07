# Git

Git is a version control system. It allows a team of people to work together, all using the same files. And it helps the team cope with the confusion that tends to happen when multiple people are editing the same files.

The version control system has the following benefits:

*	You have access to all versions of all files in Git repository at any time, it’s almost impossible to lose any part of a code.

*	Multiple developers can work on one project at the same time without interfering with each other, and without fear of losing any changes made by a colleague. In Git, the possibilities of collaborative work are unlimited.

#### The States of Git

Git has **three** main states that your files can reside in: *committed, modified, and staged*.

**Committed** means that the data is safely stored in your local database. **Modified** means that you have changed the file but have not committed it to your database yet. **Staged** means that you have marked a modified file in its current version to go into your next commit snapshot.

The Git directory is where Git stores the metadata and object database for your project. This is the most important part of Git, and it is what is copied when you clone a repository from another computer.

The working directory is a single checkout of one version of the project. These files are pulled out of the compressed database in the Git directory and placed on disk for you to use or modify.

The staging area is a file, generally contained in your Git directory, that stores information about what will go into your next commit. It’s sometimes referred to as the “index”, but it’s also common to refer to it as the staging area.

The basic Git workflow goes something like this:

* You modify files in your working directory.

* You stage the files, adding snapshots of them to your staging area.

* You do a commit, which takes the files as they are in the staging area and stores that snapshot permanently to your Git directory.

![Git workflow](http://i.stack.imgur.com/eXlL8.png)

# Github

## What is it?

We’ve established that Git is a version control system, similar but better than the many alternatives available. So, what makes GitHub so special? Effectively it is the Hub for git, where developers can store their projects and network with likeminded people.

Let’s go over a few of the main reasons that people like to use GitHub, and learn some terminology along the way.

#### Repository

A repository is a location where all the files for a particular project are stored, usually abbreviated to “repo.” Each project will have its own repo, and can be accessed by a unique URL.



#### Forking a repo

“Forking” is when you create a new project based off of another project that already exists. This is an amazing feature that vastly encourages the further development of programs and other projects. If you find a project on GitHub that you’d like to contribute to, you can fork the repo, make the changes you’d like, and release the revised project as a new repo. If the original repository that you forked to create your new project gets updated, you can easily add those updates to your current fork.

#### Pull requests

You fork a repository, make a great revision to the project, and want it to be recognised by the original developers, maybe even included in the official project/repository. You can do so by creating a pull request, so the authors of the original repository can see your work, and then choose whether or not to accept it into the official project. Whenever you issue a pull request, GitHub provides a perfect medium for you and the project’s maintainer to communicate.

![github](https://github-images.s3.amazonaws.com/enterprise/11.10.340/user/assets/images/help/pull_requests/pull-request-review-page.png)

#### Social networking

The social networking aspect of GitHub is probably its most powerful feature, and is what allows projects to grow more than anything else. Each user on GitHub has their own profile, which can act like a resume of sorts, showing your past work and contributions to other projects via pull requests.

Project revisions are able to be discussed publicly, so a mass of experts can contribute knowledge and collaborate to advance a project forward. Before the advent of GitHub, developers interested in contributing to a project would usually need to find some means of contacting the authors, probably by email, and then have to convince them that their contribution is legit and they can be trusted.

#### Changelogs

When multiple people are collaborating on a project, it’s really hard to keep track of who changed what, and to keep track of the revisions that took place. GitHub takes care of this problem by keeping track of all the changes that have been pushed to the repository.

GitHub isn’t just for developers
All this talk about how GitHub is ideal for programmers may have you believing that they are the only ones who will find it useful. Although it’s a lot less common, GitHub can actually be used for any types of files – so if you have a team that is constantly making changes to a word document, you can actually use GitHub as your version control system.  This practice isn’t common as there are better alternatives, but keep it in mind.

Now that you know what GitHub is all about, are you ready to get started? Head over to GitHub.com and be sure to check out their help pages after signing up.

#### GitHub isn’t just for developers
All this talk about how GitHub is ideal for programmers may have you believing that they are the only ones who will find it useful. Although it’s a lot less common, GitHub can actually be used for any types of files – so if you have a team that is constantly making changes to a word document, you can actually use GitHub as your version control system.  This practice isn’t common as there are better alternatives, but keep it in mind.

# Whats the difference?

Git is a version control system that tracks your changes when working with electronic media, such as software applications. GitHub is a repository for this media. GitHub pros may say that GitHub has much more functionality than that, and while that is true, it is not necessary to utilize that functionality in order to use GitHub with Git.
