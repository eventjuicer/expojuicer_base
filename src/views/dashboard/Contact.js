import React from 'react';

import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import { Card } from 'material-ui/Card';

import { translate } from 'admin-on-rest';


const Contact = ({translate}) => (

  <Card>
    <List>
      <ListItem
        disabled={true}
        leftAvatar={
          <Avatar src="https://d3vv6lp55qjaqc.cloudfront.net/items/1x2X1e340Y2S0I2b2u2G/23627468_1656964947687397_924271866_o%20(1).jpg" />
        }
      >
        <b>Potrzebujesz więcej informacji?</b> Skontaktuj się ze mną mailowo lub telefonicznie!

          <p><img src="http://files.fp20.org/1l2j0d0X2j1J/mail-512.png" width="20" height="20" /> email: bartosz.meller@targiehandlu.com.pl</p>

          <p><img src="http://files.fp20.org/0A19473G100q/phone.png" width="20" height="20"/> tel: +48 721 945 134</p>

      </ListItem>
    </List>
  </Card>

);

export default translate(Contact);
