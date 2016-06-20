# JSON Objects

## What is a JSON object?
JSON is short for **J**ava**S**cript **O**bject **N**otation and is a way to store information in an organised, easy-to-access manner. JSON is broken down in to two elements - the key, and the value. JSON objects are arranged in arrays, which contain all the important data.

## Format of a JSON object
Let's say we own a café, and we want customers to be able to submit their orders online. We need to write out our menu in a way our server can understand. Let's start by writing out the sandwiches section. We can write out a Ploughman's sandwich in JSON object notation:

```
{
	"name": "Ploughmans",
	"bread": "white",
	"fillings": ["cheese", "pickle"],
	"price": "2.49"
}

```
The words on the left are keys. These tell you what attributes the sandwich has: its' bread, its' fillings and its' price. On the right are values, which contain the actual details about the sandwich: it's made of white bread, filled with cheese and pickle, and it costs £2.49.

But a menu with only one item on it isn't very useful. How would we write out our entire sandwich menu in JSON? We would declare a variable, and nest all our data within it:

```
var sandwiches = {

	"ploughmans": {
		"name": "Ploughmans",
		"bread": "white",
		"fillings": ["cheese", "pickle"],
		"price": "2.49"
	},
	"cream-cheese-and-cucumber-on-rye": {
		"name": "Cream cheese and Cucumber on Rye",
		"bread": "rye",
		"fillings": ["cream cheese", "cucumber"],
		"price": "3.49"
	}
}
```

What if we wanted to add paninis to our menu? That's just a case of declaring another variable:

```
var sandwiches = {

	"ploughmans": {
		"name": "Ploughmans",
		"bread": "white",
		"fillings": ["cheese", "pickle"],
		"price": "2.49"
	},
	"cream-cheese-and-cucumber-on-rye": {
		"name": "Cream cheese and Cucumber on Rye",
		"bread": "rye",
		"fillings": ["cream cheese", "cucumber"],
		"price": "3.49"
	}
}

var panini = {

	"mozzarella-and-tomato": {
		"name": "Mozzarella and Tomato",
		"bread": "baguette",
		"fillings": ["mozzerella", tomato]",
		"price": "3.99"
	}
}
```

## How to access JSON objects
The best way to access the data in JSON objects is by simply refering to the name of the property we need. For instance, inputing:

```
document.write("I would like a " + sandwiches.ploughmans.name)
document.write("That will be £" + sandwiches.ploughmans.price)
```

Would output:

```
I would like a Ploughmans

That will be £2.49
```

## How does a JSON object differ from an object in JavaScript?

JSON objects look very similar to JavaScript objects. However, while JSON's syntax was inspired by the JavaScript Object Literal Notation, there are two key differences:

* In JSON, all keys have to be in quotes. This isn't the case for object literals in JavaScript:

	**JSON:**

	```{ "name"": "ploughmans" } ```

	__JavaScript Object:__

	```var ploughmansSandwich = {name: "ploughman"};```
* An object literal in JavaScript can have any valid JavaScript expression as a value, including functions. However, values in JSON limited to:
	* A string
	* A number
	* A JSON object
	* An array
	* ```true```
	* ```false```
	* ```null```

# XML

## What is an XML object?

We could also organise our data as XML (E**x**tensible **M**arkup **L**anguage). It's best to understand both XML and JSON, because both are used in APIs. XML is just another way to store data. It's structured in a similar way to HTML. If HTML displays data in a human-readable format (i.e. a website), however, XML stores the structure of that data in a machine-readable way.

Here's what our sandwich menu would look like written out as an XML string:

```
<menu>
	<sandwich category = "sandwich">
		<name>Ploughmans</name>
		<bread>White</bread>
		<filling>Cheese, Pickle</filling>
		<price>2.99</price>
	</sandwich>

	<sandwich category = "sandwich">		
		<name>Cream cheese and Cucumber on Rye</name>
		<bread>Rye</bread>
		<filling>Cream cheese, Cucumber</filling>
		<price>3.49</price>
	</sandwich>

	<sandwich category = "panini">
		<name>Mozzarella and Tomato</name>
		<bread>Baguette</bread>
		<filling>Mozarella, Tomato, Pesto</filling>
		<price>£3.99</price>
	</sandwich>
</menu>
```

## How does XML differ from JSON?


Rather than keys and values, XML is based around nodes:

* An XML string always starts with a root node – in our example, the root node is ```<menu>```.
* Within our root node is its child elements, the three ```<sandwich>``` element nodes. These each have the attribute ``"category"``.
* Each of these element nodes have further child element nodes: ``` <name> ```, ``` <bread> ```,``` <filling> ``` and ``` <price> ```.
* It's important to remember that the *content* of a node is stored seperately, in a text node: in the example ``` <bread>Baguette</bread> ```, the element node ```<bread>``` stores a text node with the value ``` "Baguette" ```.


## XML or JSON?

XML is a very well-established language, having been around since 1996. It can hold any data type, in an easy-to-read format. However, XML has largely given way to JSON in recent years. The biggest reason for this is that it's more efficient. In JSON, data is already represented in a JavaScript object and notation is less verbose than in XML, meaning there's less to transfer and less processing time required.

Often, however, you won't have a choice over whether to use XML or JSON – the API you're working with will only support one (most likely JSON in newer APIs). Some APIs like [Imgur](https://api.imgur.com/do)'s and [BreweryDB](http://www.brewerydb.com/developers/docs)'s, though, do support both.
