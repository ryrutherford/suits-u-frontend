import React from "react";
import {Switch, Route} from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import Home from '../home/Home';
import Team from "../team/Team";
import History from "../history/History";
import Authenticate from "../account/Authenticate";

const App = () => {
  return (
    <div className="container">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/history" component={History}/>
        <Route path="/team" component={Team}/>
        <Route path="/authenticate" component={Authenticate}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;