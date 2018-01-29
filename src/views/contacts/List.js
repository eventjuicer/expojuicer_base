import React from 'react';
import {
  translate,
  Datagrid,
  Filter,
  List,
  TextInput,
  TextField
} from 'admin-on-rest';


import ListActions from './ListActions';


const VisitorFilter = props => (
  <Filter {...props}>
    <TextInput label="pos.search" source="q" alwaysOn />
  </Filter>
);

const ViewList = props => (
  <List
    {...props}
    actions={<ListActions />}
  //  filters={<VisitorFilter />}
  //  sort={{ field: 'cname2', order: 'ASC' }}
    perPage={100}
  >
    <Datagrid
        headerOptions={{
    //  adjustForCheckbox: true, displaySelectAll: true
      }}
      bodyOptions={{
        stripedRows: true,
        // showRowHover: false,
        // displayRowCheckbox: true
      }}
      rowOptions={{
      //  selectable: true
      }}
      options={{
        // multiSelectable: true,
        // onRowSelection: test => console.log(test)
      }}
    >
      <TextField source="email"  sortable={false} />
      <TextField source="import.name"  sortable={false} />
      <TextField source="cname2" label="Company"  sortable={false}  />
      <TextField source="sent_at"   sortable={false}  />
    </Datagrid>
  </List>
);

export default ViewList;
