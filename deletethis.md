# React (UI library) and Redux

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
- Specify how the app's state changes in response to actions sent to the store.
- A function that accepts (state, action) arguments, and return the next state of the application
- (prevState, action) => newState

### Actions:
- The only way your application can interact with the store.
- Carry some info from your code (app) to the redux store.
- It's a plain js object.
- Have the 'type' property to describe the type action being performed.
- This type property is a string.

### Reducers:
