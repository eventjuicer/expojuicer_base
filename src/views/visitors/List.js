import React from 'react';
import { List, Datagrid, Filter, TextField, TextInput } from 'admin-on-rest';

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
    perPage={50}
  >
    <Datagrid
      //  headerOptions={{displaySelectAll: true, enableSelectAll : true}}
       bodyOptions={{
         stripedRows: true,
        // showRowHover: false,
      //   displayRowCheckbox: true
        }}
      //    rowOptions={{ selectable: true }}
      options={{
        // multiSelectable: true,
        // onRowSelection: test => console.log(test)
      }}
    >
      <TextField source="profile.fname" label="First name" sortable={false} />
      <TextField source="profile.lname" label="Last name" sortable={false} />
      <TextField source="profile.cname2" label="Company" sortable={false} />
      <TextField source="profile.position" label="Position" sortable={false} />
      <TextField source="domain" label="Domain" sortable={false} />

      <InviteButton />
    </Datagrid>
  </List>
);

export default ViewList;
