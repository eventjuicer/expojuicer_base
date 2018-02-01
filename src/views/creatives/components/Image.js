import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import {
  translate,
} from 'admin-on-rest';

import { Card, CardHeader, CardActions } from 'material-ui/Card';

import SecondaryButton from 'material-ui/FlatButton';
import IconPreview from 'material-ui/svg-icons/action/visibility';
import IconDownload from 'material-ui/svg-icons/file/file-download';
import { showModal as showModalAction } from '../../../redux/actions';
import CopyToClipboardButton from './CopyToClipboardButton';



const htmlCode = ({ name, act_as, link, image }) => {
  if (act_as === 'link') {
    return link;
  }

  return `<a href="${link}"><img src="${image}" alt="" /></a>`;
};

const CopyTrackingLink = (link) => (
  <CopyToClipboardButton text={link} label="Copy tracking link to clipboard" raised={true} />
);

const Creative = ({ creative, showModal, translate }) => (
  <Card>
    <CardHeader
      title={creative.name}
      //    subtitle="asd"
    />

    <CardActions>

      <CopyToClipboardButton text={htmlCode(creative)} label="Copy embed code" raised={true} />

      {'image' in creative && (
        <SecondaryButton
          download={true}
          target="_blank"
          label="Download"
          icon={<IconDownload />}
          href={`${creative.image}?dl=1`}
          onClick={() =>
            showModal({
              title: 'Image downloaded',
              body: `Important! Please remember that you have to use your tracking link.`,
              buttons : [<CopyTrackingLink link={creative.link} />]
            })
          }
        />
      )}

      <SecondaryButton
        label="Preview"
        icon={<IconPreview />}
        onClick={() => showModal({
          title: creative.name,
          body: "",
          image: creative.act_as === 'image' ? creative.image : null,
          buttons: [<CopyToClipboardButton text={htmlCode(creative)} label="Copy embed code" raised={true} />]
        })}
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
    showModal: showModalAction
  })
);

export default enhance(Creative);
