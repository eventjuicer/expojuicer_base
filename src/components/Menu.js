import React from 'react';
import { connect } from 'react-redux';
import {
  MenuItemLink,
  getResources,
  translate,
  DashboardMenuItem,
  WithPermission
} from 'admin-on-rest';
import compose from 'recompose/compose';

import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

//import SettingsIcon from 'material-ui/svg-icons/action/settings';
//import ContentInbox from 'material-ui/svg-icons/content/inbox';

import IconPeople from 'material-ui/svg-icons/social/people';
import IconStatus from 'material-ui/svg-icons/action/today';
import IconTrend from 'material-ui/svg-icons/action/trending-up';
import IconShare from 'material-ui/svg-icons/av/volume-up';
import IconRewards from 'material-ui/svg-icons/action/favorite';
import IconImports from 'material-ui/svg-icons/communication/contact-mail';

import Modal from './Modal';
import Chatlio from '../services/Chatlio';

const Menu = ({ resources, onMenuTap, logout, translate }) => (
  <div>
    <DashboardMenuItem onTouchTap={onMenuTap} />

    <Subheader>Promote your participation</Subheader>

    <MenuItemLink
      to="/ranking"
      primaryText={translate('resources.ranking.menu')}
      onClick={onMenuTap}
      leftIcon={<IconTrend />}
    />

    {/*

    <MenuItemLink
      to="/campaigns"
      primaryText={translate('resources.campaigns.menu')}
      onClick={onMenuTap}
      leftIcon={<SettingsIcon />}
    />

    <MenuItemLink
      to="/contacts"
      primaryText={translate('resources.contacts.menu')}
      onClick={onMenuTap}
      leftIcon={<SettingsIcon />}
    />

*/}

    <MenuItemLink
      to="/rewards"
      primaryText={translate('resources.rewards.menu')}
      onClick={onMenuTap}
      leftIcon={<IconRewards />}
    />

    <MenuItemLink
      to="/creatives"
      primaryText={translate('resources.creatives.menu')}
      onClick={onMenuTap}
      leftIcon={<IconShare />}
    />
{/* 
    <MenuItemLink
      to="/contacts"
      primaryText={translate('resources.contacts.menu')}
      onClick={onMenuTap}
      leftIcon={<IconImports />}
    /> */}

    <Subheader>{translate('pos.sections.suggest_a_meeting')}</Subheader>

    <MenuItemLink
      to="/meetups"
      primaryText={translate('resources.meetups.menu')}
      onClick={onMenuTap}
      leftIcon={<IconStatus />}
    />

    <MenuItemLink
      to="/visitors"
      primaryText={translate('resources.visitors.menu')}
      onClick={onMenuTap}
      leftIcon={<IconPeople />}
    />

    {/*

      <Subheader>Your leads</Subheader>

    <MenuItemLink
      to="/scans"
      primaryText={translate('resources.scans.menu')}
      onClick={onMenuTap}
      leftIcon={<SettingsIcon />}
    />

    <Subheader>Your library</Subheader>

    <MenuItemLink
      to="/newsletters"
      primaryText={translate('resources.newsletters.menu')}
      onClick={onMenuTap}
      leftIcon={<SettingsIcon />}
    />

    <Divider />

    <WithPermission value="megakozak">
      <MenuItemLink
        to="/configuration"
        primaryText={translate('pos.configuration')}
        onClick={onMenuTap}
        leftIcon={<SettingsIcon />}
      />
    </WithPermission>

*/}

    <Divider />

    {logout}

    <Modal />
    <Chatlio />
  </div>
);

const mapStateToProps = state => ({
  resources: getResources(state),
  //    resources : state.admin.resources,
  locale: state.locale
});

const enhance = compose(connect(mapStateToProps), translate);

export default enhance(Menu);
