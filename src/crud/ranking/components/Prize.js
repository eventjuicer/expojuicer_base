import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

import Approved from 'material-ui/svg-icons/action/thumb-up';
import Rejected from 'material-ui/svg-icons/action/thumb-down';
import Warning from 'material-ui/svg-icons/alert/warning';

import {
  translate
} from 'admin-on-rest';



const rewarded = (prize, position, sessions) => {

  if(!sessions)
  {
    return <Warning  color="#F44336"  />;
  }

  if(prize.min <= position && position <= prize.max)
  {
    return <Approved color="#4CAF50" />;
  }

  return <Rejected color="#F44336"  />;
}


const conditions = (min, max) => {

  if(min === max)
  {
    return `Place # ${min}`;
  }

  return `Places from ${min} to ${max}`;
}

const Prize = (props) => (
  <Card>
    <CardHeader
      title={props.translate(`prizes.${props.prize.name}.title`)}
      subtitle={conditions(props.prize.min, props.prize.max)}
      avatar={ rewarded(props.prize, props.position, props.sessions) }
      actAsExpander={true}
      showExpandableButton={true}
    />

    <CardText expandable={true}>
  {props.translate(`prizes.${props.prize.name}.description`)}


  


    </CardText>
  </Card>
);

export default translate(Prize);
