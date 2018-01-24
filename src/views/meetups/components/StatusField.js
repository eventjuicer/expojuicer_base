import React from 'react';
import PropTypes from 'prop-types';


import Approved from 'material-ui/svg-icons/action/thumb-up';
import Rejected from 'material-ui/svg-icons/action/thumb-down';
import Waiting from 'material-ui/svg-icons/action/hourglass-empty';
import Scheduled from 'material-ui/svg-icons/action/hourglass-empty';

class StatusField extends React.Component {

  render()
  {
    const {record} = this.props;

    if(record.agreed)
    {
      if(record.scheduled_at !== "")
      {
          return <Scheduled color="blue" />;
      }

      return <Approved color="blue" />;
    }
    else
    {
      if(record.responded_at !== "")
      {
        return <Rejected />;
      }
    }

    return <Waiting />;

  }

}



export default StatusField;
