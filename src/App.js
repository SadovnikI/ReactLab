import React from 'react'
import UserList from "./pages/UserList";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Nav from "./pages/Nav";
import UserCabinet from "./pages/UserCabinet";
import RegistrationPage from "./pages/RegisterPage";
import {LoginPage} from "./pages/LoginPage";
import ProfileSettings from "./pages/ProfileSettings";



function App (){

      return (

              <Router>
                  <div>
                      <Switch>

                          <Route exact path='/' exect component={UserList}/>
                          <Route exact path='/test' exact component={Nav}/>
                          <Route exact path='/cabinet' exact component={UserCabinet}/>
                          <Route exact path='/registration' exect component={RegistrationPage}/>
                          <Route exact path='/login' exect component={LoginPage}/>
                          <Route exact path='/settings' exect component={ProfileSettings}/>
                      </Switch>
                  </div>
              </Router>

      );

}

export default App;
