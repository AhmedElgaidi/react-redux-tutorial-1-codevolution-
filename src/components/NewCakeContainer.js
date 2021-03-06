import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

const NewCakeContainer = props => {
    const [number, setNumber] = useState(1);
  return (
    <div className='CakeContainer'>
        <h2>Number of cakes: { props.numOfCakes }</h2>
        <input type="text" onChange={e => setNumber(e.target.value)} />
        <button onClick={ () => props.buyCake(number) }>Buy {number} cake</button>
    </div>
  )
}
// connect the prop store to components
const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  }
}
const mapDispatchToProps = dispatch => {
  return {
    buyCake: number => dispatch(buyCake(number))
  }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewCakeContainer);