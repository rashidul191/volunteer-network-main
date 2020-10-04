import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Register from './component/Register/Register';

function App() {
  return (

    <Router>
        <Switch>
          <Route exact path="/">
            <Header/>
            <Home />
          </Route>

          <Route path="/home">
            <Header/>
            <Home/>
          </Route>

          <Route path="/login">
            <Login/>
          </Route>
        </Switch>

        <Route path="/register">
          <Register/>
        </Route>
      
    </Router>
    
  );
}

export default App;
