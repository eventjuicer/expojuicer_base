import React from 'react';
import {
  translate,
  List,
  Datagrid,
  Filter,
  TextField,
  TextInput
} from 'admin-on-rest';

import NoResults from '../../components/NoResults';
import Stats from './components/Stats';


// const VisitorFilter = props => (
//   <Filter {...props}>
//     <TextInput label="pos.search" source="q" alwaysOn />
//   </Filter>
// );

const ViewList = props => (

  <div>

    <NoResults />

    <Stats />

  <List
    {...props}
  //  filters={<VisitorFilter />}
  //  sort={{ field: 'lname', order: 'ASC' }}
    perPage={200}
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
      <TextField source="profile.cname2" label="Brand name" sortable={false} />
      <TextField source="domain" label="Domain" sortable={false} />
      <TextField source="stats.sessions" label="Points" sortable={false} />

    </Datagrid>
  </List>

  </div>
);

export default ViewList;
