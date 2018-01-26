import React from 'react';

import { Title } from './Shared';
import { Create, TabbedForm, FormTab } from 'admin-on-rest';

import { validate as validateInvites } from './validation';

const ViewCreate = props => (
  <Create title={<Title />} {...props}>
    <TabbedForm
      redirect="list"
      submitOnEnter={false}
      validate={validateInvites}
    >
      <FormTab label="resources.invitations.tabs.import_manually" />

      <FormTab label="resources.invitations.tabs.import_csv" />
    </TabbedForm>
  </Create>
);

export default ViewCreate;
