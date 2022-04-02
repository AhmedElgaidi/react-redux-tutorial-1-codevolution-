import { 
    FETCH_USERS_SUCCESS, 
    FETCH_USERS_FAILURE, 
    FETCH_USERS_REQUEST 
} from "./userTypes"

const initialUsersState = {
    isLoading: false,
    users: [],
    error: ''
}

//============ Our Reducers =============
const usersReducer = (state = initialUsersState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state, // copy it and then override
                isLoading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                isLoading: false,
                users: [],
                error: action.payload
            }
        default:
            return state;
    }
}

export default usersReducer;