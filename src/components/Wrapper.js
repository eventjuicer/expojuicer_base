import React from 'react';
import pure from 'recompose/pure';
import classNames from 'classnames'

//import NoResults from './NoResults';
const styles = {

  default : {
    paddingTop: 30,
    paddingBottom: 50,
    margin: 20
  },
  top : {

  },
  bottom : {

  }
}


const Wrapper = ({children, spacing, style}) => (
  <div style={{
    ...styles.default,
    ...(spacing in styles ? styles[spacing] : {}),
    ...style
  }}>
    {children}
  </div>
);

Wrapper.defaultProps = {
  spacing : 'default',
  style : {}
}

export default pure(Wrapper);
