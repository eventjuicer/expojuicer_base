import React from 'react';

import Approved from 'material-ui/svg-icons/action/thumb-up';
import Rejected from 'material-ui/svg-icons/action/thumb-down';
import Waiting from 'material-ui/svg-icons/action/hourglass-empty';
import Scheduled from 'material-ui/svg-icons/action/hourglass-empty';

import {status} from './status';



const StatusField = (props) => {

    const intStatus = status(props.record);

    if (intStatus > 0 ) {
      if (intStatus === 2) {
        return <Scheduled color="blue" />;
      }

      return <Approved color="blue" />;
    } else {
      if (intStatus === -2) {
        return <Rejected />;
      }
    }

    return <Waiting />;

}


export default StatusField;
