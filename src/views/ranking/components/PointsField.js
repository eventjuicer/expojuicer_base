import React from 'react';
import pure from 'recompose/pure';
import get from 'lodash/get';

const PositionField = ({ record = {}, size = 25 }) =>
  get(record, 'stats.sessions') > 0 ? (
    <strong> {get(record, 'stats.sessions')}</strong>
  ) : (
    '...'
  );

const PurePositionField = pure(PositionField);

// PureFullNameField.defaultProps = {
//   source: 'email',
//   label: 'resources.customers.fields.name'
// };

export default PurePositionField;
