# Manipulating the DOM

## Intro

The Document Object Model (DOM) is the model that describes how all elements in an HTML page, like input fields, images, paragraphs etc., are related to the document itself. By calling the element by its proper DOM name, we can influence it.

The DOM creates a hierarcy corresponding to the structure of each web document. This hierarchy is made up of nodes. There are several different types of DOM nodes, the most important are 'Element', 'Text' and 'Document'.

When you create a web page and load it in a web browser, the DOM comes to life. It takes the document that you have written and turns it into an object.The DOM represents the web page that’s currently loaded in the browser window. The browser provides a sort of map which you can read with Javascript. It is a convention to represent the DOM as a family tree:


![Diagram showing the structure of a web page](manipulating-the-dom-README-diagram.png)  
_The structure of a web page_

## Nodes

The three most important DOM nodes are:

### Element Nodes
An element node represents an element within a page: `<p>`, `<ul>`, `<div>`, etc. The tag provides an elements' name, so `<p>` elements have the name `p`, `<ul>` elements `ul`, and so on. Elements can contain other elements – which makes sense when you think about it. The only element on a HTML document which isn't contained in another is `<html>`; that means `<html>` makes up the root of our node tree.

### Text Nodes
As the name suggests, a text node represents text. If you have some code that reads `<p>This is a text node</p>`, it consists of a text node – `This is a text node` – contained within an element node – the `<p>`. Text nodes are always enclosed within element nodes, but not all elements contain text nodes! Most of the time, for instance, a `<ul>` element will only contain `<li>` elements.

### Attribute Nodes
You use an attribute to give more specific information about an element; `id`, `class`, `title` and `src` are all attributes. Like text nodes, an attribute node is always contained within an element.

So in the code block:

`<p id="attribute">
	Element and Text and Attribute Nodes – oh my!
</p>`

* `<p></p>` is an **element node**
* `Element and Text and Attribute Nodes – oh my!` is a **text node**
* `id="attribute"` is an **attribute node**



## Getting elements
Each element in a document is an object. Using the DOM, you can “get” at all of these elements.
There are three DOM methods which will allow you to access elements nodes.  

1. by ID
2. by tag name
3. by class name

It is important to write it preserving the JS camelcase style.

### getElementById
'getelementById' is a function which takes one agrgument and it allows you to get straight to the element node with a specific id. **getElementById** is a function associated with the document object:

  `document.getElementById(id)`

  example: `document.getElementById("menu")`

It will reference a unique id element within the HTML.
Since you should'nt give a unique Id to more then one element in your documen, there is another method which will get multiple elements which are not unique.

### getElementsByTagName

Similarly to getElementById, it is a function which will take one argument. Notice that the **getElementsByTagName** is in plural - meaning that it will get all the occurances of a specific tag. It is an array which contains all the items specific to the tag (for example all the - "ul" items).

`element.getElementsByTagName(tag)`

example: `element.getElementsByTagName("ul")`

Since it is an array, you can use methods such `.length` to check the length:

`document.getElementsByTagName("ul").length`

If you want to write less code then simply assign it to a variable:

`var items = element.getElementsByTagName("ul")`

##### getElementById + getElementsByTagName

It is possible to combine these two methods if you wanted for example to get the 'ul' elemens within a specific 'Id' element:

`var menu = document.getElementById("menu")`

`var items = menu.getElementsByTagName("ul")`

Now the array contains all the ul items.

### getElementsByClassName

This method allows you to target elements by their class names and it takes one argument:

`getElementsByClassName(class)`

example: `document.getElementsByClassName("paintings")`

Similarly to getElementsByTagName, it creates an array of all the elements of with a common class.

It is also possible to include multiple class names by simply separating the class names with a space (the order of the class nemaes doesnt matter):

`alert(document.getElementsByClassName("paintings largePics")`;

##### getElementById + getElementsByClassName
similarly to getElementsByTagName, you can combine it with getElementById in order to target all the class elements within a specific Id element.







## Further Reading
* You can [find a series of interactive tutorials which take you through manipulating the DOM here](https://dom-tutorials.appspot.com/static/index.html)
* Tuts+ cover the DOM [in their introduction to Javascript](http://code.tutsplus.com/tutorials/javascript-and-the-dom-series-lesson-1--net-3134)
* MDN also have a fairly [comprehensive introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
