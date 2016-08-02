# State and Props

## Stateless functional components

Non functional components do not have to have state. The components below do no have a constructor that initializes a state property. 

```javascript

const Repos = React.createClass({
  render(){
    return (
      <div>
        <h3> User Repos </h3>
        <ul className="list-group">
          {this.props.repos.map((repo, index) => {
            return (
              <li className="list-group-item" key={repo.name}>
                <h4><a href={repo.html_url}>{repo.name}</a></h4>
                <p>{repo.description}</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
})

class Repos extends React.Component {
  render(){
    return (
      <div>
        <h3> User Repos </h3>
        <ul className="list-group">
          {this.props.repos.map((repo, index) => {
            return (
              <li className="list-group-item" key={repo.name}>
                <h4><a href={repo.html_url}>{repo.name}</a></h4>
                <p>{repo.description}</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

```

The functional equivalent of the above is this:

```javascript

const Repos = ({repos}) => {
  return (
    <div>
      <h3> User Repos </h3>
      <ul className="list-group">
        {repos.map((repo, index) => {
          return (
            <li className="list-group-item" key={repo.name}>
              <h4><a href={repo.html_url}>{repo.name}</a></h4>
              <p>{repo.description}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

```

As you can see, basically the only difference is that the properties of the component is fed in as a parameter. The function is exported the same way a class would be with 
```javascript
export default Repos
```
Either strategy you choose avoids problems with state, but using functional component means you don't have to use classes either (and THIS!!!).

Stateless functional components also enforce best practices. You have to think about the structure of you code and store your state outside of the components themselves. So you can't hack in some state to an individual component when you can't be bothered to do it properly or generalizably. This does however make it more time consuming and complicated to set up.

They're easier to read. If we have a function that just takes a bunch of props, perhaps in an object, and spits out some HTML, then we can easily interpret what's happenong without even necessrily having to read the function itself

### Testing

Of course testing functions is MUCH easier than testing classes and class methods.

Check out [this](https://egghead.io/lessons/react-building-stateless-function-components-new-in-react-0-14) for a tutorial on how to build stateless functional components in react.

Which of the following is from a functional component?

```javascript
onClick={this.sayHi.bind(this)}>Say Hi</a>
onClick={sayHi}>Say Hi</a>  
```
