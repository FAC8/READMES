##Chrome debugger and will it work with Node

This tutorial will walk you trough a simple problem using the node version of chrome debugger.

###First you need to install devtool

You can fid some information about it [here](https://www.npmjs.com/package/devtool).

1. ``npm install devtool -g `` you want to install it globally.
2. Once it's installed you can run it by writing ``devtool <the file you want to debug>`` example: in the tutorial you would want to run ``devtool server.js``
3. Now you will be able to debug the file you chose, if that file imports any other files, those will be included too.
4. __You cant have node server and the devtool running at the same time__

###How to use devtool

Now you have devtool running with your backend JavaScript just like you would on your reqular chrome debugger! _Sweet_.

After you run devtool server.js a dev tool window will open. It looks similar to the chrome devtool, but behold, you can see the backend files. At this point set break points as you would normally and refresh the page from the browser to start running through the code. 

Start by setting up some breakpoints, refresh, press play and see what happens. Devtool will show you for example; what variables are after they run (``const url = req.url`` prints out ``url = '\'``), what errors get thrown and all sorts of other useful things that save you from ``console.log``ing every single line of your code just to understand what's going on!


