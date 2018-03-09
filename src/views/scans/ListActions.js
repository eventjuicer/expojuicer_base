import React from 'react';
import { CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconRefresh from 'material-ui/svg-icons/navigation/refresh';
import IconDownload from 'material-ui/svg-icons/file/file-download';

//import { ListButton } from 'admin-on-rest';
import {getToken} from '../../api/helpers';

const style = {
  zIndex: 2,
  display: 'inline-block',
  float: 'right'
};

const Actions = ({
  resource,
  filters,
  displayedFilters,
  filterValues,
  basePath,
  showFilter,
  refresh
}) => (
  <CardActions style={style}>
    {filters &&
      React.cloneElement(filters, {
        resource,
        showFilter,
        displayedFilters,
        filterValues,
        context: 'button'
      })}

    <FlatButton primary href={`https://api.eventjuicer.com/v1/restricted/scans?download=1&x-token=${ getToken() }`} label="Export" icon={<IconDownload />} />

    <FlatButton
      primary
      label="refresh"
      onClick={refresh}
      icon={<IconRefresh />}
    />

  </CardActions>
);

export default Actions;
