import React from 'react';
import pure from 'recompose/pure';

import Paper from 'material-ui/Paper';
//import NoResults from './NoResults';

const Wrapper = props => (
  <div style={{ paddingTop: 30, paddingBottom: 50, margin: 20 }}>
    {props.children}
  </div>
);

export default pure(Wrapper);
