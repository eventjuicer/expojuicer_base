import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

import Approved from 'material-ui/svg-icons/action/thumb-up';
import Rejected from 'material-ui/svg-icons/action/thumb-down';
import Warning from 'material-ui/svg-icons/alert/warning';

import { translate } from 'admin-on-rest';

import {
  red300 as failure,
  green300 as success
} from 'material-ui/styles/colors';

const rewarded = (prize, position, sessions) => {
  const level = 'level' in prize ? prize.level : 0;

  if (!sessions) {
    return <Warning color="#F44336" />;
  }

  if (prize.min <= position && position <= prize.max && level < sessions) {
    return <Approved color={success} />;
  }

  return <Rejected color={failure} />;
};

const conditions = ({ min, max, level }) => {
  const levelInfo = level ? `, minimum ${level} points.` : '';

  if (min === max) {
    return `Only for #${min}${levelInfo}`;
  }

  return `Position beetween #${min} and #${max}${levelInfo}`;
};

const Prize = props => (
  <Card>
    <CardHeader
      title={props.translate(`prizes.${props.prize.name}.title`)}
      subtitle={conditions(props.prize)}
      avatar={rewarded(props.prize, props.position, props.sessions)}
      actAsExpander={true}
      showExpandableButton={true}
    />

    <CardText expandable={true}>
      {props.translate(`prizes.${props.prize.name}.description`)}
    </CardText>
  </Card>
);

export default translate(Prize);
