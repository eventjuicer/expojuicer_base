import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { propTypes, reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import { CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import { Notification, translate, userLogin as userLoginAction } from 'admin-on-rest';

import styles from './styles/login'
import renderInput from '../redux-form/TextInput'



class LoginByRequest extends Component {

  login = ({ email }) => {
    const { userLogin, location } = this.props;
    userLogin({ email }, location.state ? location.state.nextPathname : '/');
  }

  render() {

  const { handleSubmit, submitting, theme, translate, accentColor } = this.props;

  return (

  <form onSubmit={handleSubmit(this.login)}>
  <div style={styles.form}>
  <p style={styles.hint}>{translate("costam wtedy")}</p>

  <Field
  name="email"
  component={renderInput}
  floatingLabelText={translate('auth.fields.email')}
  />

  </div>

  <CardActions>
  <RaisedButton type="submit" primary disabled={submitting} label={translate('auth.actions.requestAccess')} fullWidth />
  </CardActions>

  </form>


        );
    }
}

LoginByRequest.propTypes = {
    ...propTypes,
    authClient: PropTypes.func,
    previousRoute: PropTypes.string,
    theme: PropTypes.object.isRequired,
    translate: PropTypes.func.isRequired,
};

LoginByRequest.defaultProps = {
    theme: {},
};

const enhance = compose(
    translate,
    reduxForm({
        form: 'signInByRequest',
        validate: (values, props) => {
            const errors = {};
            const { translate } = props;
            if (!values.email) errors.email = translate('aor.validation.required');
            // if (!values.password) errors.password = translate('aor.validation.required');
            return errors;
        },
    }),
    connect(null, { userLogin: userLoginAction }),
);

export default enhance(LoginByRequest);
