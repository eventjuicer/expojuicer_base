import React from 'react';
import {
  Edit,
  SimpleForm,
  LongTextInput,
  ReferenceField,
  TextField,
  DisabledInput,
  TextInput,
  required, email, minLength
} from 'admin-on-rest';

import get from 'lodash/get';
import qs from 'query-string';
import Divider from 'material-ui/Divider';

import { validate } from './validation';
import { getUserFullName, getUserData } from '../../api/helpers';

const ViewCreate = props => (
  <Edit title="hej" {...props}>
    <SimpleForm submitOnEnter={false} validate={validate}>


      <TextField source="participant.profile.fname" />
      <TextField source="participant.profile.lname" />
      <TextField source="participant.profile.cname2" />
    <TextField source="participant.profile.position" />

        <LongTextInput source="comment" style={{ maxWidth: 544 }} />



      </SimpleForm>
  </Edit>
);

export default ViewCreate;
