import React from 'react';

import { Heading, Subheading, Body } from '../../../components/Typography';
import Wrapper from '../../../components/Wrapper';
import Divider from 'material-ui/Divider';

import { Link } from 'react-router-dom';


import {translate} from 'admin-on-rest';


const ExhibitionSpace = ({translate}) => (
<Wrapper>

  <Heading>
    {translate("informer.heading.exhibition_space")}
  </Heading>

    <Subheading>
      {translate("informer.subheading.area")}
    </Subheading>

      <Body>
        <ul>
          <li>{translate("informer.body.area_1")}</li>
          <p></p>
          <li>{translate("informer.body.area_2")}</li>
        </ul>
      </Body>


    <Subheading>{
      translate("informer.subheading.equipment")}
    </Subheading>

      <Body>
        <ul>
          <li>{translate("informer.body.equipment.hocker")}</li>
          <li>{translate("informer.body.equipment.table")}</li>
          <li>{translate("informer.body.equipment.voucher")}</li>
          <li>{translate("informer.body.equipment.wifi")}</li>
          <li>{translate("informer.body.equipment.electricity")}</li>
        </ul>
      </Body>

  <Divider></Divider>

  <Heading>
    <br></br>
    {translate("informer.heading.add_equipment")}
  </Heading>

    <Subheading>
      <ul>
        <li>{translate("informer.subheading.add_equipment")}</li>
        <p></p>
        <li>{translate("informer.subheading.construction")}<a href="mailto:joanna.bartoszewicz@allinevent.pl">joanna.bartoszewicz@allinevent.pl</a></li>
      </ul>
    </Subheading>

    <Divider></Divider>

  <Heading>
    <br></br>
    {translate("informer.heading.representative")}
  </Heading>

    <Subheading>
      {translate("informer.body.reps_info")}<Link to={{ pathname: '/representatives' }}>
      {translate('resources.representatives.name')}</Link>.
    </Subheading>

</Wrapper>





);

export default translate(ExhibitionSpace);
