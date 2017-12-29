import 'babel-polyfill';
import React from 'react';
import { Admin, Delete, Resource } from 'admin-on-rest';

import './App.css';


import authClient from './api/authClient';
import Login from './meetup/Login';
import Dashboard from './meetup/Dashboard';
import Logout from './meetup/Logout';
import restClient from './api/restClient';
import sagas from './meetup-redux/sagas';
import reducers from './meetup-redux/reducers';


import {
  ViewList as VisitorList,
  ViewEdit as VisitorEdit,
  ViewEdit as VisitorShow,
  ViewIcon as VisitorIcon
} from './visitors';

import {
  ViewList as MeetupList,
  ViewEdit as MeetupEdit,
  ViewIcon as MeetupIcon
} from './meetup';

import {
  ViewList as InvitationList,
  ViewCreate as InvitationCreate,
  ViewEdit as InvitationEdit,
  ViewIcon as InvitationIcon
} from './invitations';



import NotFound from './meetup/NotFound';

import Menu from './Menu';
import customRoutes from './routes';
import translations from './i18n';

import { CommandList, CommandEdit, CommandIcon } from './aordemo/commands';



class App extends React.Component {

    render() {
        return (
            <Admin
                catchAll={NotFound}
                title="Exhibitordeck"
                restClient={restClient}
                customReducers={reducers}
                customSagas={sagas}
                customRoutes={customRoutes}
                authClient={authClient}
                dashboard={Dashboard}
                loginPage={Login}
                logoutButton={Logout}
             menu={Menu}
                messages={translations}
            >

              <Resource name="visitors"  options={{ label: 'Visitors' }} list={VisitorList} edit={VisitorEdit}  icon={CommandIcon} />

              <Resource name="invitations" options={{ label: 'Invitations' }} list={InvitationList} edit={InvitationEdit} create={InvitationCreate}  icon={CommandIcon} />

              <Resource name="meetups"  options={{ label: 'Meetups' }} list={MeetupList} edit={MeetupEdit} icon={MeetupIcon} />

              <Resource name="scans"  options={{ label: 'Scans' }} list={MeetupList} edit={MeetupEdit} icon={MeetupIcon} />


               </Admin>
        );
    }
}

export default App;
