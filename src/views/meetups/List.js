import React from 'react';
import {
  Datagrid,
  EditButton,
  Filter,
  List,
  TextField,
  SelectInput
} from 'admin-on-rest';

import StatusField from './components/StatusField';
import StatusAwareDeleteButton from './components/StatusAwareDeleteButton';

import ViewTitle from '../../components/ViewTitle';
import ListActions from './ListActions';

import FullNameField from '../../fields/FullNameField';

const ViewFilter = props => (
  <Filter {...props} >
    {/*    <TextInput label="pos.search" source="q" alwaysOn /> */}
    <SelectInput
      source="status"
      allowEmpty
      choices={[
        { id: 'agreed', name: 'resources.meetups.fields.status.agreed' },
        { id: 'rejected', name: 'resources.meetups.fields.status.rejected' },
        { id: 'scheduled', name: 'resources.meetups.fields.status.scheduled' }
      ]}
    />
  </Filter>
);

/*
<h4 style={{}}>
  Below invitations are scheduled for sending and will be processed 2
  weeks before the event. Your limit is 5 invitations.
</h4>
*/

const ViewList = props => (
  <List
    title={<ViewTitle resource={props.resource} limit={true} />}
    {...props}
    actions={<ListActions />}
    //  actions={null}
    filters={<ViewFilter />}
    //  sort={{ field: 'cname2', order: 'ASC' }}
    perPage={50}
  >
    <Datagrid bodyOptions={{ stripedRows: true, showRowHover: true }}>
      <FullNameField
        source="participant.profile.fname"
        sortable={false}
      />

      <TextField
        source="participant.profile.cname2"
        sortable={false}
      />

      <TextField source="message"  sortable={false} />
      <TextField source="comment" sortable={false} />

      <StatusField label="status" sortable={false} />
      <EditButton />

      <StatusAwareDeleteButton />
    </Datagrid>
  </List>
);

export default ViewList;
