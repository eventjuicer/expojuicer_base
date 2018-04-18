import React from 'react';
import {
  Edit,
  SimpleForm,
  TextField,
} from 'admin-on-rest';

import { validate } from './validation';

const ViewEdit = props => (

  <Edit  {...props}>

    <SimpleForm submitOnEnter={false} validate={validate}>

      <TextField source="profile.fname" />
      <TextField source="profile.lname" />
      <TextField source="profile.position" />
      <TextField source="profile.phone" />

    </SimpleForm>
  </Edit>

);

export default ViewEdit;
