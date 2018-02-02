import React from 'react';
import {
  translate,
  Datagrid,
  Filter,
  List,
  TextInput,
  TextField,
  EditButton,
  ReferenceArrayField,
  ReferenceManyField,
  SingleFieldList,
  ChipField
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
      headerOptions={
        {
          //  adjustForCheckbox: true, displaySelectAll: true
        }
      }
      bodyOptions={{
        stripedRows: true
        // showRowHover: false,
        // displayRowCheckbox: true
      }}
      rowOptions={
        {
          //  selectable: true
        }
      }
      options={
        {
          // multiSelectable: true,
          // onRowSelection: test => console.log(test)
        }
      }
    >
      <TextField source="email" sortable={false} />

      <ReferenceArrayField
        label="Lists"
        reference="contactlists"
        source="contactlist_ids"
      >
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>

      <TextField source="import.name" sortable={false} />

      <TextField source="profile.phone" sortable={false} />
      <TextField source="profile.fname" sortable={false} />

      <TextField source="sent_at" sortable={false} />
      <EditButton />
    </Datagrid>
  </List>
);

export default ViewList;
