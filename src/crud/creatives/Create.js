import React from 'react';
import {
  translate,
  Create,
  EditButton,
  Filter,
  FormTab,
  List,
  LongTextInput,
  NullableBooleanInput,
  NumberField,
  ReferenceManyField,
  TabbedForm,
  TextField,
  TextInput,
  ReferenceInput
} from 'admin-on-rest';

import FullNameField from '../../fields/FullNameField';

const ViewCreate = props => (
  <Create {...props}>
    <TabbedForm>
      <FormTab label="resources.visitors.tabs.invitation">
        <TextInput source="name" />

        <TextInput
          source="data.sender_name"
          label="pos.sros"
          style={{ display: 'inline-block' }}
        />
        <TextInput
          type="email"
          source="data.sender_email"
          validation={{ email: true }}
          style={{ display: 'inline-block', marginLeft: 32 }}
        />

        <LongTextInput
          label="resources.newsletters.inputs.template"
          source="data.template"
          style={{ maxWidth: 544 }}
        />
      </FormTab>
    </TabbedForm>
  </Create>
);

export default ViewCreate;
