import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import { Card, CardTitle, CardText } from 'material-ui/Card';

import {
  translate
} from 'admin-on-rest';


const NoResults = (props) => (
  props.specialmessage ? <Card>

    <CardTitle style={{backgroundColor : "yellow"}} title={props.translate(`${props.specialmessage}.noresults`)} />
    <CardText>
    {props.translate(`${props.specialmessage}.noresultsmore`)}
    </CardText>
  </Card> : null
);

const mapStateToProps = state => ({
  specialmessage: state.specialmessage
});

const enhance = compose(
  translate,
  connect(mapStateToProps, null)
);

export default enhance(NoResults);
