import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

const CakeContainer = props => {
  return (
    <div className='CakeContainer'>
        <h2>Number of cakes: { props.numOfCakes }</h2>
        <button onClick={ props.buyCake }>Buy cake</button>
    </div>
  )
}
// connect the prop store to components
// It recieves the redux state as a parameter and pass it as props in our component
const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  }
}
const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CakeContainer);

