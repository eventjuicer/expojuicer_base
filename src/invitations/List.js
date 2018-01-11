import React from 'react';
import {
  translate,
  Datagrid,
  Filter,
  List,
  TextInput,
  TextField
} from 'admin-on-rest';
import Icon from 'material-ui/svg-icons/social/person';

import EditButton from '../buttons/EditButton';
import FullNameField from '../fields/FullNameField';

export const InviteIcon = Icon;

const VisitorFilter = props => (
  <Filter {...props}>
    <TextInput label="pos.search" source="q" alwaysOn />
  </Filter>
);

const ViewList = props => (
  <List
    {...props}
    filters={<VisitorFilter />}
    sort={{ field: 'cname2', order: 'ASC' }}
    perPage={100}
  >
    <Datagrid
      //  headerOptions={{ adjustForCheckbox: true, displaySelectAll: true }}
      bodyOptions={{
        stripedRows: true,
        showRowHover: false,
        displayRowCheckbox: true
      }}
      rowOptions={{ selectable: true }}
      options={{
        multiSelectable: true,
        onRowSelection: test => console.log(test)
      }}
    >
      <TextField source="fname" label="First name" />
      <TextField source="lname" label="Last name" />
      <TextField source="cname2" label="Company" />
      <TextField source="position" label="Position" />
    </Datagrid>
  </List>
);

export default ViewList;
