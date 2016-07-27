##Security


# JSON Web Tokens

## Overview

JWTs are a way to transmit secure information between parties as a JSON object. The encrypted information can be signed to facilitate verification.
They can be used by your server as a means of stateless authorisation. 
The payload of the JWT can contain a large amout of information.
The signature is calculated using the header and payload so it is possible to check whether the message has been tampered with.
They can be encrypted using either using HMAC and a secret, or RSA and a public/private key pair.

They are comprised of three parts, seperated by periods:
- Header
- Payload
- Signature

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
```
where
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
```
is the Header,
```
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9
```
is the Payload and,
```
TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
```
is the Signature.

The Header and payload may look hashed/encrypted but in fact they are just objects which have been stringified and encoded in base64.

The header typically contains the type of token and the hashing algorithm that is being used.

```
{
  'typ': 'JWT',
  'alg': 'HS256'
}
```

The payload contains claims ('key: value' pairs), which can contain recommended but not mandatory information like expiration time and issuer as well as custom information like authorization level, username etc.

The signature is created using the key, payload and secret/public-private key pair and cryptographic hashing algorithm. If you want to know how it actually works look [here](https://en.wikipedia.org/wiki/Hash-based_message_authentication_code).

## The only things you really need to understand are as follows:
1. You don't need to store the JWT anywhere (NO MORE REDIS COOKIES!).
2. You can check whether the token is valid as long as you have the secret that was used to create it.
3. You can check whether the message was tampered with since the payload and headers are used to create the signature.
4. You can store whatever information you want in the payload (expiration date, access rights, encrypted api token/password)
5. You must store the JWT in the browser's local storage. The user should then send the token to the server in the request header under Authorization:
```
Authorization: Bearer <token>
```

[Here](https://jwt.io/introduction/) is a simple walkthrough of generation and use of webtokens.

[Here](https://egghead.io/lessons/misc-creating-jwts-json-web-tokens-in-node) is a 5 minute video on eggheads that takes you through the craetion of a webtoken using the node library crypto.

## Questions
1. Name one difference between web tokens and cookies
2. What are the three parts that comprise a web token?
