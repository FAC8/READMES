# React Router

React Router is a complete routing library for React for keeping your UI in sync with the URL. It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling built right in. Make the URL your first thought, not an after-thought.

If - for example - you had a calendar app, by default it would display the current date and the week around it. The default url could be "www.calendar.com". If we were to change this and do "www.calendar.com/week7", it only displays data from Feb. without having to go through multiple routes, and paths. The advantage of Routing means that you do not need to load data that is not needed.

The Router component's job is to deal with all of the routing-related logic our app will need. Inside this component, we specify what is known as the routing configuration. The specifics of that are handled by another component called **Route**:

```javascript
ReactDOM.render(
  <ReactRouter.Router>
    <ReactRouter.Route path="/" component={App}>
 
    </ReactRouter.Route>
  </ReactRouter.Router>,
  destination
); 
```

The Route component takes several props that help define what to display at what URL. The path prop specifies the URL we are interested in matching. In this case, it is the root aka /. The component prop allows you to specify the name of the component you wish to display. For this example, it is our App component. Putting this all together, what this Route says is as follows: If the URL you are on contains the root, go ahead and display the App component. Because this condition is true when you preview your app, you see the result of what happens when your App component renders.

### Setting up the basics

As React Router isn't a part of React itself, we need to install React-router in your terminal:

```npm install react-router --save```


### Useful Links

https://github.com/reactjs/react-router-tutorial

https://www.themarketingtechnologist.co/react-router-an-introduction/

http://ricostacruz.com/cheatsheets/react-router.html

https://medium.com/@dabit3/beginner-s-guide-to-react-router-53094349669#.fcqhhgmdd

https://egghead.io/courses/getting-started-with-react-router
