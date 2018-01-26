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

import StatusField from './components/StatusField';
import ListActions from './ListActions';
import Wrapper from '../../components/Wrapper';
import { red500, yellow500, blue500 } from 'material-ui/styles/colors';
import FullNameField from '../../fields/FullNameField';

const ViewFilter = props => (
  <Filter {...props}>
    {/*    <TextInput label="pos.search" source="q" alwaysOn /> */}
    <SelectInput
      source="status"
      allowEmpty
      choices={[
        { id: 'agreed', name: 'Confirmed' },
        { id: 'rejected', name: 'Rejected' },
        { id: 'scheduled', name: 'Scheduled' }
      ]}
    />
  </Filter>
);

const ViewList = props => (
  <Wrapper>
    <h3 style={{ padding: 20 }}>
      Below invitations are scheduled for sending and will be processed 2 weeks
      before the event. Your limit is 5 invitations.
    </h3>
    <List
      {...props}
      actions={<ListActions />}
      filters={<ViewFilter />}
      //  sort={{ field: 'cname2', order: 'ASC' }}
      perPage={50}
    >
      <Datagrid bodyOptions={{ stripedRows: true, showRowHover: true }}>
        <FullNameField
          source="participant.profile"
          label="Recipient"
          sortable={false}
        />

        <TextField
          source="participant.profile.cname2"
          label="Company name"
          sortable={false}
        />

        <TextField source="message" label="Message" sortable={false} />
        <TextField source="comment" label="Private comment" sortable={false} />

        <StatusField label="status" sortable={false} />
        <EditButton />
      </Datagrid>
    </List>
  </Wrapper>
);

export default ViewList;
