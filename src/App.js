import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import DashBoard from './component/DashBoard/DashBoard';
import Home from './component/Home/Home'
import { Persistor, Store } from './Store/Store';

function App(props) {

  return (
    <Provider store = {Store}>
      <PersistGate persistor={Persistor}>
        <div style = {{textAlign:'center'}}>
          <BrowserRouter>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/dashboard' component={DashBoard}/>
            </Switch>
          </BrowserRouter>
        </div>
      </PersistGate>
    </Provider>
  );
}



export default App;
