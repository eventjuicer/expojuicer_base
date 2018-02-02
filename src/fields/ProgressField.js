import React from 'react';
import pure from 'recompose/pure';
import get from 'lodash/get';

const ProgressField = ({ record = {}, current, target, size = 25 }) => {
  return (
    <span>
      {get(record, current, 0)} / {get(record, target)}
    </span>
  );
};

const PureProgressField = pure(ProgressField);

PureProgressField.defaultProps = {
  source: 'email',
  label: 'resources.customers.fields.name'
};

export default PureProgressField;
