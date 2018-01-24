import React from 'react';
import {
  translate,
  List,
  Datagrid,
//  Filter,
  TextField
} from 'admin-on-rest';


import PointsField from './components/PointsField';

// const VisitorFilter = props => (
//   <Filter {...props}>
//     <TextInput label="pos.search" source="q" alwaysOn />
//   </Filter>
// );

const ViewList = (props) => (


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
      //  multiSelectable: true,
      //  onRowSelection: test => console.log(test)
      }}
    >
      <TextField source="profile.cname2" label="Brand name" sortable={false} />
      <TextField source="domain" label="Domain" sortable={false} />
      <PointsField source="stats" label="Points" sortable={false} />

    </Datagrid>
  </List>


);

export default translate(ViewList);
