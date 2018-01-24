import React from 'react';
import { Route } from 'react-router-dom';

import Configuration from '../views/configuration';
import Rewards from '../views/rewards';


export default [
  <Route exact path="/configuration" component={Configuration} />,
  <Route exact path="/rewards" component={Rewards} />,

];
