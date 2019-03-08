1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
* Component state is stored within an individual components state object and is only accessible by that component, unless the component passes the state to other components as props. Application state is state that is relevant to the whole application and is generally stored separate to the application. In the case of React application state is passed to components that need it using higher order components and React's context API. 
* Component level state should be used for changes that our only applicable to a particular component for example a switch that changes the colour of a component.
* Application level state should be used for state that is relevant for the whole application for example blog posts that may need to be updated or displayed in a wide variety of components
1.  What is middleware?
* Software that runs in between a request an a response. Examples include: 
    - in express middleware may parse a request before it is returned as a response
    - custom redux middleware could check to see if a user is logged in before updating state
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
* It allows us to call the dispatch method directly allowing asynchronous operations to be performed. It changes action creators so that they return a function instead of an object.
1.  Which `react-redux` method links up our `components` with our `redux store`?
* The provider passes the store to components using React's context API.
* The connect method is higher order component that links a relevant component with the store and relevant action creators.
