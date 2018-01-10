
import React from 'react';
import { connect } from 'react-redux';
import { MenuItemLink, getResources, translate, DashboardMenuItem, WithPermission  } from 'admin-on-rest';
import compose from 'recompose/compose';
import SettingsIcon from 'material-ui/svg-icons/action/settings';




import ContentInbox from 'material-ui/svg-icons/content/inbox';




const Menu = ({ resources, onMenuTap, logout, translate }) => (

<div>


<DashboardMenuItem onTouchTap={onMenuTap} />
<MenuItemLink to="/visitors" primaryText={translate('resources.visitors.name')} onClick={onMenuTap}  leftIcon={<SettingsIcon />}  />
<MenuItemLink  to="/invitations" primaryText={translate('resources.invitations.name')} onClick={onMenuTap}   leftIcon={<SettingsIcon />} />
<MenuItemLink  to="/meetups" primaryText={translate('resources.meetups.name')} onClick={onMenuTap}  leftIcon={<SettingsIcon />}  />
<MenuItemLink  to="/scans" primaryText={translate('resources.scans.name')} onClick={onMenuTap}  leftIcon={<SettingsIcon />}  />
<MenuItemLink  to="/creatives" primaryText={translate('resources.creatives.name')} onClick={onMenuTap}  leftIcon={<SettingsIcon />}  />
<MenuItemLink  to="/newsletters" primaryText={translate('resources.newsletters.name')} onClick={onMenuTap}  leftIcon={<SettingsIcon />}  />
<MenuItemLink to="/ranking" primaryText={translate('pos.ranking')} onClick={onMenuTap}  leftIcon={<SettingsIcon />}  />


<WithPermission value="admin">
<MenuItemLink to="/configuration" primaryText={translate('pos.configuration')} onClick={onMenuTap}  leftIcon={<SettingsIcon />}  />
</WithPermission>

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
