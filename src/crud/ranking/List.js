import React from 'react';
import {
  translate,
  List,
  Datagrid,
  Filter,
  TextField,
  TextInput,
  ViewTitle
} from 'admin-on-rest';

import { Card, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';

import Stats from './components/Stats';

import PointsField from './components/PointsField';

// const VisitorFilter = props => (
//   <Filter {...props}>
//     <TextInput label="pos.search" source="q" alwaysOn />
//   </Filter>
// );

const ViewList = (props) => (

  <Paper>



    <ViewTitle title={props.translate('prizes.name')} />


<CardText>


  To participate in the contest you must use dedicated tracking link. See Promo Materials for details.

</CardText>

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
      //  onRowSelection: test => console.log(test)
      }}
    >
      <TextField source="profile.cname2" label="Brand name" sortable={false} />
      <TextField source="domain" label="Domain" sortable={false} />
      <PointsField source="stats" label="Points" sortable={false} />

    </Datagrid>
  </List>



  </Paper>
);

export default translate(ViewList);
