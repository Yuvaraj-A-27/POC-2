import React from 'react'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Home from './component/Home/Home'
import { Persistor, Store } from './Store/Store';

function App(props) {

  return (
    <Provider store = {Store}>
      <PersistGate loading={null} persistor={Persistor}>
        <div style = {{textAlign:'center'}}>
          <Home/>
        </div>
      </PersistGate>
    </Provider>
  );
}



export default App;
