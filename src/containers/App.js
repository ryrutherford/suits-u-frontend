import React from "react";
import {Switch, Route} from 'react-router-dom';
import Navbar from '../common/Navbar';
import Home from '../home/Home';

const App = () => {
  return (
    <div className="container">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;