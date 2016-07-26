const test = require('tape');
const Joi = require('joi');

// function User contructor WITHOUT validation
const UserWithoutValidation = function(obj) {
  this.username = obj.username;
  this.email = obj.email;
  this.password = obj.password;
};

test('creating a object WITHOUT validation', t => {
  var actualUser = new UserWithoutValidation({
    username: 'Gabriel',
    password: '',
    email: 'I\'m not gonna give you'
  });

  t.equal(typeof actualUser, 'object', 'We have the object created');
  t.ok(actualUser instanceof UserWithoutValidation, 'It is a instance of User')<
  t.equal(actualUser.password, '',
   'But it doesn\'t have a password... and we shouldn\'t allow that'
  );
  t.equal(actualUser.email.includes('@'), false,
    'Also the email is not a valid email, it doesn\'t have \'@\' !!'
  );
  t.end();
});

// now we are going to add validation to our User constructor
const UserWithValidation = function(obj){
  // Below lines will validate `obj` with the schema that we are
  // passing as a second parameter of `Joi.validate`
  Joi.validate(obj, {
    // Username should be a alphanumeric string with minimun length
    // of 3 and maximun length of 30, and it is a required field
    username: Joi.string().alphanum().min(3).max(30).required(),
    // Password only can have `a-zA-Z0-9` characteres, and
    // with minimun of 8 characters and maximun of 30, also it is
    // required
    password: Joi.string().regex(/^[a-zA-Z0-9]{8,30}$/).required(),
    // Email should be a valid email
    email: Joi.string().email()
  }, (err) => {
    if (err) throw err;
    this.username = obj.username;
    this.email = obj.email;
    this.password = obj.password;
  });
};

test('Creating a User object without password using validation', t => {
  var actual = {
    username: 'Gabriel'
  };

  t.throws(
    function(){
      new UserWithValidation(actual);
    },
    'Now it raises an error if you try to create an object that doesn\'t pass the validation'
  );
  t.end();
});

test('Creating a User object without a valid email using validation', t => {
  var actual = {
    username: 'Gabriel',
    password: 'fac8rocks',
    email: 'I\'m not gonna tell you'
  };

  t.throws(
    function(){
      new UserWithValidation(actual);
    },
    'Now it raises an error if you try to create an object that doesn\'t pass the email validation'
  );
  t.end();
});

test('Creating a valid User object using validation', t => {
  var actual = new UserWithValidation({
    username: 'Gabriel',
    password: 'fac8rocks',
    email: 'hello@foundersandcoders.com'
  });

  t.equal(typeof actual, 'object', 'We have created the user');
  t.equal(actual.username, 'Gabriel', 'The username is what we were expecting');
  t.equal(actual.email, 'hello@foundersandcoders.com', 'The email also is the expected one');
  t.end();
});
