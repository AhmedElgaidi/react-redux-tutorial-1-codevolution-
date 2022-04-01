# React (UI library) and Redux
- To use redux: install redux react-redux
## Why Redux?
- A predictable state container for javascript apps.
1) It's for all javascript apps (not just react apps, also angular, vue, etc...).
2) State container (store/ mange the state of your application(Note: not the component, it's global)) and that's good especially with medium-large apps as we have multiple states and manging them would be hard 
example: 
state = {
    isUserLoggedIn: true,
    userName: 'Ahmed',
    profileUrl: '',
    onlineUsers: [],
    age: 23
   }
3) Predictable in what way? (our states changes by time and that's noraml, in Redux the changes in the states are explicit and it's possible to keep track of them(predictable)).

## State in react:
- We use prop drilling and the better choice is to use context api, but that is not predictable and hard to maintain especially if the tree component is big and has many nesting components, here Redux function appears!!

## State in react and redux together:
- Your state is contained outside/ wrapp your main component, so once you change a state in any secondary component in the tree, you actually changing it in the global state in a pretictable way and these changes are listened in all connected components.

Note: Adding Redux to our application is hard and complex, so we have react-redux library to do that for us (bind react with redux).

## Three core concepts of how redux work:
1) Store: holds the state of your application
2) Action: describe what happens (dispatch)
3) Reducer: tie store and actions together (state, action) as we saw in react trainings

### Store:
- One store for the entir application.
- Responsibilites:
    - Holds application state.
    - Allows acces to state via getState().
    - Allows state to be updated via dispatch(action).
    - Register listeners via subscribe(listener) // listener function runs if state changes.
    - Unsubscribe to the store by calling the function returned by the subscribe method.

### Actions:
- The only way your application can interact with the store.
- Carry some info from your code (app) to the redux store.
- It's a plain js object.
- Have the 'type' property to describe the type action being performed.
- This type property is a string.

### Reducers:
- Specify how the app's state changes in response to actions sent to the store.
- A function that accepts (state, action) arguments, and return the next state of the application
- (prevState, action) => newState

## Redux middlewares:
- Midlewares: are just custom functions that extend the redux functionality.
- Provide a third party extension between (dispatching action, the moment it reaches the reducers).
- We can create middlwares for loggin, crash reporting, performing async tasks

## Sync actions:
- As soon as an action was dispatched, the state was immediately updated
(If you dispatch the BUY_CAKE, the numOfCakes was right away decremented by 1).

## Async actions:
- Async API calls to fetch data from an endpoint and use that data in your application.
- We need two packages:
    - axios: Send requests to the endpoints.
    - redux-thunk: 
        - It's a middleware that would be applied to our store.
        - Define async actions creators.


// These are the concepts in Redux, we just need to utilize it in our react app, that's it.

Note: There is no fixed folder arcitecture for  mangaging states in redux (do whatever suits your app needs)