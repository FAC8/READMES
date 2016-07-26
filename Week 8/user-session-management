# Sessions

A web session is a sequence of network HTTP request and response transactions associated to the same user. Modern and complex web applications require the retaining of information or status about each user for the duration of multiple requests. Therefore, sessions provide the ability to establish variables – such as access rights and localization settings – which will apply to each and every interaction a user has with the web application for the duration of the session.

## Create and Store Session

In order to create a session we need to store the information about the user associated with a key provided by the server that enables us to identify the user as authenticated. We can store this information using a cookie or a json web token. For example to setup a server in hapi using cookies we do;

```javascript
server.auth.strategy('session', 'cookie', {
   password: uuid.v4(), // cookie secret
   cookie: 'cms', // Cookie name
   ttl: 24 * 60 * 60 * 1000, // Set session to 1 day
   isSecure: false,
 });
 ```
To create the session we do in our login handler:

```javascript
request.cookieAuth.set({ username });
```

## Verify and Invalidate

When a user makes a request to a route requiring authentication we need to verify that the user has an authenticated session. Hapi-cookie-auth makes this very easy. In our path configuration object add:

```javascript
config: {
    auth: 'session',
    handler(request, reply) {
        //authenticated in here
    },
```

We simply specify the strategy defined earlier, namely `session`. Without a valid session a user will not be able to visit the path. This includes when the cookie or web token has time expired. If we wish to render a session invalid (for example if a user logs out), we can call:

```javascript
request.cookieAuth.clear();
```

Sometimes we want to allow access to a path and check at a later stage, in the handler, whether or not a session exists. In this case we can do:

```javascript
config: {
    auth: {
      mode: 'try',
      strategy: 'session',
    },
    handler(request, reply) {
      if (request.auth.isAuthenticated) {
          //authenticated in here
      };
    },
  },
```

## Questions

1) What is a web session?

2) How would you configure a server that would store sessions in cookies?

3) How do you render a session invalid?

4) What does the mode property of the auth object do?
