import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Minimizacao from './pages/Minimizacao'
import Maximizacao from './pages/Maximizacao'

function Routes() {
  return (
    <Switch>
      <Route path="/maximizacao" component={Maximizacao} exact />
      <Route path="/minimizacao" component={Minimizacao} exact />
    </Switch>
  );
}

export default Routes;