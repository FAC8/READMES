#Github Issues

The 'Issues' tab of a GitHub repository is where bugs or suggestions for improvement can be flagged and discussed.

##How to raise an issue

- Select the issues tab:

	![Select the issues tab](./.images-github-issues/1.png)

- Click New Issue:

	![2.png](./.images-github-issues/2.png)

- Enter a title and description of the issue

	![3.png](./.images-github-issues/3.png)

- Add *milestones*, *labels* or *assignees* to the issue and click submit!

##Milestones, Labels and Assignees

Milestones, labels and assignees help to categorize issues so that they can be easily found. They are selected using the tabs on the right hand side of the screen, before you submit the issue (click the cog).

![4.png](./.images-github-issues/4.png)

###Milestones

Milestones are used to designate a project, feature, or time period. Examples of possible milestones include:

- Beta Launch — File bugs that you need to fix before you can launch the beta of your project.
- October Sprint — File issues that you’d like to work on in October.
- Redesign — File issues related to redesigning your project.

###Labels

Labels allows you to organise the type of issue in whatever way you wish. Issues can have as many labels as you want. Examples of possible labels include:

- bug
- improvement
- help me!
- css

###Assignees

The assignee is the person you wish to be responsible for moving the issue forward.

###Adding new labels or milestones

If the milestone or label you wish to use does not yet exist, add it using the buttons on the main issue page

![5.png](./.images-github-issues/5.png)

## @Mentions and #References
###@Mentions
If you mention another GitHub user in your description, precedeing their GitHub username with '@', that user will receive a notification to look at the issue. It is conventional to use /cc syntax to include users in issues:

>/cc @gabrielperales @g-sam

If a team has been created within your GitHub organization, you can also reference the entire team. For example, if you wish to mention the team called 'A-team' in the GitHub Organization 'foundersandcoders', you can add:

>/cc @foundersandcoders/A-team

###\#References

Every issue or pull request receves a unique reference number by default. You can link to another issue by simply referencing this number, preceded by #.

>Hi @gabrielperales, check out #199

To refer to an issue in another repository, include the repository name:

>check out foundersandcoders/READMEs#199

You can also reference issues within commit messages. By prefacing the reference with "fixes", "fixed", "fix", "closes", "closed" or "close", that issue will be automatically closed.

##Searching issues

##Advanced Features

### GitHub issue templates
Projects maintainers can add templates for issues to their projects. To add an issue template to a repository create a file called `ISSUE_TEMPLATE.md` in the root directory of your repository.

If you're worried about the added clutter in the root directory you can create a new directory `.github` in the root of your project and add your template files there.

Whatever you write in the template file will appear automatically in the description box of new issues, as in the example below:


![6.png](./.images-github-issues/6.png)

This template apppears as:

![7.png](./.images-github-issues/7.png)


