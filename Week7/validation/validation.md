#Validation

##What is validation?

Validation is the process that ensures all data handled by your application is correct. To validate a piece of datum, you check if it satisfies certain criteria. You would use validation, for instance, to make sure a new user's password contained a certain number of characters, or that they had submitted a valid email address.

Hapi's validation module can check the input and output of headers, paths parameters, query parameters, and payload data.

##Why is it important?

Validation is critical for ensuring your application's __security__ and __stability__, as it allows you a greater degree of control over data input and output.

Validating payload data is particularly crucial, given that it consists of user submitted data. Validation ensures that payload data fits within given parameters (e.g. length, type), and allows you to strip out unwanted content (e.g. script tags) through regex.

## Hapi

Hapi has a built-in module for performing validation called `joi`.

To bring joi into your life you can use the following command to install it in your
package json file:

`npm install --save joi`

Joi works by allowing you to create schemas or blueprints, using Javascript
Object literal notation, of how you want key information in your scripts to be validated.

A joi schema's usage is a two step process. Firstly construct a schema using the types and
constraints you need, and then validate the values you need to validate against
the schema. Simples!

## Constructing a schema

To create a joi schema first of all require in the joi module:

`const Joi = require('joi');`

Then you can use the following syntax to define a schema:

```javascript
const schema = Joi.object().keys({  // i.e. a Joi validation object with the following keys
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
  access_token: [Joi.string(), Joi.number()],
  birthyear: Joi.number().integer().min(1900).max(2013),
  email: Joi.string().email()
}).with('username', 'birthyear').without('password', 'access_token');
```

In this example the property names 'username', 'password', etc, are arbitrary and refer
to existing values in your script you need to validate (that could have been sent in the body of
the request in JSON format, as an example).

1. username:
* `Joi.string().alphanum()`: the username input must be a string
or alphanumeric character.
* `min(3).max(30)`: must be minimum 3 characters, maximum 30 characters.
* `required()`: a required field.

2. password:
* `Joi.string()`: must be a string.
* `regex(/^[a-zA-Z0-9]{3,30}$/`: must pass the regex expression. In this example: alphanumeric characters, minimum 3 characters, maximum 30 characters.
3. access_token:
* `[Joi.string(), Joi.number()]`: must be an unconstrained string or a number.
4. birthyear:
* `Joi.number().integer()`: must be a number and must be an integer.
* `min(1900).max(2013)`: must be a minimum value of 1900 and maximum of 2013.
5. email:
* `Joi.string().email()`: must be a valid email address string.
6. `with('username', 'birthyear')`:
* The with syntax means that both arguments ('username' and 'birthyear') should be provided.
7. `without('password', 'access_token')`:
* The without syntax means that only one of the two arguments should be provided.

For a full documentation of available joi validation syntax please refer to this [API reference](https://github.com/hapijs/joi/blob/v9.0.1/API.md).

## Validation

To validate a value against your constructed schema you can then use the following joi syntax:

```
const schema = Joi.object().keys({
    input: Joi.string()
});

Joi.validate({ input: 'hapi hapi joi joi' }, schema, function (err, value) { });
```

The first argument to validate is the input/output you want to validate, the second argument is
the schema to validate it against, and the third is a callback that will be performed after the validation.
If the value is valid `null` will be returned, otherwise an error object will be returned.

## Example

For a full practical example of validation with joi please see our script [here](https://github.com/FAC8/READMES/blob/master/Week7/validation/validation-example-joi/index.js).

## Resources

* [Joi documentation](https://github.com/hapijs/joi)
* [Hapi Validation documentation](http://hapijs.com/tutorials/validation)
* [API Reference](https://github.com/hapijs/joi/blob/v9.0.1/API.md)

##Lollipop Questions

* Name two forms of data joi can validate.
* What are the two steps required to use a joi schema?
* Give an example of validation for the both the front and back end of an application.
