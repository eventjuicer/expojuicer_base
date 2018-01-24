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
  ViewCreate as MeetupCreate
} from './crud/meetups';

import {
  ViewList as VisitorList,
  // ViewEdit as VisitorEdit,
  // ViewEdit as VisitorShow,
} from './crud/visitors';

import {
  ViewList as CreativeList,
  ViewEdit as CreativeEdit,
  ViewCreate as CreativeCreate
} from './crud/creatives';

import {
  ViewList as CampaignList,
  ViewCreate as CampaignCreate,
  ViewEdit as CampaignEdit
} from './crud/campaigns';

import {
  ViewList as ImportList,
  ViewCreate as ImportCreate,
  ViewEdit as ImportEdit
} from './crud/imports';

import {
  ViewList as ContactList,
  ViewCreate as ContactCreate,
  ViewEdit as ContactEdit
} from './crud/contacts';


import {
  ViewList as ScanList,
  ViewEdit as ScanEdit
} from './crud/scans';


import {
  ViewList as RankingList
} from './crud/ranking';


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

        />

        <Resource
          name="visitors"
          list={VisitorList}

       />



        <Resource
          name="campaigns"
          list={CampaignList}
          edit={CampaignEdit}
          create={CampaignCreate}

        />


        <Resource
          name="ranking"
          list={RankingList}

        />


          <Resource
            name="contacts"
            list={ContactList}
            edit={ContactEdit}
            create={ContactCreate}

          />

        <Resource
          name="creatives"
          list={CreativeList}
          edit={CreativeEdit}

        />

        <Resource
          name="newsletters"
          list={CreativeList}
          edit={CreativeEdit}
          create={CreativeCreate}

        />
        <Resource
          name="scans"
          options={{ label: 'Scans' }}
          list={ScanList}
          edit={ScanEdit}

        />
      </Admin>
    );
  }
}

export default App;
