import React from 'react';

import { Heading, Subheading } from '../../../components/Typography';
import Wrapper from '../../../components/Wrapper';

import {translate} from 'admin-on-rest';

// import IconError from 'material-ui/svg-icons/alert/error';


const Assembly = ({translate}) => (

<Wrapper>

  <Heading>
    {translate("informer.heading.assembly")}
  </Heading>

    <Subheading>
      <ul>
        <li>{translate("informer.subheading.assembly.first")}</li>
        <li>{translate("informer.subheading.assembly.second")}</li>
      </ul>
    </Subheading>

  <Heading>
    {translate("informer.heading.disassembly")}
  </Heading>

    <Subheading>
      <ul>
        <li>{translate("informer.subheading.disassembly")}</li>
      </ul>
    </Subheading>

  <Heading>
    {translate("informer.heading.unloading")}
  </Heading>

    <Subheading>
      <ul>
        <li>{translate("informer.subheading.unloading.info_1")}</li>
        <li>{translate("informer.subheading.unloading.info_2")}</li>
        <li>{translate("informer.subheading.unloading.info_3")}</li>
      </ul>
    </Subheading>
</Wrapper>

);

export default translate(Assembly);
