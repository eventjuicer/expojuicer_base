import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import {
  translate,
  showNotification as showNotificationAction
} from 'admin-on-rest';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Card, CardHeader, CardActions } from 'material-ui/Card';
import Button from 'material-ui/FlatButton';
import PrimaryButton from 'material-ui/RaisedButton';

import IconPreview from 'material-ui/svg-icons/action/visibility';
import IconDownload from 'material-ui/svg-icons/file/file-download';
import IconCopy from 'material-ui/svg-icons/content/content-copy';

import { showModal as showModalAction } from '../../../redux/actions';

const modalData = ({ name, act_as, link, image }) => {
  return {
    title: name,
    body: link,
    image: act_as === 'image' ? image : null,
    buttons: []
  };
};

const htmlCode = ({ name, act_as, link, image }) => {
  if (act_as === 'link') {
    return link;
  }

  return `<a href="${link}"><img src="${image}" alt="e-commerce berlin expo" /></a>`;
};

const Creative = ({ creative, showModal, translate, showNotification }) => (
  <Card>
    <CardHeader
      title={creative.name}
      //    subtitle="asd"
    />

    <CardActions>
      <CopyToClipboard
        text={htmlCode(creative)}
        onCopy={() => showNotification('actions.copied')}
      >
        <PrimaryButton
          label="Copy embed code"
          primary={true}
          icon={<IconCopy />}
        />
      </CopyToClipboard>

      {'image' in creative && (
        <Button
          download={true}
          target="_blank"
          label="Download"
          icon={<IconDownload />}
          href={`${creative.image}?dl=1`}
          onClick={() =>
            showModal({
              title: 'Image downloaded',
              body: 'Remember that you have to use tracking link.'
            })
          }
        />
      )}

      <Button
        label="Preview"
        icon={<IconPreview />}
        onClick={() => showModal(modalData(creative))}
      />
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
