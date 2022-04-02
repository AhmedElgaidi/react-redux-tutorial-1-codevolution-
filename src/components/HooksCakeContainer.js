import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';

const HooksCakeContainer = () => {
    // useSelector is a hook and accepts a selector function and return data (state)
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    // useDispatch hook (for dispatchign actions)
    const dispatch = useDispatch()


    return (
    <div className='HookCakeContainer'>
        <h2>Number of cakes: { numOfCakes }</h2>
        <button onClick={() => dispatch(buyCake())}>Buy cake</button>
    </div>
  )
}

export default HooksCakeContainer