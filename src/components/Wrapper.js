



import React from 'react';
import pure from 'recompose/pure';

import Paper from 'material-ui/Paper';
//import NoResults from './NoResults';


const Wrapper = (props) => (
  <Paper>{props.children}</Paper>
);


export default pure(Wrapper);
