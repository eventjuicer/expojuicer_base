import React from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { getUserData, getCompanyName } from '../api/helpers';

import Logout from './Logout';

class AppBarTitle extends React.Component {
  state = {
    value: ''
  };

  handleChange = () => {};

  render() {
    return (
      <div>
        {`${getUserData('profile.fname')} @ ${getCompanyName()} `}

        <Logout icon />
      </div>
    );
  }
}

export default AppBarTitle;
