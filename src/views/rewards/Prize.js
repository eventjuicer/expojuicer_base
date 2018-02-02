import React from 'react';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';

import Bulb from 'material-ui/svg-icons/image/brightness-1';
//import Rejected from 'material-ui/svg-icons/action/lightbulb-outline';
import Warning from 'material-ui/svg-icons/alert/warning';

import { translate, Textfield } from 'admin-on-rest';

import {
  failure,
  success,
  disabledBg,
  disabledHeader,
  disabledSubheader
} from '../../styles/colors';

//import Photogrid from './Photogrid';

const rewarded = (prize, position, sessions) => {
  const level = 'level' in prize ? prize.level : 0;

  if (!sessions) {
    return null;
  }

  if (prize.min <= position && position <= prize.max && level < sessions) {
    return true;
  }

  return false;
};

const avatar = (prize, position, sessions) => {
  const status = rewarded(prize, position, sessions);

  if (status === null) {
    return <Warning color="#F44336" />;
  }

  if (status) {
    return <Bulb color={success} />;
  }

  return <Bulb color={disabledHeader} />;
};

const conditions = ({ min, max, level }) => {
  const levelInfo = level ? `, minimum ${level} points.` : '';

  if (min === max) {
    if (min === 1) {
      return `You must be the Winner`;
    }

    return `Only for position #${min}${levelInfo}`;
  }

  return `Your position must be beetween #${min} and #${max}${levelInfo}`;
};

const Prize = ({ translate, prize, position, sessions }) => (
  <Card
    containerStyle={
      !rewarded(prize, position, sessions)
        ? { backgroundColor: disabledBg }
        : {}
    }
  >
    <CardTitle
      title={translate(`prizes.${prize.name}.title`)}
      titleStyle={{ fontSize: 16, lineHeight: '26px' }}
      subtitle={translate(`prizes.${prize.name}.description`)}
      //  actAsExpander={true}
      //    showExpandableButton={true}
    />

    {/* <CardText expandable={true}>
        <Photogrid />
        </CardText> */}

    <CardHeader
      title={conditions(prize)}
      avatar={avatar(prize, position, sessions)}
    />
  </Card>
);

//
//

export default translate(Prize);
