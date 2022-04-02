//=========== Our Imports =============
import axios from "axios";
import { 
    FETCH_USERS_REQUEST, 
    FETCH_USERS_SUCCESS, 
    FETCH_USERS_FAILURE
} from "./userTypes";

//=========== Our Actions =============
// (1) Request
export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}
// (2) afer sucesss
export const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
// (3) after failing
export const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

// (4) different action creater as it uses axios and thunk to do api call
export const fetchUsers = () => {
    return function (dispatch){
        // let's dispatch our actions
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data;
                dispatch(fetchUsersSuccess(users));
            })
            .catch(error => {
                const message = error.message
                dispatch(fetchUsersFailure(message));
            });
    }
}