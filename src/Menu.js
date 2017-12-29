
import React from 'react';
import { connect } from 'react-redux';
import { MenuItemLink, getResources, translate, DashboardMenuItem  } from 'admin-on-rest';
import compose from 'recompose/compose';
import SettingsIcon from 'material-ui/svg-icons/action/settings';

const Menu = ({ resources, onMenuTap, logout, translate }) => (
    <div>



       <DashboardMenuItem onTouchTap={onMenuTap} />




        <MenuItemLink to="/visitors" primaryText={translate('resources.visitors.name')} onClick={onMenuTap}  leftIcon={<SettingsIcon />}  />
        <MenuItemLink leftIcon={<SettingsIcon />} to="/invitations" primaryText="Comments" onClick={onMenuTap}   leftIcon={<SettingsIcon />} />
        <MenuItemLink  to="/meetups" primaryText="Miscellaneous" onClick={onMenuTap}  leftIcon={<SettingsIcon />}  />
        <MenuItemLink  to="/scans" primaryText="Miscellaneous" onClick={onMenuTap}  leftIcon={<SettingsIcon />}  />

        <MenuItemLink to="/configuration" primaryText={translate('pos.configuration')} onClick={onMenuTap}  leftIcon={<SettingsIcon />}  />


        {logout}
    </div>
);


const mapStateToProps = state => ({
  //  resources: getResources(state),
//    resources : state.admin.resources,
    locale: state.locale
})

const enhance = compose(
    connect(mapStateToProps),
    translate,
);

export default enhance(Menu);
