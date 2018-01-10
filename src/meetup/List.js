import React from 'react';
import {
    Datagrid,
    DateField,
    Show,
    Filter,
    List,
    NumberField,
    TextField,
    TextInput
} from 'admin-on-rest';


import ThreeTypesStatusField from '../fields/ThreeTypesStatusField';

const VisitorFilter = (props) => (
   <Filter {...props}>
        <TextInput label="pos.search" source="q" alwaysOn />

    </Filter>
);

const ViewList = (props) => (

    <List {...props} filters={<VisitorFilter />} sort={{ field: 'cname2', order: 'ASC' }} perPage={100}>
        <Datagrid bodyOptions={{ stripedRows: true, showRowHover: true }}>

            <TextField source="participant.fname" label="First name" />
            <TextField source="participant.lname" label="Last name" />
            <TextField source="participant.cname2" label="Company" />
            <TextField source="participant.position" label="Position" />

            <ThreeTypesStatusField source="agreed" label="Status" />

        </Datagrid>
    </List>
);

export default ViewList;
