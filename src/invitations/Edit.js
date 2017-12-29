
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

import {Title} from './Shared';

export const InviteIcon = Icon;

const ViewEdit = (props) => (
    <Edit title={<Title />} {...props}>
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

export default ViewEdit;
