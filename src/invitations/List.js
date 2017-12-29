import React from 'react';
import {
    translate,
    BooleanField,
    Datagrid,
    DateField,
    DateInput,
    Delete,
    Edit,
    Filter,
    FormTab,
    List,
    LongTextInput,
    NullableBooleanInput,
    NumberField,
    ReferenceManyField,
    TabbedForm,
    TextField,
    TextInput,
    ReferenceInput
} from 'admin-on-rest';
import Icon from 'material-ui/svg-icons/social/person';

import EditButton from '../buttons/EditButton';
import NbItemsField from '../aordemo/commands/NbItemsField';
import ProductReferenceField from '../aordemo/products/ProductReferenceField';
import StarRatingField from '../aordemo/reviews/StarRatingField';
import FullNameField from '../fields/FullNameField';
import InviteButton from '../buttons/InviteButton';



export const InviteIcon = Icon;

const VisitorFilter = (props) => (
   <Filter {...props}>
        <TextInput label="pos.search" source="q" alwaysOn />

    </Filter>
);



const ViewList = (props) => (

    <List {...props} filters={<VisitorFilter />} sort={{ field: 'cname2', order: 'ASC' }} perPage={100}>

        <Datagrid


        //  headerOptions={{ adjustForCheckbox: true, displaySelectAll: true }}
          bodyOptions={{ stripedRows: true, showRowHover: false, displayRowCheckbox: true }}
          rowOptions={{ selectable: true }}
          options={{ multiSelectable: true, onRowSelection : (test)=>console.log(test) }}

          >

            <TextField source="fname" label="First name" />
            <TextField source="lname" label="Last name" />
            <TextField source="cname2" label="Company" />
            <TextField source="position" label="Position" />

         <InviteButton />


        </Datagrid>
    </List>
);


export default ViewList;


/*
const VisitorDeleteTitle = translate(({ record, translate }) => <span>
    {translate('resources.customers.page.delete')}&nbsp;
    {record && <img src={`${record.avatar}?size=25x25`} width="25" alt="" />}
    {record && `${record.first_name} ${record.last_name}`}
</span>);

export const VisitorDelete = (props) => <Delete {...props} title={<VisitorDeleteTitle />} />;

*/
