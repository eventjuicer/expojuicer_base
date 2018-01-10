import React from 'react';
import pure from 'recompose/pure';

const FullNameField = ({ record = {}, size = 25 }) => (
  <span>
    <span style={{ display: 'inline-block', width: size / 3 }}>&nbsp;</span>
    {record.fname} {record.lname}
  </span>
);

const PureFullNameField = pure(FullNameField);

PureFullNameField.defaultProps = {
  source: 'email',
  label: 'resources.customers.fields.name'
};

export default FullNameField;
