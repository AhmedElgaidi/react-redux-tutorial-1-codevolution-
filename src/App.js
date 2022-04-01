import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
// Our components
import CakeContainer from './components/CakeContainer';

const App = () => {
  return (
    // pass STORE as props 
    <Provider store={ store }>
      <div className='App'>
        <CakeContainer/>
      </div>
    </Provider>
  )
}

export default App

// start with video 19 => codevolution