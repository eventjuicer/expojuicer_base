import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import { translate } from 'admin-on-rest';
import { stringify } from 'query-string';

import Icon from 'material-ui/svg-icons/editor/insert-invitation';

const InviteButton = ({ record, translate }) => (
  <FlatButton
    primary
    label={translate('resources.visitors.actions.invite')}
    icon={<Icon />}
    containerElement={
      <Link
        to={{
          pathname: `/meetups/create`,
          search: stringify({ participant_id: record.id })
          //search: stringify({ filter: JSON.stringify({ category_id: record.id }) }),
        }}
      />
    }
  />
);

export default translate(InviteButton);
