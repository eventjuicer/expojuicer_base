import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import Chip from 'material-ui/Chip';
import FlatButton from 'material-ui/FlatButton';

import { translate, ViewTitle, Restricted } from 'admin-on-rest';

import { Card, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';

import { getUserData } from '../../api/helpers';
import { httpClient } from '../../api/restClient';
import Prize from './Prize';

import { Link } from 'react-router-dom';

const styles = {
  chip: {
    marginLeft: 20,
    marginBottom: 20
  }
};

class Stats extends React.Component {
  state = {
    stats: {},
    prizes: [],
    position: 0
  };

  componentDidMount() {
    this.getRanking();
  }

  getRanking() {
    httpClient(`${process.env.REACT_APP_API_ENDPOINT}/prizes`).then(
      response => {
        this.setState({
          stats: 'stats' in response.json.data ? response.json.data.stats : {},
          prizes: 'meta' in response.json ? response.json.meta.prizes : [],
          position:
            'position' in response.json.data ? response.json.data.position : 0
        });
      }
    );
  }

  render() {
    const { translate } = this.props;
    const { stats, prizes, position } = this.state;
    const { sessions } = stats;

    return (
      <Restricted authParams={{ foo: 'bar' }}>
        <Card>
          <ViewTitle title={translate('resources.rewards.name')} />

          <CardText>
            To participate in the{' '}
            <Link to={{ pathname: '/ranking' }}>
              {translate('resources.ranking.name')}
            </Link>{' '}
            and be able to win rewards you must use dedicated tracking link. See{' '}
            <Link to={{ pathname: '/creatives' }}>
              {translate('resources.creatives.name')}
            </Link>{' '}
            for details.
            <p>
              {getUserData('domain')} place:{' '}
              {sessions ? `#${position}` : `unknown`}
            </p>
            {prizes &&
              prizes.map(item => (
                <Prize
                  key={item.name}
                  prize={item}
                  position={position}
                  sessions={sessions}
                />
              ))}
          </CardText>
        </Card>
      </Restricted>
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
