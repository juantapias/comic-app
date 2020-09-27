import React from 'react';
import { Switch, Route } from "react-router-dom";
//App components
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/comic/:id" component={Product} />
    </Switch>
  );
}

export default Routes;