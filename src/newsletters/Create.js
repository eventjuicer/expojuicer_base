
import React from 'react';
import {
    translate,
    Create,
    EditButton,
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




const ViewCreate = (props) => (
    <Create {...props}>
        <TabbedForm>
            <FormTab label="resources.visitors.tabs.invitation">

              <TextInput source="name" label="resources.newsletters.inputs.name"  />

              <TextInput source="data.sender_name" label="pos.sros" style={{ display: 'inline-block' }} />
              <TextInput type="email" source="data.sender_email" validation={{ email: true }}  style={{ display: 'inline-block', marginLeft: 32 }} />

              <LongTextInput label="resources.newsletters.inputs.template" source="data.template" style={{ maxWidth: 544 }} />


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
    </Create>
);

export default ViewCreate;
