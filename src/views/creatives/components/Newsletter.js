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

class Newsletter extends React.Component {
  state = {
    newsletter: ''
  };

  componentDidMount() {
    this.getHTMLContent();
  }

  getHTMLContent = () => {
    const { creative } = this.props;

    httpClient(creative.content).then(response => {
      console.log(response);
    });
  };

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
            href={`${creative.content}?dl=1`}
          />

          <Button
            primary={true}
            download={true}
            target="_blank"
            label="Download .zip"
            icon={<IconZip />}
            href={`${creative.content}?zip=1`}
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
