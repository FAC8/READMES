## Web storage
#### a.k.a client side storage

This short readme will introduce you to the (very) basic concepts of web storage. Read the info but also do look at the examples of code in this repo: https://github.com/FAC8/clientstorage-demo


| cookies | local storage | session storage | IndexedDB
------------ |------------ | ------------- | ------------
persistance | cross-session | cross-session  | cross-session | cross-session
data type | strings | strings | strings | JavaScript objects
data size allowed | small(4k) | small(10 MB) | small(10 MB) | Bigger but varies from one browser to another  


### Cookies
An HTTP cookie is a small piece of data sent from a website and stored in the web browser. Cookies were designed to be a reliable mechanism for websites to remember stateful information.
Cookies are included with every request - which means (1) you shouldn't store too much data as this could slow down your requests and (2) you should be aware that all data in the cookie will be transmitted unencrypted with every request (unless your entire site is served using SSL).
Cookies are limited to 4k, which limits how useful they can be.

### Local storage

So what is local Storage? Simply put, it’s a way for web pages to store named key/value pairs locally, within the client web browser. Like cookies, this data persists even after you navigate away from the web site, close your browser tab, exit your browser, or what have you. Unlike cookies, this data is never transmitted to the remote web server (unless you go out of your way to send it manually). Unlike all previous attempts at providing persistent local storage, it is implemented natively in web browsers, so it is available even when third-party browser plugins are not.

#### cookies vs. Local storage vs. Session storage
local Storage and session Storage are relatively new APIs (meaning not all legacy browsers will support them) and are near identical (both in APIs and capabilities) with the sole exception of persistence. sessionStorage (as the name suggests) is only available for the duration of the browser session (and is deleted when the window is closed) - it does however survive page reloads.

### IndexedDB
An IndexedDB is basically a persistent data store in the browser database on the client side. Like regular relational databases, it maintains indexes over the records it stores and developers use the IndexedDB JavaScript API to locate records by key or by looking up an index.
It is a technology that solves an important piece of the application puzzle—managing storage and retrieval of user-specific data on the client side.
Unlike cookies and DOM Storage, IndexedDB provides features that enable you to group, iterate, search, and filter JavaScript objects.
Object stores are the IndexedDB equivalent of “tables” from the relational database world. All data is stored inside object stores and serves as the primary unit of storage.
A database can contain multiple object stores and each store is a collection of records.  Each record is a simple key/value pair.
in term of persistence it's cross-session, meaning restarting browser or system won't affect what is stored in it. However, user can clear it like clearing cookie. So it's just like persistent cookie, you don't trust it from the server-side, and you always need to check its integrity.


#### cookies and local storage vs. IndexedDB
On the surface the two technologies may seem directly comparable, however if you spend some time with them you'll soon realize they are not. They were designed to achieve a similar goal, client side storage, but they approach the task at hand from significantly different perspectives and work best with different amounts of data.

localStorage, or more accurately DOM Storage, was designed for smaller amounts of data. It's essentially a strings only key - value storage, with a simplistic synchronous API.

indexedDB, on the other hand, was designed to work with significantly larger amounts of data. First, in theory, it provides both a synchronous and an asynchronous API. In practice, however, all current implementations are asynchronous, and requests will not block the user interface from loading. Additionally, indexedDB, as the name reveals, provides indexes. You can run rudimentary queries on your database and fetch records by looking up theirs keys in specific key ranges. indexedDB also supports transactions, and provides simple types (e.g. Date).


### resources
cookies with hapi: http://hapijs.com/tutorials/cookies

nice youtube tutorial about cookies from Udacity:
https://www.youtube.com/watch?v=xdH9zsW1CK0

dive into html5 section about storage:
http://diveintohtml5.info/storage.html

more about web storage:
https://html.spec.whatwg.org/multipage/webstorage.html#the-sessionstorage-attribute

Up close and personal with HTML5 IndexedDB:
https://msdn.microsoft.com/en-us/hh563494.aspx

IndexDB tutorial:
https://msdn.microsoft.com/en-us/library/jj154908.aspx

### Loli questions:
1. Which form of storage is sent with every request?
2. What is the key difference between session and local storage?
3. What is the main difference between local session storage and IndexedDB?
