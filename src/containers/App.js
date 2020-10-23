import React from "react";
import {Switch, Route} from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import Home from '../home/Home';
import Team from "../team/Team";
import History from "../history/History";
import Account from "../account/Account";
import Authenticate from "../account/Authenticate";
import ResetPassword from "../account/ResetPassword";

const App = () => {
  return (
    <div className="container">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/history" component={History}/>
        <Route exact path="/team" component={Team}/>
        <Route exact path="/authenticate" component={Authenticate}/>
        <Route exact path="/account" component={Account}/>
        <Route exact path="/reset-password" component={ResetPassword}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;