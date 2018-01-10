import React from 'react';
import {
  translate,
  BooleanField,
  Datagrid,
  DateField,
  DateInput,
  Delete,
  Edit,
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

import FullNameField from '../fields/FullNameField';
import InviteButton from './components/InviteButton';

//import Actions from './ListActions';

const VisitorFilter = props => (
  <Filter {...props}>
    <TextInput label="pos.search" source="q" alwaysOn />
  </Filter>
);

const ViewList = props => (
  <List
    {...props}
    filters={<VisitorFilter />}
    sort={{ field: 'lname', order: 'ASC' }}
    perPage={100}
  >
    <Datagrid
      //  headerOptions={{displaySelectAll: true, enableSelectAll : true}}
      //    bodyOptions={{ stripedRows: true, showRowHover: false, displayRowCheckbox: true }}
      //    rowOptions={{ selectable: true }}
      options={{
        multiSelectable: true,
        onRowSelection: test => console.log(test)
      }}
    >
      <TextField source="fname" label="First name" sortable={false} />
      <TextField source="lname" label="Last name" sortable={false} />
      <TextField source="cname2" label="Company" sortable={false} />
      <TextField source="position" label="Position" sortable={false} />
      <TextField source="domain" label="Domain" sortable={false} />

      <InviteButton />
    </Datagrid>
  </List>
);

export default ViewList;
