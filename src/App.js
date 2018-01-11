import 'babel-polyfill';
import React from 'react';
import { Admin, Resource } from 'admin-on-rest';

import Dashboard from './components/Dashboard';
import Logins from './components/Logins';

import Logout from './components/Logout';
import NotFound from './components/NotFound';
import Menu from './components/Menu';

import authClient from './api/authClient';
import restClient from './api/restClient';

import sagas from './redux/sagas';
import reducers from './redux/reducers';

import customRoutes from './routes';
import translations from './i18n';
import { getCompanyName } from './api/helpers';

import {
  ViewList as VisitorList,
  // ViewEdit as VisitorEdit,
  // ViewEdit as VisitorShow,
  ViewIcon as VisitorIcon
} from './visitors';

import {
  ViewList as NewsletterList,
  ViewEdit as NewsletterEdit,
  ViewCreate as NewsletterCreate,
  ViewIcon as NewsletterIcon
} from './newsletters';

import {
  ViewList as MeetupList,
  //ViewEdit as MeetupEdit,
  ViewCreate as MeetupCreate,
  ViewIcon as MeetupIcon
} from './meetup';

import {
  ViewList as InvitationList,
  ViewCreate as InvitationCreate,
  ViewEdit as InvitationEdit,
  ViewIcon as InvitationIcon
} from './invitations';

class App extends React.Component {
  render() {
    return (
      <Admin
        catchAll={NotFound}
        title={`expojuicer ${getCompanyName()}`}
        restClient={restClient}
        customReducers={reducers}
        customSagas={sagas}
        customRoutes={customRoutes}
        authClient={authClient}
        dashboard={Dashboard}
        loginPage={Logins}
        logoutButton={Logout}
        menu={Menu}
        messages={translations}
      >
        <Resource name="visitors" list={VisitorList} icon={VisitorIcon} />
        <Resource
          name="invitations"
          list={InvitationList}
          edit={InvitationEdit}
          create={InvitationCreate}
          icon={NewsletterIcon}
        />
        <Resource
          name="meetups"
          list={MeetupList}
          create={MeetupCreate}
          icon={MeetupIcon}
        />
        <Resource
          name="creatives"
          list={MeetupList}
          edit={MeetupCreate}
          icon={MeetupIcon}
        />
        <Resource
          name="newsletters"
          list={NewsletterList}
          edit={NewsletterEdit}
          create={NewsletterCreate}
          icon={NewsletterIcon}
        />
        <Resource
          name="scans"
          options={{ label: 'Scans' }}
          list={MeetupList}
          edit={MeetupCreate}
          icon={MeetupIcon}
        />
      </Admin>
    );
  }
}

export default App;
