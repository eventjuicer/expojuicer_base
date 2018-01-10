import React from 'react';
import {
  translate,
  BooleanField,
  Datagrid,
  DateField,
  DateInput,
  Delete,
  Edit,
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

import ViewEdit from './Edit';
import ViewCreate from './Create';

import FullNameField from '../fields/FullNameField';

export { Icon as ViewIcon } from 'material-ui/svg-icons/social/person';

export { ViewEdit, ViewCreate };

const VisitorFilter = props => (
  <Filter {...props}>
    <TextInput label="pos.search" source="q" alwaysOn />
  </Filter>
);

export const ViewList = props => (
  <List
    {...props}
    filters={<VisitorFilter />}
    sort={{ field: 'cname2', order: 'ASC' }}
    perPage={100}
  >
    <Datagrid
      bodyOptions={{
        stripedRows: true,
        showRowHover: false,
        displayRowCheckbox: false
      }}
      rowOptions={{ selectable: false }}
      options={{
        multiSelectable: false,
        onRowSelection: test => console.log(test)
      }}
    >
      <TextField source="name" label="Name" />
      <TextField source="act_as" label="Type" />
      <DateField source="updated_at" label="Updated" />

      <EditButton />
    </Datagrid>
  </List>
);
