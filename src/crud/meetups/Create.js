import React from 'react';
import {
  Create,
  FormTab,
  TabbedForm,
  LongTextInput,
  ReferenceInput,
  SelectInput,
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
  <Create title="hej" {...props}>
    <TabbedForm redirect="edit" submitOnEnter={false} validate={validate}>
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
          source="fromName"
          validate={[required, minLength(4)]}
          options={{ fullWidth: true }}
          defaultValue={getUserFullName()}
        />

        <TextInput
          type="email"
          source="fromEmail"
          validate={[required, email]}
          options={{ fullWidth: true }}
          style={{ width: 544 }}
          defaultValue={getUserData("email")}
        />
      </FormTab>

      <FormTab label="resources.meetups.tabs.help" />
    </TabbedForm>
  </Create>
);

export default ViewCreate;
