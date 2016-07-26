## Hapi Scopes

API access tokens do not necessarily provide you with full access. Scopes limit access for OAuth tokens. They do not grant any additional permission beyond that which the user already has.

Tokens are typically provided in a header property known as ```Authorization``` given in the form:

```javascript
Authorization: `token ${your-token-here}`
```

Your access token contains information on which endpoints you have 'scope' to access.

It is easy to set up your own scope-based authorisation with Hapi which limits users' access to certain endpoints on your server in a way which is similar to authorisation we have already seen.

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
In this particular example, the scope field tells Hapi to check the authorisation of that particular user to see if they should have access to things in the admin endpoint.

```javascript
{
  "username": "yoda",
  "scope": ["admin", "jedi"]
}
```
This user will be authorised to receive the "Hello there, admin". If the user's credential object lacked the "admin" scope, Hapi would automatically reply with a 403 status code, and that user could not see the admin page.
