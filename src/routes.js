import React from 'react';
import { Route } from 'react-router-dom';
import Configuration from './meetup/Configuration';



import Login from './meetup/Login';

export default [

    <Route exact path="/configuration" component={Configuration} />,

    
  //  <Route exact path="/invites" component={CsvImport} />,
    <Route exact path="/token/:token" component={Login} />

];
