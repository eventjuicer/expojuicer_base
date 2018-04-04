
import React from 'react';
import { CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Eye, Refresh} from 'mdi-material-ui';

import {
  translate,
  // ListButton,
  // EditButton,
  // DeleteButton
} from 'admin-on-rest';

import { getProfileUrl } from '../../api/helpers'

const style = {
  zIndex: 2,
  display: 'inline-block',
  float: 'right'
};



const Actions = ({ basePath, data, refresh, resource, translate, ...rest }) => (

  <CardActions style={style}>

    {console.log(rest)}

    <FlatButton
      primary
      label={translate(`resources.${resource}.actions.preview`)}
      href={getProfileUrl()}
      target="_blank"
      icon={<Eye />}
    />

    {/* <EditButton basePath={basePath} record={data} />
    <ListButton basePath={basePath} />
    <DeleteButton basePath={basePath} record={data} /> */}

    <FlatButton
      primary
      label="Refresh"
      onClick={refresh}
      icon={<Refresh />}
    />
    {/* Add your custom actions */}
    {/* <FlatButton primary label="Custom Action" onClick={customAction} /> */}
  </CardActions>
);

export default translate(Actions);