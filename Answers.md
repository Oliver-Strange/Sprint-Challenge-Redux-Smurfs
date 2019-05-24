1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    Three JS array/object methods that do not produce side-effects are: Object.assign, Array.concat, and array.map.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions: The only way to modify the application state. They contain an action type and optional payload.

    Reducers: Calculate the new version of state based on the current state and a given action. They are functions that bind the actions and store. It is a portion of the state it represents.

    The store: Contains the state for the application. It is known as the single source of truth in redux applications because everything references the store for state and it is read only. There can only be new versions of the state.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state can be accessed where it is needed, component state is stored locally in the component and does not share state with other components unless explicitly passed as props to sub components.

4.  What is middleware?

    Middleware are libraries that intercept the flow of data and allow for extra things to be done with the data before being passed on.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux-thunk is a middleware library that allows for thunks, functions that return functions. It will intercept thunks and invoke them, then pass them in a dispatch function as an argument to it. Redux-thunk allows for async functions like api calls.

6.  Which `react-redux` method links up our `components` with our `redux store`?

    The connect method links the components to the redux store.
