# Templating with Hapi

## What is a template?
Templating is a way of injecting variable data into fixed-format re-usable html files – templates.

Some examples of templating libraries are AngularJS, Backbone.js, Ember.js, Handlebars.js, Vue.js and Mustache.js. Mustache and Handlebars seem to be the favourite choices to start with. Both these libraries derive their name from way in which variable data is inserted into the template, with double or triple curly brackets:

```html
<html>
  <body> 
    <h1>{{title}}</h1>
    <div>{{info}}</div>
  </body>
</html>
```

## Stages of rendering a template

To render a template we need three things: 

1. The html, as in the example above
2. Some data to render into the template (often called *context*). For example:

```javascript
data = {
  title: 'A template!',
  info: 'Nothing much to say'
};
```

3. A Javascript function applying the data to the template. In the case of Hapi, this will be `reply.view()` in the handler, which is passed the name of the template file and the data object:

```javascript
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply)
      {
        reply.view('my-template', data);
      }
});
```

## Templates upon templates!

Often a website has different levels of variability within it. Some basic features like a navbar or about section may be present on every page. Some parts of the site may have their own consistent style. To cope with these levels we use a special template called a layout. A layout is a template that can have other templates rendered inside it.

### The default layout

A basic project using templates should have at least an `index.html` and a `default.html` layout organised in the following directory structure:
```
views/
    layout/
        default.html
    index.html
server.js
```
The default layout is used for every view. That is, templates in the `view` folder will displayed *inside* the default layout. These templates will be inserted wherever we position a special tag called `content`. Here is an example `default.html`.

```html
<html>
<body>
    <div>
    	{{! This is a comment. Every view gets inserted below }}
        {{{content}}}
    </div>
</body>
</html>
```
Note how we insert a comment with a `!`. Also note that we are using triple curly brackets here because we want to insert valid html (rendered from another template). With double curly brackets rendered data is automatically URI encoded.

So now if define a template called `index.html` as follows:

```html
    <h1>{{title}}</h1>
    <div>{{info}}</div>
```

And render it with `reply.view('index', data)` (remember, the first argument of this method is just the template name without its `.html` extension, the final rendered html will be:

```html
<html>
<body>
    <div>
    	<h1>A template!</h1>
        <div>Nothing much to say!</div>
    </div>
</body>
</html>
```

## Set up templating in Hapi

To use templates with Hapi we first need to `npm install` and register the `vision` plugin.

```javascript
server.register(require('vision'), (err) => {
	//server routes in here
}
```
Then, for Hapi to render the templates correctly, it needs to know various things: 

1. The template engine to use
2. The location of the template files to be passed to `server.view`

If we wish to use a layout we also need
3. An option to specify that we are using layouts 
4. The location of layouts
5. The name of the default layout

After connecting to the server, just call the `views` method and pass it a configuration object with this information:

```javascript
server.views({
    engines: {
        html: require('handlebars')
    },
    relativeTo: __dirname,		  //base path
    path: './views',			  //location of templates relative to relativeTo path
    layout: true,				  //enables layouts
    layoutPath: './views/layout', //location of layouts relative to relativeTo path.
    layout: './default',		  //location of defaul layout relative to layoutPath
});
```

Note that if we wish to use a layout other than `default.html` as the default layout, we can just specify its name as the value of the `layout` property instead of `true`. We may also wish to have more than one layout, so that certain views have another layout. If so, we tell hapi which views should have which layouts as follows:

```javascript
reply.view('myview', null, { layout: 'another_layout' });
```

