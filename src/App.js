import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddEvent from './component/AddEvent/AddEvent';

import Donation from './component/Donation/Donation';
import Header from './component/Header/Header';
import Header2 from './component/Header2/Header2';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import NoMatch from './component/NoMatch/NoMatch';
import PrivateRoute from './component/PrivateRout/PrivateRoute';
import Register from './component/Register/Register';
import VolunteerList from './component/Volunteerlist/Volunteerlist';

export const UserContext = createContext();

function App() {
     const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
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
          
          {/* <Route path="/register">
              <Register/>
          </Route> */}

          <PrivateRoute path="/register">
            <Register/>
          </PrivateRoute>

          <Route path="/donation">
              <Header2></Header2>
              <Donation></Donation>
          </Route>

          <Route path="/addevent">
            <AddEvent></AddEvent>
          </Route>

          <Route path="/volunteerlist">
              <VolunteerList></VolunteerList>
          </Route>

          {/* <Route path ="*">
            <NoMatch></NoMatch>
          </Route> */}
        
      </Router>

    </UserContext.Provider>
    
  );
}

export default App;
