import React from 'react';
import PropTypes from 'prop-types';

const ThreeTypesStatusField = ({ source, record = {} }) => (
  <span>{record[source]}</span>
);

ThreeTypesStatusField.propTypes = {
  label: PropTypes.string,
  record: PropTypes.object,
  source: PropTypes.string.isRequired
};

ThreeTypesStatusField.defaultProps = {
  label: 'Status'
};

export default ThreeTypesStatusField;
