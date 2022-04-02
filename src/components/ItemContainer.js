import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

const ItemContainer = props => {
  return (
    <div className='ItemContainer'>
        <h2>Item: {props.item}</h2>
        <button onClick={props.buyItem}>Buy Items</button>
    </div>
  )
}

// This function can take more parameters than state
const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake
        ? state.cake.numOfCakes
        : state.iceCream.numOfIceCreams;
    return {
        item: itemState
    }
}

// mapDispatchToProps accepts two parameters also
// note: the second param helps us to make if condition on the passed props
// as we did in APP.js
const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake
        ? () => dispatch(buyCake())
        : () => dispatch(buyIceCream());
    return {
        buyItem: dispatchFunction
    }
}


export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(ItemContainer);

// Not: if we have a case that we don't use mapStateToProps, we pass null as 1st
// parameter in connect() method