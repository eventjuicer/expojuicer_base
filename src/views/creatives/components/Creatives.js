import React from 'react';
import {
  translate
} from 'admin-on-rest';

import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {getCompanyId} from '../../../api/helpers';
import { httpClient } from '../../../api/restClient';
import Creative from './Creative';


class Creatives extends React.Component {

state = {
  creatives : []
}

componentDidMount()
{
  this.getCreatives();
}

getCreatives(){

  httpClient(`${process.env.REACT_APP_API_ENDPOINT}/creatives`).
  then(response => {

    this.setState({
      creatives: 'creatives' in response.json.meta ? response.json.meta.creatives : []
    });

  });

}


render()
{

  const {translate} = this.props;
  const {creatives} = this.state;

  return(

  <Card>

  <CardTitle title="Wanna join the contest? Below promo materials include your tracking link!" />

  {creatives && creatives.map((item, i) => (<Creative key={i} creative={item} />))}

  </Card>

  );
}

}



export default translate(Creatives);
