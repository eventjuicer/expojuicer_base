import React, { Component } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { CardText } from 'material-ui/Card';
import {
  Notification,
  ViewTitle,
  translate,
  userLogin as userLoginAction
} from 'admin-on-rest';
import qs from 'query-string';
import get from 'lodash/get';

import { validateToken } from '../api/helpers';

class LoginByToken extends Component {
  state = {
    token: ''
  };

  componentWillMount = () => {
    const { userLogin, location } = this.props;

    const token = get(qs.parse(location.search), 'token', '');

    if (validateToken(token)) {
      this.setState({ token: token });

      userLogin({ token: token }, '/');
    }
  };

  render() {
    const { translate } = this.props;
    return (
      <div>
        {/*
    <ViewTitle title={translate('auth.unauthorized')} />
  <CardText></CardText>
  */}
      </div>
    );
  }
}

const enhance = compose(
  translate,
  connect(null, { userLogin: userLoginAction })
);

export default enhance(LoginByToken);
