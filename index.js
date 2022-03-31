const BUY_CAKE = 'BUY_CAKE';

// Actions
const buyCake = () => {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
} 

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: 
            return {
                ...state,// make copy of the state (to prevent mutation)
                numOfCakes: state.numOfCakes - 1 // change this property
            }
        default:
            return state
    }
}