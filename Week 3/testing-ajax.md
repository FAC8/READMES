# Testing AJAX requests with Jasmine

##Introduction

There are (at least) two approaches to testing AJAX requests. In the first, we make a real call to the server and wait for this call to be received before running the test using something like `done()`. In this case, we are testing everything involved in the request, including the network connection and the remote server. In the second approach, we test only our own code. That is the approach we explore here.

We need to make sure our AJAX request does the following:

- makes the request with the correct URL
- executes the correct function when the response is received
- executes the correct function if an error is received

Again, none of these criteria concern the reliability of the remote server. Since the content of what is returned is not dependent on our code, we do not test for it. We check only that our code is executed properly (the url is correct) and handles different eventualities (success, error) in the manner that we wish.

##Testing that the URL is correct

Let's make a function that will make our AJAX request and then test that function.

```
function requester(url){

	xhr = new XMLHttpRequest()
	xhr.onreadystatechange = function(){
		if(xhr.readyState ===4 && xhr.status===200){
			//do something with the response
		}
	}
	xhr.open('GET', url, true)
	xhr.send()
}
```

Note that our function will take `url` as a parameter. `url` will then be used to make the AJAX request. Now we want to test whether our function does in fact use the correct url to make the request. To do so, we will use Jasmine's `spyOn()`.

```
describe('our requester function', function(){

	it('requests with the correct url', function(){
		spyOn(XMLHttpRequest.prototype, 'open').and.callThrough()
		var url = 'url to test with'
		requester(url)
		expect(XMLHttpRequest.prototype.open.calls.mostRecent().args[1]).toEqual(url)
	})
})
```

What have we just done?

- `spyOn()` takes as parameters an object and a method of that object. It modifies the method so that it can be 'spied on'. In practice, that means the method is augmented with several methods of its own which allow us to find out how many times it has been called, with what arguments, etc.  Specifically, we pass in the `open` method of the `XMLHttpRequest` constructor prototype. Now any objects created using that constructor will be 'spied on'.
- We call our function.
- Then we check the status of our spied on function by calling `.calls.mostRecent().args`. This returns an array of the arguments used the last time the function was called. Recall that open takes three parameters. The url is the second, so we check that the second element of the array (`args[1]`) equals the url that we passed to our function

IMPORTANT NOTE: when we passed in `open` to be spied on, we added the method `.and.callThrough()` to the `spyOn` function. The test will not work without this and we are still trying to understand why. The basic idea is probably something like the following:

- when we call `open` of our spied on object, we do not actually open the http request, since `open` is now a mock function created by the `spyOn` function. Therefore, when we try to call `send` we get an error telling us that the request has not been opened. To quote one readme, "Default spy behaviour is to record the call with its context/arguments and stop there. Spies will not call through to the spied function by default."
- `and.callThrough()` ensures that when the spied on function is called, the call is also passed through to the real `XMLHttpRequest` object so that we can later call `send`.
- An alternative solution is to not call `send` after opening the request. This solution is clearly worse because it requires us to modify our code in an adhoc way for a specific test.

##Testing that we execute the correct function when the response is received

This gets a bit trickier. The only way we have found to do this is to override the XMLHttpRequest constructor prototype like this:

```
  it('should receive a successful response', function() {
	  oldOpen = XMLHttpRequest.prototype.open;
	  XMLHttpRequest.prototype.open = function(type, url, async){
		  this.readyState = 4;
          this.status = 200;
		  this.onreadystatechange()
		  this.send = function(){}
	  }
    var callbacks = {
      onSuccess: jasmine.createSpy('onSuccess'),
      onError: jasmine.createSpy('onError')
    };
    var url = 'ProductData.json';
    requester(url, callbacks);
    expect(callbacks.onSuccess).toHaveBeenCalled();
	XMLHttpRequest.prototype.open = oldOpen;
  });
```

Now (in theory), when we call `xhr.open` within `requester`, we set the `readyState` to 4, the `status` to 200, and call `onreadystatechange`, executing our callback. Note the first and last lines, which save and restore the original prototype. Also, note that `requester` must now be rewritten to accept a second parameter, `callbacks` which will contain the callbacks that we wish to execute for different eventualities.

>At the moment, this does not work. You can verify through the console that the `onSuccess` spy function is executed, but for some reason, Jasmine does not record this fact. For example, set `callbacks.onSuccess` to `console.log('worked')` and you will see that the function executed.

##Testing that the correct function is executed if an error is thrown

The principles for testing an error would be similar:

```
  it('should receive a successful response', function() {
	  oldOpen = XMLHttpRequest.prototype.open;
	  XMLHttpRequest.prototype.open = function(type, url, async){
		  this.readyState = 4;
          this.status = 404;
		  this.onreadystatechange()
		  this.send = function(){}
	  }
    var callbacks = {
      onSuccess: jasmine.createSpy('onSuccess'),
      onError: jasmine.createSpy('onError')
    };
    var url = 'ProductData.json';
    requester(url, callbacks);
    expect(callbacks.onSuccess).toHaveBeenCalled();
	XMLHttpRequest.prototype.open = oldOpen;
  });
```

All we have done is set the status to 404 instead of 200, so we can take a different route inside the `onreadystatechange` event handler.

##Testing the remote server

What if we really want to test the behaviour of the remote server? Then we can issue a real request and wait for the result with `done()`.

```
function requester(){
	//we make an XMLHttp request here and store the result
}
```

TBD

## Note

There is a library `jasmine-ajax` that simplifies mocking ajax requests with Jasmine.
