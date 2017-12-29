import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import { translate } from 'admin-on-rest';
import { stringify } from 'query-string';

import ActionDelete from 'material-ui/svg-icons/editor/insert-invitation';

const InviteButton = ({ record, translate }) => (
    <FlatButton
        primary
        label="Invite srajte"
        icon={<ActionDelete />}
        containerElement={<Link to={{
            pathname: `/visitors/${record.id}`,
           // search : stringify({participant_id : record.id})
            //search: stringify({ filter: JSON.stringify({ category_id: record.id }) }),
        }} />}
    />
);

export default translate(InviteButton);







