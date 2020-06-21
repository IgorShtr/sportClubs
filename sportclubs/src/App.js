import React from 'react';
import './App.css';
import { BrowserRouter as HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import {MainView} from './views/mainView'

function App() {
  return (
    <HashRouter basename="/sportclubs">
    <Switch>
      <Route exect path='/sportclubs' component={MainView} />         
      <Redirect to="/sportclubs" />
    </Switch>
  </HashRouter> 
  );
}

export default App;
