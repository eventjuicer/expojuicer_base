import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import { translate, userLogout as userLogoutAction } from 'admin-on-rest';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import compose from 'recompose/compose';

class Logout extends Component {


	logout = () => {

		alert("logout");
		this.props.userLogout({});
	}

	render(){

		const {translate, userLogout} = this.props;

		return (

			<MenuItem
            
            primaryText={translate('logout')}
              containerElement={<Link to={`/login`} />}
            leftIcon={<SettingsIcon />}
           	onTouchTap={() => this.logout() }

        />

        )
	}
}



const enhance = compose(
    connect(state => ({
        locale: state.locale,
    }), {userLogout : userLogoutAction}),
    translate,
);

export default enhance(Logout);

