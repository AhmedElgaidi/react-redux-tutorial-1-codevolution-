// Let's make this file for all our reducers so we can combine them in the store with the combine method

//========== Imports =============
import { combineReducers } from "redux";
import cakeReducer from './cakes/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import userReducer from './User/userReducer';

// Let's define our root reducer
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
});

export default rootReducer;