//============== Our Imports ==============
import { BUY_ICECREAM } from './IceCreamTypes';

//============== Reducers ==============
const initialIceCreamState = {
    numOfIceCreams: 30
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
        default:
            return state;
    }
}

export default iceCreamReducer;