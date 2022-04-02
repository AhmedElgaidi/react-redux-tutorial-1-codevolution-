import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
// Our components
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';

import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';


const App = () => {
  return (
    // pass STORE as props 
    <Provider store={ store }>
      <div className='App'>
        {/* <HooksCakeContainer /> */}
        {/* <CakeContainer /> */}
        {/* <IceCreamContainer /> */}
        {/* <NewCakeContainer /> */}
        {/* if the prop property is same as value we can pass it as follows */}
        {/* <ItemContainer cake/> */}
        {/* <ItemContainer /> */}
        <UserContainer/>
      </div>
    </Provider>
  )
}

export default App