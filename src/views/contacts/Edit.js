import React from 'react';
import { Edit, SimpleForm, TextInput } from 'admin-on-rest';
import Icon from 'material-ui/svg-icons/social/person';

import { Title } from './Shared';

export const InviteIcon = Icon;

const ViewEdit = props => (
  <Edit title={<Title />} {...props}>
    <SimpleForm redirect="list" submitOnEnter={false}>
      <TextInput source="profile.fname" style={{ display: 'inline-block' }} />
      <TextInput
        source="profile.lname"
        style={{ display: 'inline-block', marginLeft: 32 }}
      />

      <TextInput
        type="email"
        source="email"
        validation={{ email: true }}
        options={{ fullWidth: true }}
        style={{ width: 544 }}
      />

      <TextInput
        source="profile.phone"
        options={{ fullWidth: true }}
        style={{ width: 544 }}
      />

      {/* <LongTextInput
          label="resources.visitors.tabs.message"
          source="invitation"
          style={{ maxWidth: 544 }}
        /> */}
    </SimpleForm>
  </Edit>
);

export default ViewEdit;
