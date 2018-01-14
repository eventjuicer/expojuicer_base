//import 'babel-polyfill';
import React from 'react';
import { Admin, Resource } from 'admin-on-rest';

import Dashboard from './dashboard';

import AppBarTitle from './components/AppBarTitle';
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



import {
  ViewList as MeetupList,
  ViewEdit as MeetupEdit,
  ViewCreate as MeetupCreate,
  ViewIcon as MeetupIcon
} from './crud/meetups';



import {
  ViewList as VisitorList,
  // ViewEdit as VisitorEdit,
  // ViewEdit as VisitorShow,
  ViewIcon as VisitorIcon
} from './crud/visitors';

import {
  ViewList as NewsletterList,
  ViewEdit as NewsletterEdit,
  ViewCreate as NewsletterCreate,
  ViewIcon as NewsletterIcon
} from './crud/newsletters';



import {
  ViewList as CampaignList,
  ViewCreate as CampaignCreate,
  ViewEdit as CampaignEdit,
  ViewIcon as CampaignIcon
} from './crud/campaigns';

import {
  ViewList as ImportList,
  ViewCreate as ImportCreate,
  ViewEdit as ImportEdit,
  ViewIcon as ImportIcon
} from './crud/imports';

import {
  ViewList as ContactList,
  ViewCreate as ContactCreate,
  ViewEdit as ContactEdit,
  ViewIcon as ContactIcon
} from './crud/contacts';


import {
  ViewList as ScanList,
  ViewEdit as ScanEdit,
  ViewIcon as ScanIcon
} from './crud/scans';


class App extends React.Component {
  render() {
    return (
      <Admin
        catchAll={NotFound}
        title={<AppBarTitle />}
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

        <Resource
          name="meetups"
          list={MeetupList}
          edit={MeetupEdit}
          create={MeetupCreate}
          icon={MeetupIcon}
        />

        <Resource
          name="visitors"
          list={VisitorList}
          icon={VisitorIcon} />



        <Resource
          name="campaigns"
          list={CampaignList}
          edit={CampaignEdit}
          create={CampaignCreate}
          icon={CampaignIcon}
        />



          <Resource
            name="contacts"
            list={ContactList}
            edit={ContactEdit}
            create={ContactCreate}
            icon={ContactIcon}
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
          list={ScanList}
          edit={ScanEdit}
          icon={ScanIcon}
        />
      </Admin>
    );
  }
}

export default App;
