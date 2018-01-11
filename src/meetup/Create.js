import React from 'react';
import {
  Create,
  FormTab,
  TabbedForm,
  LongTextInput,
  ReferenceInput,
  SelectInput,
  DisabledInput,
  TextInput
} from 'admin-on-rest';

import get from 'lodash/get';

import Divider from 'material-ui/Divider';
import { validate } from './validation';
import qs from 'query-string';
import { required, email, minLength } from 'admin-on-rest';

const ViewCreate = props => (
  <Create title="hej" {...props}>
    <TabbedForm redirect={false} submitOnEnter={false} validate={validate}>
      <FormTab label="resources.meetups.tabs.form">
        <DisabledInput
          source="participant_id"
          defaultValue={get(
            qs.parse(props.location.search),
            'participant_id',
            0
          )}
        />
        <ReferenceInput
          label="resources.meetups.fields.creative_id"
          source="creative_id"
          reference="newsletters"
          filter={{ act_as: 'newsletter' }}
          allowEmpty
        >
          <SelectInput optionText="name" />
        </ReferenceInput>

        <LongTextInput source="message" style={{ maxWidth: 544 }} />

        <Divider style={{ marginTop: 30 }} />

        <TextInput
          source="fname"
          validate={[required, minLength(2)]}
          style={{ display: 'inline-block' }}
        />
        <TextInput
          source="lname"
          validate={[required, minLength(2)]}
          style={{ display: 'inline-block', marginLeft: 32 }}
        />
        <TextInput
          type="email"
          source="email"
          validate={[required, email]}
          options={{ fullWidth: true }}
          style={{ width: 544 }}
        />
      </FormTab>

      <FormTab label="resources.meetups.tabs.help" />
    </TabbedForm>
  </Create>
);

export default ViewCreate;
