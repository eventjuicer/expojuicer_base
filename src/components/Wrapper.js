import React from 'react';
import pure from 'recompose/pure';

//import NoResults from './NoResults';

const Wrapper = props => (
  <div style={{ paddingTop: 30, paddingBottom: 50, margin: 20 }}>
    {props.children}
  </div>
);

export default pure(Wrapper);
