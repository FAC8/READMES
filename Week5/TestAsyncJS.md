#  Testing JavaScript async requests

Testing JavaScript async calls using Jasmine!

Testing synchronous specs in Jasmine is easy, asynchronous testing requires more work!

For example, the below code would fail the test described, because Jasmine evaluates expect() before the testAsync() function has finished (that is, the testAsync() function has  not actually finished when the test is run, but our spec as written does not register this fact):

```javascript
//code under test
var flag = false;

function testAsync() {
  //wait one second then set flag to true
  setTimeout(function() {
    flag = true;
  }, 1000);
}

//Specs

describe('Testing async calls', function(){
  it('should be true if the async call has completed', function (){
    expect(flag).toEqual(true);
  });
});
```

With Jasmine async testing, we need to place the async code in a beforeEach() function that runs before each it() function block within a describe() function block.

To ensure the async code has completed, we also need to use a special done() callback function that Jasmine provides.

Here, we are passing this special done() callback into the beforeEach() function so our test ensures that the testAsync() function is finished before Jasmine moves onto the it() function block.

```javascript
//code under test
var flag = false;

var testAsync = function(cb) {
  //wait one second then set flag to true
  setTimeout(function() {
    flag = true;
    if(cb) {
      return cb();
    }
  }, 1000);
};

//Specs

describe('Testing async calls', function(){

  beforeEach(function(done) {
    testAsync(function() {
      done();
  });
});

  it('should be true if the async call has completed', function (){
    expect(flag).toEqual(true);
  });
});
```
Now you know how to test async JavaScript calls in Jasmine!
