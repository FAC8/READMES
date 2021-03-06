# Authentication with hapi.js

This tutorial covers [hapi-auth-basic](https://github.com/hapijs/hapi-auth-basic), a plug-in for hapi for to carry out [basic access authentication](https://en.wikipedia.org/wiki/Basic_access_authentication) a standard way of authenticating using a username: password combination in HTTP transactions.

Authentication is checking to see if a client is who they say they are, as opposed to Authorization which is about their permissions and what they should have access to. Authentication can be carried out with hapi.js using a few different plug-ins:

* [hapi-auth-cookie](https://github.com/hapijs/hapi-auth-cookie), an authentication plug-in which uses cookie-based session management to authenticate. It should be noted that each cookie operates as a bearer token and anyone in possession of the cookie content can use it to impersonate its true owner.

* [hapi-auth-jwt2](https://www.npmjs.com/package/hapi-auth-jwt2), an authentication plug-in which uses JSON web tokens containing a private key which is decoded and validated by the server. This is the same type of authentication used by many APIs which require a private key and the module itself was created by DWYL.

* [bell](https://www.npmjs.com/package/bell), an authentication plug-in to authenticate using third party apps. Requires setting up a clientID and Client Secret with that app before use.

To show you hapi-auth-basic in action we have created a repo which uses the plug-in to validate users. You can clone it [here](https://github.com/FAC8/hapi-basic-auth-demo).

## Lolipop questions
* What is authentication?
* What is authorization?
* Name 3 Hapi.js plug-ins that deal with authentication.
* What is the name of the object passed to `server.route()`? (You can find the answer to this in the example code in the repo we have linked to!)
