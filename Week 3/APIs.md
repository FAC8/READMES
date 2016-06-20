# APIs

## What is an API?

If a UI allows a user to interact with a program, an API is an interface through
which two programs may interact with one another.

It can be understood as a contract or agreement provided by one piece of computer
software to another, stating: "if you give me this instruction, I will perform this action,
or return this information."

### Request-Response Cycle

Compared to human standards, computers communicate via extremely rigid and specific
rules. These are called "protocols."

A program can make a "request" to another program, and if the request follows the protocols
defined by the API of the receiving program then it can fulfill the request and respond,
which completes the request-response cycle.

Two programs can interact without an API



The server (receiving party) has to know exactly how the client (requesting party)
will arrange its messages for them to communicate.

The interaction between the two programs must follow certain rules called protocols, defined by the API of the receiving party.
Requests sent to an API will be interpreted. If the request follow the protocols defined by the API then the recipient can fulfill the request.

Scripts can interact without an API: a script may parse a webpage and return the content

## What are API keys?

An API key is string of letters and digits that can be included in an API request

API keys serve multiple purposes:

- As a login to restrict access to the API.
- To track the usage of the API by a particular party.
- To prevent tampering with the request

### As a login

A server may want to restrict the ability for parties to read or write information. By using an API key, the server
can determine whether to complete the request based on the permissions accorded to the requester.
Not only does this enable the server to identify who is making the request, but if the user has a password protected account,
it saves them from having to send their password to the server. API keys are often much longer than a regular account password.

### To track usage

Requests associated with a particular key can be recorded by the owner of the API. This has many advantages. The owner of the API may want to charge for their services, identify how many seperate accounts are using the API and other analytics. I can also be useful to the API key owner who may want to check whether anyone else has been using their key.

### To prevent tampering with the request

API keys can be used to encrypt the request and so prevent tampering with the message if it is intercepted.

## How can you keep them secret / conceal them (without a backend)?

For the keys to be useful they must only be known to the parties intended. Using source and version control like github to create websites that use an API key can be problematic as you will have to include your API key in any requests you make to the API. Storing the key in the source documents means it is avaiable to everyone. Additionally, anyone who inspects you website will be able to see the key in the .js file or whatever location you store it.

### Keeping the key secret

If you don't have a backend to store restricted information like a key you can use a .config file stored on you local machine. By getting github to ignore this file when updating github you can keep this information from being public. You can then just include script to read the file and get the key without putting it in the public domain. If multiple people are working of the same project they will all have to create an ignored version of this file containing the key on their own machine.

```
<appSettings>      
    <add key="name" value="someValue" />
    <add key="name" value="someSECRETValue" />
</appSettings>
```

We don't want secrets in there! Instead, move them out like this:

```
<appSettings file="Web.SECRETS.config">      
    <add key="name" value="someValue" />
</appSettings>
```

We then include the key in the Web.SECRETS.cofig file which will be accessed when necsessary.

### Messages may be intercepted an the API key stolen.

You can use public and private key pairs to save having to send your key to the API.

Read more about this [Here](https://en.wikipedia.org/wiki/Public-key_cryptography)
