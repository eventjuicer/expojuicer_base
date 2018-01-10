import React, { Component } from 'react';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import {
  MenuItemLink,
  translate,
  userLogout as userLogoutAction
} from 'admin-on-rest';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

class Logout extends Component {
  logout = () => {
    const { userLogout } = this.props;

    userLogout({});
  };

  render() {
    const { translate } = this.props;

    return (
      <MenuItemLink
        to="/login?bye"
        primaryText={translate('aor.logout')}
        onClick={() => this.logout()}
        leftIcon={<SettingsIcon />}
      />
    );
  }
}

const enhance = compose(
  connect(
    state => ({
      locale: state.locale
    }),
    { userLogout: userLogoutAction }
  ),
  translate
);

export default enhance(Logout);
