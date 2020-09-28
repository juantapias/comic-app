import React from 'react';
import { Switch, Route } from "react-router-dom";
//App components
import Home from './Pages/Home/Home';
import Comics from './Pages/Comic/Comic';
import Characters from './Pages/Characters/Characters';
import Character from './Pages/Character/Character';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/comic/:id" component={Comics} />
      <Route exact path="/characters" component={Characters} />
      <Route exact path="/character/:id" component={Character} />
    </Switch>
  );
}

export default Routes;