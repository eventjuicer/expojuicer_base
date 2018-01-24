import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import {
  translate,
  showNotification as showNotificationAction
} from 'admin-on-rest';

import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Card, CardHeader, CardText, CardMedia, CardActions} from 'material-ui/Card';
import Button from 'material-ui/FlatButton';
//import PrimaryButton from 'material-ui/RaisedButton';

import FontIcon from 'material-ui/FontIcon';

import IconPreview from 'material-ui/svg-icons/action/visibility';
import IconDownload from 'material-ui/svg-icons/file/file-download';

import {showModal as showModalAction} from '../../../redux/actions';
import {fb,tt,li} from '../../../api/sharers';

const modalData = ({name, act_as, link, content}) => {

    return {
      title : name,
      body : link,
      image : act_as == "banner" ? content : null,
      buttons : []

}

};

// //<Button
// ///  label="Download"
// icon={<IconDownload />}
// onClick={() => alert("dupa")}
// />

const htmlCode = ({name, act_as, link, content}) => {

  if(act_as == "link")
  {
    return link;
  }

  return `<a href="${link}"><img src="${content}" alt="e-commerce berlin expo" /></a>`;

}


const Creative = ({creative, showModal, translate, showNotification}) => (
  <Card>
    <CardHeader
      title={creative.name}
  //    subtitle="asd"
//      avatar={ rewarded(props.prize, props.position, props.sessions) }

    />

    <CardActions>

      <CopyToClipboard text={htmlCode(creative)} onCopy={()=>showNotification('actions.copied')}>
          <Button
            label="Copy embed code"
     primary={true}
          />

        </CopyToClipboard>


        <Button
          label="Preview"
      icon={<IconPreview />}
      onClick={() => showModal(modalData(creative))}
        />

        {"shareable" in creative && creative.shareable ?

        [<Button
          label={translate('pos.share_linkedin')}
      icon={<FontIcon className="fa fa-linkedin" />}
    href={ li() }
  />,

        <Button
          label={translate('pos.share_twitter')}
      icon={<FontIcon className="fa fa-twitter" />}
      href={ tt() }
        />
,
      <Button
          label={translate('pos.share_facebook')}
      icon={<FontIcon className="fa fa-facebook" />}
    href={ fb() }
    />] :

      null }




    </CardActions>

  </Card>
);


// const mapStateToProps = state => ({
//   modal: state.modal
// });

const enhance = compose(
  translate,
  connect(null, {showModal : showModalAction, showNotification : showNotificationAction})
);

export default enhance(Creative);
