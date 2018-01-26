import React from 'react';
import pure from 'recompose/pure';
import styles from '../styles/iframes';

const Iframe = ({ src }) => (
  <div>
    <div style={styles.container}>
      <div style={styles.beforeContainer} />
      <iframe style={styles.iframe} src={src} />
    </div>
  </div>
);

export default pure(Iframe);

<div style={styles.container}>
  <iframe style={styles.newsletter} />
</div>;
