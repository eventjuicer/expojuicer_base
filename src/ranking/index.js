

import React from 'react';

import { Card, CardText } from 'material-ui/Card';

import {
  translate,
  Restricted,
  ViewTitle
} from 'admin-on-rest';




import Ga from './Ga';





const Ranking = ({ theme, locale, changeTheme, changeLocale, translate, location }) => (

  <Restricted authParams={{ foo: 'bar' }} location={location}>

  <Card>
    <ViewTitle title={translate('pos.configuration')} />

    <CardText>

          <Ga />

    </CardText>
  </Card>
</Restricted>
);



export default translate(Ranking);
