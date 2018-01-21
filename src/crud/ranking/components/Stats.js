

import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import { Card, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import {
  translate,
  ViewTitle
} from 'admin-on-rest';

import {getUserData} from '../../../api/helpers';
import { httpClient } from '../../../api/restClient';
import Prize from './Prize';

class Stats extends React.Component {

  state = {
    stats: {},
    prizes : [],
    position : 0
  };

  componentDidMount()
  {
    this.getRanking();
  }

  getRanking = () => {

    httpClient(`${process.env.REACT_APP_API_ENDPOINT}/prizes`).
    then(response => {
      if ('data' in response.json && "stats" in response.json.data)
      {
        this.setState({
          stats: response.json.data.stats,
          prizes : response.json.meta.prizes,
          position : response.json.data.position
        });
      }
    });

  }

  renderPrizes()
  {

  }

  // shouldComponentUpdate(nextProps, nextState)
  // {
  //
  // }

  countPosition()
  {
      const { stats } = this.state;
      const { ranking} = this.props;



      if(ranking.list.ids)
      {
        return ranking.list.ids.indexOf();
      }


  }

  render()
  {


    const {translate} = this.props;
    const {stats, prizes, position} = this.state;

    return (

      <Card>

        <ViewTitle title={`${translate('prizes.name')} for ${getUserData('domain')}`} />

        <CardText>


{/*
            <CardActions>
               <FlatButton label="Action1" />
               <FlatButton label="Action2" />
             </CardActions>
*/}

          <p>

            Your current position: {stats.sessions ? position : `unknown`}

          </p>

          {prizes && prizes.map(item => <Prize prize={ item } position={ position } sessions={stats.sessions} />) }

        </CardText>
      </Card>

    );


  }
}

// const mapStateToProps = state => ({
//   ranking: state.admin.resources.ranking
// });
//
//
// const enhance = compose(
//   translate,
//   connect(mapStateToProps, null)
// );

export default translate(Stats);
