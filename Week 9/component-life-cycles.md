# React Component Life Cycles

All React components have a series of life-cycle stages that they go through.
The life-cycle stages have a set of in-built methods which automatically fire in order.

The four stages are:

* Initizaliation - This happens once, on the initial page load (mounting).
* Stage changes - This happens every time state is updated.
* Props changes - This happens every time new props are passed to the component from the mother. 
* Unmounting - This happens once, when the component unmounts.

These in-built methods allow you carry out actions pre- and post- rendering.
The method that renders the component must be a pure function which only outputs JSX and cannot affect state.
So for example if you would like to make a database call every time the component updates, this would be carried out inside the componentDidUpdate method.

## Resources

http://busypeoples.github.io/post/react-component-lifecycle/
http://www.tutorialspoint.com/reactjs/reactjs_component_life_cycle.htm

## Video

To talk you through the different life-cycle stages and some of the major methods you will come across, we have prepared a short video on the topic.

https://www.youtube.com/watch?v=Se23sZV-3Ec
