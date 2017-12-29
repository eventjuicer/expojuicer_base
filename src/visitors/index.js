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

import FullNameField from '../fields/FullNameField';
import InviteButton from '../buttons/InviteButton';

export {Icon as ViewIcon} from 'material-ui/svg-icons/social/person';

const VisitorFilter = (props) => (
   <Filter {...props}>
        <TextInput label="pos.search" source="q" alwaysOn />

    </Filter>
);

const colored = WrappedComponent => props => props.record[props.source] > 500 ?
    <span style={{ color: 'red' }}><WrappedComponent {...props} /></span> :
    <WrappedComponent {...props} />;

const ColoredNumberField = colored(NumberField);
ColoredNumberField.defaultProps = NumberField.defaultProps;

export const ViewList = (props) => (

    <List {...props} filters={<VisitorFilter />} sort={{ field: 'cname2', order: 'ASC' }} perPage={100}>
        <Datagrid

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

const ViewTitle = ({ record }) => record ? <FullNameField record={record} size={32} /> : null;

export const ViewEdit = (props) => (
    <Edit title={<ViewTitle />} {...props}>
        <TabbedForm>
            <FormTab label="resources.visitors.tabs.invitation">

                <TextInput source="first_name" style={{ display: 'inline-block' }} />
                <TextInput source="last_name" style={{ display: 'inline-block', marginLeft: 32 }} />
                <TextInput type="email" source="email" validation={{ email: true }} options={{ fullWidth: true }} style={{ width: 544 }} />

                <LongTextInput label="resources.visitors.tabs.message" source="invitation" style={{ maxWidth: 544 }} />


            </FormTab>


               {
                /*

            <FormTab label="resources.customers.tabs.address">
                <LongTextInput source="address" style={{ maxWidth: 544 }} />
                <TextInput source="zipcode" style={{ display: 'inline-block' }} />
                <TextInput source="city" style={{ display: 'inline-block', marginLeft: 32 }} />
            </FormTab>


            <FormTab label="resources.customers.tabs.orders">
                <ReferenceManyField addLabel={false} reference="commands" target="customer_id">
                    <Datagrid>
                        <DateField source="date" />
                        <TextField source="reference" />
                        <NbItemsField />
                        <NumberField source="total" options={{ style: 'currency', currency: 'USD' }} />
                        <TextField source="status" />
                        <EditButton />
                    </Datagrid>
                </ReferenceManyField>
            </FormTab>

          <FormTab label="resources.customers.tabs.reviews">
                <ReferenceManyField addLabel={false} reference="reviews" target="customer_id">
                    <Datagrid filter={{ status: 'approved' }}>
                        <DateField source="date" />
                        <ProductReferenceField />
                        <StarRatingField />
                        <TextField source="comment" style={{ maxWidth: '20em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} />
                        <EditButton style={{ padding: 0 }} />
                    </Datagrid>
                </ReferenceManyField>
            </FormTab>

        */ }


        </TabbedForm>
    </Edit>
);

/*
const VisitorDeleteTitle = translate(({ record, translate }) => <span>
    {translate('resources.customers.page.delete')}&nbsp;
    {record && <img src={`${record.avatar}?size=25x25`} width="25" alt="" />}
    {record && `${record.first_name} ${record.last_name}`}
</span>);

export const VisitorDelete = (props) => <Delete {...props} title={<VisitorDeleteTitle />} />;

*/
