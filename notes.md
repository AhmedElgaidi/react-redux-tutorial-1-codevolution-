# React (UI library) and Redux
* Adding Redux to our application is hard and complex, so we have react-redux library to do that for us (bind react with redux).
* To use redux:
```bash
install redux react-redux
```


## Why Redux?
**A predictable, state container, for javascript apps.**
1) It's for all javascript apps (not just react apps, also angular, vue, etc...).
2) State container (store/ mange the state of your application) and that's good especially with medium-large apps as we have multiple states and manging them would be hard using the context API
3) Predictable in what way? (our states changes by time and that's noraml, in Redux the changes in the states are explicit and it's possible to keep track of them(predictable)).

> **Note (1)** 
Each component may have it's own state that's connected to the store object. So, App state represents all the components state in that app **(store that we put in /redux/app/store.js)**



## Examples:
#### LoginFormComponent:
```js
const state = {
        username: '',
        password: '',
        submittin: false
    }
```
#### UserListComponent:
```js
    const state = {
        users: []
    }
```
#### UserComponent:
```js
const state = {
        isUserLoggedIn: true,
        userName: 'Ahmed',
        profileUrl: '',
        onlineUsers: [],
        age: 23
    }
```

> **Note (2)** 
We said that redux makes our state predictable, right! how does that means? The state of our component can change. In redux all state transitions are explicit and we can keep track of them. 
Such as:
FETCH_USERS_REQEUEST, 
FETCH_USERS_SUCCESS, 
FETCH_USERS_FAILURE

## State in react:
We used prop drilling and the better choice was to use context API, but that is not predictable and hard to maintain especially if the tree component is big and has many nesting components (especially if you are passing props froom left hand branch to right hand branch), here Redux function appears!!

## State in react and redux together:
Your state is contained outside/ wraps your main component, so once you change a state in any secondary component in the tree, you actually changing it in the global state in a pretictable way and these changes are listened in all connected components.
> **Note (3)**
We can't change the state directly, we need to dispatch the changes (that we defined) with our defined ACTIONS that our reducers would takes both as parameters and do their updating in the STORE.


## Three core concepts we need to know to understand how redux works:
1) Store: holds the state of your application
2) Action: describe what happens (dispatch)
3) Reducer: tie store and actions together (state, action) as we saw in react trainings

#### Store:
- One store for the entire application (we can create multiple stores/ states, each for a component and pass them all at the end to store.js).
- **Responsibilites:**
    - Holds application state.
    - Allows state to be updated via dispatch(ACTION).
```js
    Path: redux/app/store.js

    import { createStore, applyMiddleware } from 'redux';
    import  thunk from 'redux-thunk';
    import { composeWithDevTools } from "redux-devtools-extension";
    import logger from 'redux-logger';
    import rootReducer from "./rootReducer";

    const store = createStore(
        rootReducer, 
        composeWithDevTools(// for devlopment extension
            applyMiddleware(logger, thunk)// Used middlewares
        )
    );

    export default store;

```

#### Actions:
- The only way your application can interact with the store.
- Carry some info from your code (Component) to the redux store.
- It's a plain js object.
- Have the 'type' property (must) to describe the type action being performed.
- May have other propeties as payload(object) to pass data.
- This type property is a string.
- Short answer: It describes the changes in the state of component/application
```js
    const  BUY_CAKE = 'BUY_CAKE';// Community standard(In upper case) and it's better to put them in a separate files (cleaner)
    // Action creator (A function that returns an action)
    const buyCakeAction = (number = 1) => {
        return {
            type: BUY_CAKE,
            payload: number// passin data during dispatching an action.
        }
    }

```
#### Reducers:
- Specify how the app's state changes in response to actions sent to the store (Carry out the state modification depending on the action given).
- A function that accepts (state, action) arguments, and return the next state of the application
```js
    // prevState = state of application/ component before making any change to it.
    // newState = state of app/component after updating.
    const reducer = (prevState, action) => {
        return newState;
    }
    // Example
    const initialCakeState = {
        numOfCakes: 0
    };
    const cakeReducer = (state = initiaCakeState, action) => {
        switch(action.type) {// we could use if statments. But switch is cleaner
            // case (1)
            case BUY_CAKE:
                return {
                    // do some updating and return the new updated state
                    ...state,// copy
                    numOfCakes: state.numOfCakes - 1// override this property in the old state (only)
                }
            // Default case
            default:
                return state
        }
    }
```
## Combine multiple reducers:
- As our app grows and gets more complex, we would have more components => more actions => more reducers => more states.
- We can connect all these reducers in a rootReducer.js file and do the follows:
```js
    Path: redux/rootReducer.js

    import { combineReducer } from 'redux';
    import cakeReducer from 'cake/cakeReducer';
    import iceCreamReducer from 'cake/iceCreamReducer';
    import userReducer from 'cake/userReducer';

    const rootReducer = combineReducer({
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer
        ...
    });
    export default rootReducer;

```

## Redux middlewares:
- Midlewares: are just custom functions that extend the redux functionality (makes it diverse and powerful).
- Provide a third party extension between (dispatching action, the moment it reaches the reducers). You could say it act like proxy between (dispatching action, the moment it reaches the reducers)
- We can create middlwares for logging, crash reporting, performing async tasks, etc....

## Actions has two types:
#### Sync actions:
*  As soon as an action was dispatched, the state was immediately updated
* (If you dispatch the BUY_CAKE, the numOfCakes was right away decremented by 1).

#### Async actions:
- Async API calls to fetch data from an endpoint and use that data in your application.
- We need two packages:
    1) axios: Send requests to the endpoints.
    2) redux-thunk: 
        - It's a middleware that would be applied to our store.
        - Define async actions creators (functions that would be dispatched in our components and passed to their reducers).

```js
    // Example
    ### UsersList Component
    // State
    const initialUsersState = {
        isLoading: true, // display a spinner in the componet
        users: [], // list of data returned
        error: '' // Display error to use if found
    }
    // Action types
    FETCH_USERS_REQUEST // fetch list of users
    FETCH_USERS_SUCCESS // fetched successfully
    FETCH_USERS_FAILURE // failing in fetching users list

    // Action creators
    // (1) fetchUsersRequest
    // (2) fetchUsersSuccess
    // (3) fetchUsersFailure
    // (4) fetchUsers
    // Note, we can use async and await and try{}catch(err){} blocks as usual in these action creators with
    // for example
    const fetchUsers = async () => {
    return function (dispatch) {
        // let's dispatch our actions
        // (1)
        dispatch(fetchUsersRequest());
        try {
            const users = await axios.get('https://jsonplaceholder.typicode.com/users');
            // (2)
            dispatch(fetchUsersSuccess(users));
        } catch(error) {
            const message = error.message;
            // (3)
            dispatch(fetchUsersFailure(message));
        }
        
    }
}

    // Reducers
    switch() {
        case: FETCH_USERS_REQUEST
            isLoading: true
        case: FETCH_USERS_SUCCESS
            isLoading: false,
            users: dataReturned
        case: FETCH_USERS_FAILURE
            isLoading: false
            error: error_returned_from_API_Call
        default:
            return state
    }    
```
## Connect states to our application/ Components:
1) In the main component (APP) import the store and the provider and pass the store their to the Provider as props.
2) In each Component:
    1) if there are states to pass them => define `mapStateToProps`.
    2) if there are actions to dispatch in the Component => define `mapDispatchToProps`.
    3) Use connect: `export default (mapStateToProps, mapDispatchToProps).connect(ComponentName)`.

#### mapStateToProps function
```js
    // To pass data from store to component to be dispatched
    const mapStateToProps = state => {
        return {
            numOfCakes: state.numOfCakes
        }
    }
```
#### mapDispatchToProps function
```js
    const mapDispatchToProps = dispatch => {
        return {
            // pass our action creators
            buyCake: () => dispatch(buyCake());
        }
    }
```
> **Note (4)**
We don't need to use these functions as it's hard to maintain if our state is big and nested!, so use the following hooks (useSelector, useDispatch) instead of these and connect() method.




## Some react-redux hooks:
### (1) useSelector hook:
- We can connect our 3 core things (store, actions, reducers) with react hooks (not just connect() method that invoked in our Component file).
- useSelector is a react-redux selector for connecting (alternative to mapStateToProps, but it's better in medium-large apps, especially when there is deep nested data in our state and we want to pass them to the Component to use them).
- Short answer: A better way than connect() method and mapStateToProps function.


### (2) useDispatch hook:
- for dispatching an action (like pressing a button)

```js
    import { useDispatch, useSelector } from "react-redux";
    // In the Component
    const Component = () => {
        // destructure some data from state object and that's it (no need to use connect())
        const { numOfCakes } = useSelector(state => state); // this function passed called selector function and it's actually the function we made in the mapStateToProps() before.

        // This hook returns a refernce to the dispatch function from redux store. So, let's save this refrence in a dispatch variable
        const dispatch = useDispatch(); // now in our jsx block use could use it as follows dispatch(action creator). 
        <button onClick={() => dispatch(buyCake)}>Buy Cake</button>

        return (
            <div className="Componet">
                bla bla
            </div>
        )
    }
```
> **Note (5)**
There are warnings with these hooks, if connect() and mapStateToProp and mapDispatchtoProps are fine, then go with them.

> **Note (6)**
We could pass data in the dispatch functions in the component and play with it in our reducers after extracting it from the action.payload object. So don't forget to recieve these data in the action creator either you did mapDispatchToProps function or used useDispatch() selector

> **Note (7)**
mapStateToProps and mapDispatchToProps may take second argument (ownProps).
we can make use of this as follows: we have list of users, and we want get a specific user on clicking on it, we can use this ownProps arg in passing the user ID and fetch his data based on this ID (pass the id as prop to the UserComponent).



> **Note (8)**
install redux-devtools-extension package for debugging react-redux apps

> **Note (9)**
if we have a case that we don't use mapStateToProps, we pass null as 1st
parameter in connect() method

> **Note (10)**
There is no fixed folder arcitecture for  mangaging states in redux (do whatever suits your app needs). But, I prefer this archtecture
<pre>
src/components
src/components/Cake
src/components/User
src/components/User/Image
src/components/User/Bio
src/redux
src/redux/index.js // exporting all our actions here and import them in the rootReducer.js
src/redux/rootReducer.js
src/redux/Cake
src/redux/User
src/redux/User/actions.js
src/redux/User/reducers.js
src/redux/User/actionTypes.js
src/data/store.js
</pre>
