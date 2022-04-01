// let's define our action (Action is an object with type property)

//=========== Our imports ================

import { BUY_CAKE } from "./cakeTypes"

//=========== Actions ================

// Action creators
export const buyCake = () => {
    return {
        type: BUY_CAKE
    }
}