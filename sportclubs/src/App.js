import React from 'react';
import './App.css';
import { BrowserRouter as HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store/index'
import {MainView} from './views/mainView'

function App() {
  return (
    <Provider store={store}>
      <HashRouter basename="/sportClubs">
    <Switch>
      <Route exect path='/sportClubs' component={MainView} />         
      <Redirect to="/sportClubs" />
    </Switch>
  </HashRouter> 
    </Provider>
    
    
  );
}

export default App;
