import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import DashBoard from './component/DashBoard/DashBoard';
import Home from './component/Home/Home'
// import Login from './component/Home/Login';
import { Persistor, Store } from './Store/Store';

function App(props) {
  // let history = useHistory()

  return (
    <Provider store = {Store}>
      <PersistGate loading={null} persistor={Persistor}>
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
