import React from 'react';

import { Heading, Subheading, Body, Border} from '../../../components/Typography';
import { Card, CardTitle } from 'material-ui/Card';
import Wrapper from '../../../components/Wrapper';
import Divider from 'material-ui/Divider';

import { Link } from 'react-router-dom';


import {translate} from 'admin-on-rest';

import IconError from 'material-ui/svg-icons/alert/error';


const Shipment = ({translate}) => (

  <Wrapper>

    <Heading>
      {translate("informer.heading.shipment")}
    </Heading>

        <Border>
          EXPO Kraków
          <p>Galicyjska 9</p>
          <p>31-586 Kraków{translate('informer.subheading.country')}</p>
        </Border>

        <br></br>
        <Body>
          <IconError /> {translate("informer.body.describe")}
        </Body>

    <Divider></Divider>

      <br></br>
   <Heading>
      {translate("informer.heading.sped")}
   </Heading>

        <img src= 'http://files.fp20.org/0Q432v1f0d3E/download/pobrane%20(1).jpeg' />

        <Border>
          {translate("informer.border.contact_person")}
        </Border>

        <Border>
          Marcin Frontczak
          <p>e-mail: <a href="mailto:marcin@transmeble.com.pl">marcin@transmeble.com.pl</a></p>
          <p>tel.: + 48 61 865 68 07</p>
          <p>tel. kom.: +48 501 710 984</p>
          <p><a href="http://www.transmeble.com.pl/">www.transmeble.com.pl</a></p>
        </Border>

    <Divider></Divider>

      <br></br>
    <Heading>
      Dostawy materiałów na halę, odbędą się w godzinach:
    </Heading>

      <Subheading>
        <ul>
          <li>{translate("informer.subheading.date.first")}</li>
          <li>{translate("informer.subheading.date.second")}</li>
        </ul>

          <IconError /> {translate("informer.subheading.deliver")}
      </Subheading>


  </Wrapper>

);

export default translate(Shipment);
