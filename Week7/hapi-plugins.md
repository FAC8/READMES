## Hapi plugins

Plugins are a way to efficiently modularize your code and add features to your code. Some plugins are more commonly used than others, such as 'inert' and 'vision'.

You can also write your own plugins in order to organize your code by feature.

We found that the documentation to hapi plugins is extremely good so we gathered here a few really good links. Check out our example right below where we will show you an example of inserting a plugin into your server.

### Here is an example of a plugin being used and registered

```javascript
const Vision = require('vision');

server.register(Vision, (err) => {
  if (err) throw err;

  server.route({
    path: '/',
    method: 'GET',
    handler: (request, reply) => {
      const handlebarsInfo = {
        homeVar: 'some content from handlebars',
        items: [1, 2, 3],
        partialsInfo: { info: 'hey hey' }
      };
      reply.view('home', handlebarsInfo);
    }
  });
});
    server.views({
      engines: { html: Handlebars },
      relativeTo: __dirname,
      path: './views',
      layout: 'default',
      layoutPath: './views/layout',
      partialsPath: './views/partials',
      helpersPath: './views/helpers'

});
```

Useful links:

* [Hapi plugin tutorial](http://hapijs.com/tutorials/plugins)
* [Example of a simple hapi server](https://github.com/SimonLab/simpleServer)
* [Another useful resource](https://medium.com/@dstevensio/manifests-plugins-and-schemas-organizing-your-hapi-application-68cf316730ef#.jhky6c27l)
* [Hapi plugins](http://hapijs.com/plugins)




Questions:

1) What are plugins?

2) Give example of two commonly used plugins?

3) How do you make sure that your plugin is included in your server file?
