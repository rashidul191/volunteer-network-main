import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import PrivateRoute from './component/PrivateRout/PrivateRoute';
import Register from './component/Register/Register';

export const UserContext = createContext();

function App() {
     const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <h1>Email: {loggedInUser.email} </h1>
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

          <PrivateRoute path="/register">
            <Register/>
          </PrivateRoute>
        
      </Router>

    </UserContext.Provider>
    
  );
}

export default App;
