import React from 'react';
import { Route } from 'react-router-dom';

import Configuration from './components/Configuration';
import Ranking from './ranking';

export default [
  <Route exact path="/configuration" component={Configuration} />,
  <Route exact path="/ranking" component={Ranking} />
];
