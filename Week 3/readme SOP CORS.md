#API Standards



##Same origin policy
</br>

The Same Origin policy allows one window to access properties/functions of another one only if they come from same protocol, same port, same domain.

To illustrate, the following table gives an overview of typical outcomes for checks against the URL "http://www.founderandcoders.com/dir/page.html".

Compared URL | Outcome | Reason
------------ | ------------- | ------------
http://**www.founderandcoders.com**/dir/page2.html | Success  | Same protocol, host and port
http://**www.founderandcoders.com**/dir2/other.html | Success  | Same protocol, host and port
http://username:password@**www.founderandcoders.com**/dir2/other.html| Success  | Same protocol, host and port
http://www.founderandcoders.com:**81**/dir/other.html | Failure  | 	Same protocol and host but different port
**https**://www.founderandcoders.com/dir/other.html	 | Failure  | Different protocol
http://**en.founderandcoders.com**/dir/other.html | Failure  | Different host
http://**founderandcoders.com**/dir/other.html	 | Failure  | Different host (exact match required)
http://**v2.www.founderandcoders.com**/dir/other.html | Failure  | Different host (exact match required)
http://www.founderandcoders.com:**80**/dir/other.html	 | Depends  | Port explicit. Depends on implementation in browser.


Broadly, one origin is permitted to send information to another origin, but one origin is not permitted to receive information from another origin. The prohibition on receiving information is intended to prevent malicious web sites from reading confidential information from other web sites, but also prevents web content from legitimately reading information offered by other web sites.

###Summary

The Same Origin policy allows one window to access properties/functions of another one only if they come from same protocol, same port, same domain.

The exceptions are:

* Window location is not gettable, but settable</br>
* Third level domains may use document.</br>
* domain to change their domains to common second-level domain, and then they can access  each other without limitations.</br>
* IE doesn’t include port into same origin requirements.</br>
* Also it provides trusted zones.</br>
* Cross-window messaging.</br>


Prohibiting cross-site sending of information would prohibit cross-site hyperlinks. Without "allow sending," there would be no "web" at all because each origin would be allowed to link only to itself.

So this is where CORS comes into the picture:

</br></br>
##CORS or Cross Origin Resource Sharing
</br>

CORS, which stands for Cross-Origin Resource Sharing, is an HTML5 feature that allows one site to access another site’s resources despite being under different domain names. Prior to CORS, a web browser security restriction, known as the Same-Origin Policy, would prevent my web application from calling an external API.

The use-case for CORS is simple. Imagine the site foundersandcoders.com has some data that the site twitter.com wants to access. This type of request traditionally wouldn’t be allowed under the browser’s same origin policy. However, by supporting CORS requests, foundersandcoders.com can add a few special response headers that allows twitter.com to access the data.

CORS is supported in the following browsers: </br>
Chrome 3+</br>
Firefox 3.5+ </br>
Opera 12+</br>
Safari 4+</br>
Internet Explorer 8+</br>

With CORS, my web app on one domain can freely communicate with your API on another domain, even using the methods POST, PUT, and DELETE, provided that your API’s security restrictions specify that this is allowed and that you have established the communication through the CORS specification as well. 

This communication is achieved through the use of headers.</br>
All CORS related headers are prefixed with **“Access-Control-"**:</br></br>
**Access-Control-Allow-Origin** (required) :This header must be included in all valid CORS responses; </br></br>
Use * to allow requests from any origin meaning that if you’d like any site to be able to access your data, using * is fine.

Here is an example of a CORS request:

	
	PUT /cors HTTP/1.1
	Origin: http://api.bob.com
	Host: api.alice.com
	X-Custom-Header: value
	Accept-Language: en-US
	Connection: keep-alive
	User-Agent: Mozilla/5.0...
	
Here is an example of the response:

	Access-Control-Allow-Origin: http://api.bob.com
	Content-Type: text/html; charset=utf-8


If the server wants to deny the CORS request, it can just return a generic response (like HTTP 200), without any CORS header. 


for more indepth information about Same Origin Policy and CORS, check out:

SOP </br>
* <https://www.w3.org/Security/wiki/Same_Origin_Policy> </br>
* <https://en.wikipedia.org/wiki/Same-origin_policy></br></br>

CORS</br>
* <https://www.adobe.com/devnet/archive/html5/articles/understanding-cross-origin-resource-sharing-cors.html></br>
* <http://www.html5rocks.com/en/tutorials/cors/#toc-cross-domain-from-chrome-extensions></br>
* <http://enable-cors.org/>
</br>







