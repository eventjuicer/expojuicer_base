import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  required,
  email,
  minLength,
} from 'admin-on-rest';


import { validate } from './validation';

const ViewCreate = props => (
  <Create {...props}>

    <SimpleForm redirect="list" submitOnEnter={false} validate={validate}>

      <TextInput
        source="fields.fname"
        validate={[required, minLength(4)]}
        options={{ fullWidth: true }}
        style={{ width: 544 }}
      />

      <TextInput
        source="fields.lname"
        validate={[required, minLength(4)]}
        options={{ fullWidth: true }}
        style={{ width: 544 }}
      />

      <TextInput
        source="fields.position"
        validate={[required, minLength(4)]}
        options={{ fullWidth: true }}
        style={{ width: 544 }}
      />

      <TextInput
        source="fields.phone"
        validate={[required, minLength(4)]}
        options={{ fullWidth: true }}
        style={{ width: 544 }}
      />

      <TextInput
        type="email"
        source="fields.email"
        validate={[required, email]}
        options={{ fullWidth: true }}
        style={{ width: 544 }}
      />

    </SimpleForm>
  </Create>
);

export default ViewCreate;
