#Http requests

This readme covers basic summary of what http requests are and ho

##HTTP Basics

HTTP is the foundation of the modern web. It stands for Hypertext Transfer Protocol and allows for communication between a variety of hosts and clients.

##HTTP Requests

When the you type in a webpage URL in the browser and hit Enter, the browser makes an HTTP GET request. Here is an example of what that looks like:

![console log](http-request-imgs/console-log.png =600x)

Let's take a look at some of the main elements.

**GET:** specifies is the verb used to retrieve documents, images or other internet resources

**home?pageId=c5789534:** the webpage being requested, everything after the question mark are parameters, which come in key value pairs

The rest of the lines are HTTP headers, which do things like: tell the webserver what website to retrieve, based on the domain (Host:); report the user-agent and acceptable encoding and language; and other browser-specific options.

###Urls
A url is a Uniform Resource Locator. In the example above, the page request is /home (from the current page's url). Everything after the question mark are key value pairs.

Urls follow the following format:

![url format](http-request-imgs/url-structure.png =600x)


###Verbs
As mentioned above, the most commonly used verb is GET, but some others are:

- POST: create a new resource. POST requests usually carry a payload that specifies the data for the new resource.
- PUT: update an existing resource. The payload may contain the updated data for the resource.
- DELETE: delete an existing resource.

##HTTP Responses

Let's take a look at the HTTP Response:

![url format](http-request-imgs/console-log-response.png =600x)

###Status codes

The first line is that Status, which follow the format:

- 1XX: Informational
- 2XX: Success
- 3XX: Redirection
- 4XX: Client Error
- 5XX: Server Error

The most important are: 200: OK (i.e. a successful response), 404: Not Found (i.e. resource is invalid), 500: Internal Sever Error.

###Body
Next, the body of the response contains the data we requested, which is generally HTML, CSS, Javascript, or binary data like an image or PDF.

##Tools 
There are a number of tools available to monitor HTTP communication. The most popular among web developers is the Network tab in Chrome/Webkit inspector.	

![Chrome Network Inspector](http-request-imgs/chrome-network-inspector.png =600x)

###references
- [HTTP for beginners argument](http://learn.onemonth.com/understanding-http-basics)
- [In depth article about http requests](http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177)
- [Very intense w3 http article](https://www.w3.org/Protocols/rfc2616/rfc2616.html)