import React from 'react';
import {
  Datagrid,
  DateField,
  EditButton,
  Filter,
  List,
  NumberField,
  TextField,
  TextInput,
  SelectInput
} from 'admin-on-rest';

import ListActions from './ListActions';

const ViewFilter = props => (
  <Filter {...props}>
{/*    <TextInput label="pos.search" source="q" alwaysOn /> */}
    <SelectInput source="status" allowEmpty choices={[
    { id: "agreed", name: 'Confirmed' },
    { id: "rejected", name: 'Rejected' },
    { id: "scheduled", name: 'Scheduled' },
]} />

  </Filter>
);

const ViewList = props => (
  <div>

  <List
    {...props}
    actions={<ListActions />}
    filters={<ViewFilter />}
  //  sort={{ field: 'cname2', order: 'ASC' }}
    perPage={50}
  >
    <Datagrid bodyOptions={{ stripedRows: true, showRowHover: true }}>

      <TextField source="participant.profile.fname" label="First name" sortable={false} />
      <TextField source="participant.profile.lname" label="Last name"  sortable={false} />
      <TextField source="participant.profile.cname2" label="Company"  sortable={false}  />
      <TextField source="participant.profile.position" label="Position"  sortable={false} />


      <EditButton />
    </Datagrid>
  </List>
  </div>
);

export default ViewList;
