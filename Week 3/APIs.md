# APIs

## What is an API?

If a UI (user interface) allows a user to interact with a program, an API (application
programming interface) is the interface through which two programs may interact with
one another. It is provided by any program that allows interaction with other programs.

It can be understood as a contract or agreement provided by one piece of computer
software to another, stating: "if you give me this instruction, I will perform this action,
or return this information."

Through APIs your program may access and use the functionality defined in other programs,
or create, retrieve, edit and delete resources in other programs. It makes a program's data
digestible for another program.

### Request-Response Cycle

Compared to human standards, computers communicate via extremely rigid and specific
rules. These are called "protocols."

A program can make a "request" to another program, and if the request follows the protocols
defined by the API of the receiving program then it can fulfil the request and respond,
fulfilling the requested action. This completes the request-response cycle,
until another request is made.

![](http://image.slidesharecdn.com/rg-introductiontohtmlcssandjavascript-150206101801-conversion-gate01/95/rails-girls-introduction-to-html-css-11-638.jpg?cb=1423239531)

### HTTP API

When used in the context of web development, an API is typically defined as a set of Hypertext Transfer Protocol (HTTP) request messages, along with a definition of the structure of response messages, which is usually in an Extensible Markup Language (XML) or JavaScript Object Notation (JSON) format.

They are typically used to send commands to programs running on the servers that you connect to from
your browser or with the browser itself. This allows you to access resources only available on the server.

When one site pulls in data from the other, the site providing the data is acting as the server, and the site fetching the data is acting as the client.

![](https://zapier.cachefly.net/static/CpTucd/images/learn/apis/communicating-with-server.jpg)

### REST API

In progress.

## What are API keys and how can you keep them secret / conceal them (without a backend)?



Can be used as login to access an API and can also be used to track an API's usage.

Can be used in the request content to verify the origin and prevent tampering with the requested values

You can restrict access to content and content editing capabilities based on the key used in the request.

Also means user doesn't have to use their password.

Public & private key pairs can be used for two things:
The holder of a public key can use it to identify whether a message orginated from someone with a paired private key.
OR
The holder of a private key can decrypt messages from people with a public key.

Since you will be working on projects on github, including your API key in your code will make it available to anyone. You man
not want to do this.

You can mark a config file as ignored so that it is not included in source control.

You can put your key in a configuration file which is read by your code at startup - this configuration file will have to be
recreated in order to copy your request and the copier will not be able to see you API key.

```
<appSettings>      
    <add key="name" value="someValue" />
    <add key="name" value="someSECRETValue" />
</appSettings>

We don't want secrets in there! Instead, move them out like this:

<appSettings file="Web.SECRETS.config">      
    <add key="name" value="someValue" />
</appSettings>
```

You then include another <appSettings> section in the Web.SECRETS.config file.

An application programming interface key (API key) is a code passed in by computer programs calling an API (application programming interface) to identify the calling program, its developer, or its user to the Web site. API keys are used to track and control how the API is being used, for example to prevent malicious use or abuse of the API (as defined perhaps by terms of service).

The API key often acts as both a unique identifier and a secret token for authentication, and will generally have a set of access rights on the API associated with it.

API keys can be based on the UUID system to ensure they will be unique to each user.

### Resources

* [An introduction to APIs by Brian Cooksey](https://zapier.com/learn/apis/chapter-1-introduction-to-apis/)
