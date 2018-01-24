import React from 'react';
import {
  Create,
  SimpleForm,
  LongTextInput,
  ReferenceInput,
  SelectInput,
  DisabledInput,
  TextInput,
  required, email, minLength
} from 'admin-on-rest';

import get from 'lodash/get';
import qs from 'query-string';


import { validate } from './validation';
import { getUserFullName, getUserData } from '../../api/helpers';

const ViewCreate = props => (
  <Create title="Send meeting request" {...props}>
    <SimpleForm redirect="list" submitOnEnter={false} validate={validate}>

        <DisabledInput
          source="participant_id"
          defaultValue={get(
            qs.parse(props.location.search),
            'participant_id',
            0
          )}
        />


    {/*    <ReferenceInput
          label="resources.meetups.fields.creative_id"
          source="creative_id"
          reference="newsletters"
          filter={{ act_as: 'newsletter' }}
          allowEmpty
        >
          <SelectInput optionText="name" />
        </ReferenceInput>
*/}

        <LongTextInput source="message" style={{ maxWidth: 700 }} />


        <TextInput
          source="data.from_name"
          validate={[required, minLength(4)]}
          options={{ fullWidth: true }}
          defaultValue={getUserFullName()}
        />

        <TextInput
          type="email"
          source="data.from_email"
          validate={[required, email]}
          options={{ fullWidth: true }}
          style={{ width: 544 }}
          defaultValue={getUserData("email")}
        />

    </SimpleForm>
  </Create>
);

export default ViewCreate;
