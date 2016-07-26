## Hapi Scopes

Not all OAuth access tokens are created equally! When you make an API request with a token, typically with a header property known as ```Authorization``` given in the form:

```javascript
Authorization: `token ${your-token-here}`
```

Your access token can contain information on which endpoints you have 'scope' to access. A good example of this is [Github's](https://developer.github.com/v3/oauth/#scopes) API, which will deny access to tokens which have the wrong scope authorization for the endpoint they are trying to access.

It is easy to set up your own scope-based authorisation with Hapi. We do this by setting up the config object for a route with an auth object, and providing this object with a scope property. (You may recognise this set-up from the [readme](https://github.com/FAC8/READMES/blob/master/Week%207/authentication.md) which covered setting up authentication strategies for specific endpoints).

For example if we wish to deny access to tokens which do not have an admin scope, we could do so by setting up our endpoint as below:

```javascript
server.route({
    method: 'GET',
    path: '/something/adminy',
    config: {
        handler: function (request, reply) {
            return reply('Hello there, admin.');
        },
        auth: {
            scope: 'admin'
        }
    }
})
```
In this particular example, the scope field tells Hapi to check the authorisation of that particular token to see if they should have access to things in the admin endpoint.

Each endpoint may be within multiple scopes for example the following endpoint would be accessible to tokens with either the admin or jedi scopes:

```javascript
auth: {
    scope: ['admin','jedi']
}
```

![you-shall-not-pass](you-shall-not-pass.jpg)

## Resources

[Harnessing Hapi Scopes](https://blog.andyet.com/2015/06/16/harnessing-hapi-scopes/)

[Good Medium Article on Authorization](https://medium.com/@poeticninja/authentication-and-authorization-with-hapi-5529b5ecc8ec#.jy29hab03)

## Lolipop questions

True or false!
* All API requests have a scope parameter
* Scope can only be added to your hapi server with the scope plug-in
