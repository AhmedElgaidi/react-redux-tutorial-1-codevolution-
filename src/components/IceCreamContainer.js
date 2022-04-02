import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux';

const IceCreamContainer = props => {
  return (
    <div className='CakeContainer'>
        <h2>Number of Ice creams: { props.numOfIceCreams }</h2>
        <button onClick={ props.buyIceCream }>Buy IceCream</button>
    </div>
  )
}
// connect the prop store to components
const mapStateToProps = state => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams
  }
}
const mapDispatchToProps = dispatch => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(IceCreamContainer);

