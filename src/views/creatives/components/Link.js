import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import {
  translate,
  showNotification as showNotificationAction
} from 'admin-on-rest';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card';

import PrimaryButton from 'material-ui/RaisedButton';
import IconCopy from 'material-ui/svg-icons/content/content-copy';

import { showModal as showModalAction } from '../../../redux/actions';
import Share from '../../../components/Share';
import { colorBg, colorHeader } from '../../../styles/colors';

const Creative = ({ creative, showModal, translate, showNotification }) => (
  <Card containerStyle={{ backgroundColor: colorBg }}>
    <CardHeader
      style={{ backgroundColor: colorHeader }}
      title={creative.name}
    />

    <CardText>{creative.link}</CardText>

    <CardActions>
      <CopyToClipboard
        text={creative.link}
        onCopy={() => showNotification('actions.copied')}
      >
        <PrimaryButton
          label="Copy to clipboard"
          icon={<IconCopy />}
          primary={true}
        />
      </CopyToClipboard>

      {'shareable' in creative &&
        creative.shareable && (
          <span>
            <Share type="facebook" target={creative.link} />
            <Share type="linkedin" target={creative.link} />
            <Share type="twitter" target={creative.link} />
          </span>
        )}
    </CardActions>
  </Card>
);

// const mapStateToProps = state => ({
//   modal: state.modal
// });

const enhance = compose(
  translate,
  connect(null, {
    showModal: showModalAction,
    showNotification: showNotificationAction
  })
);

export default enhance(Creative);
