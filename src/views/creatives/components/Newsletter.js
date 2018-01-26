import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import {
  translate,
  showNotification as showNotificationAction
} from 'admin-on-rest';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Card, CardHeader, CardActions } from 'material-ui/Card';
import IconDownload from 'material-ui/svg-icons/file/file-download';
import IconCopy from 'material-ui/svg-icons/content/content-copy';
import IconZip from 'material-ui/svg-icons/content/archive';
import PrimaryButton from 'material-ui/RaisedButton';
import Button from 'material-ui/FlatButton';
import { httpClient } from '../../../api/restClient';
import Iframe from '../../../components/Iframe';
import { getUserId } from '../../../api/helpers';


const newsletterLink = (link, type) => {

  const base = `${link}?participant_id=${getUserId()}`;

  switch(type)
  {
    case "zip":
      return `${base}&zip=1`;
    break;

    case "download":
      return `${base}&dl=1`;
    break;

    default:
      return base;
  }
}


class Newsletter extends React.Component {
  state = {
    newsletter: ''
  };

  setStateAsync(state) {
      return new Promise((resolve) => {
        this.setState(state, resolve)
      });
  }

  async componentDidMount() {
    const { creative } = this.props;
    const res = await httpClient(newsletterLink(creative.content));
    await this.setStateAsync({newsletter: res.body});
  }

  render() {
    const { translate, creative, showNotification } = this.props;
    const { newsletter } = this.state;

    return (
      <Card>
        <CardHeader title={creative.name} />

        <Iframe src={`data:text/html, ${newsletter}`} />

        <CardActions>
          <PrimaryButton
            primary={true}
            download={true}
            target="_blank"
            label="Download HTML"
            icon={<IconDownload />}
            href={newsletterLink(creative.content, "download")}
          />

          <Button
            primary={true}
            download={true}
            target="_blank"
            label="Download .zip"
            icon={<IconZip />}
            href={newsletterLink(creative.content, "zip")}
          />

          <CopyToClipboard
            text={newsletter}
            onCopy={() => showNotification('actions.copied')}
          >
            <Button label="Copy HTML Source" icon={<IconCopy />} />
          </CopyToClipboard>
        </CardActions>
      </Card>
    );
  }
}

const enhance = compose(
  translate,
  connect(null, { showNotification: showNotificationAction })
);

export default enhance(Newsletter);
