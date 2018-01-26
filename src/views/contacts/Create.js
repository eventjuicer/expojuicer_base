import React from 'react';

import { Title } from './Shared';
import { Create, TabbedForm, FormTab } from 'admin-on-rest';

import { Field } from 'redux-form';
// import ImportManually from './components/ImportManually';
// import ImportCsv from './components/ImportCsv';

import { validate as validateInvites } from './validation';

const ViewCreate = props => (
  <Create title={<Title />} {...props}>
    <TabbedForm
      redirect="list"
      submitOnEnter={false}
      validate={validateInvites}
    >
      <FormTab label="resources.invitations.tabs.import_manually">
        {/*    <Field name="imported_manually" component={ImportManually} /> */}
      </FormTab>

      <FormTab label="resources.invitations.tabs.import_csv">
        {/*      <Field name="imported_json" component={ImportCsv} />  */}
      </FormTab>
    </TabbedForm>
  </Create>
);

export default ViewCreate;
