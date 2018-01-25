import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import {
  translate,
  showNotification as showNotificationAction
} from 'admin-on-rest';

import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Card, CardHeader, CardText, CardTitle, CardActions} from 'material-ui/Card';

import Button from 'material-ui/FlatButton';
import PrimaryButton from 'material-ui/RaisedButton';
import IconCopy from 'material-ui/svg-icons/content/content-copy';


import {showModal as showModalAction} from '../../../redux/actions';
import Share from '../../../components/Share';
import {colorBg, colorHeader} from '../../../styles/colors';


const modalData = ({name, act_as, link, image}) => {

    return {
      title : name,
      body : link,
      image : act_as == "image" ? image : null,
      buttons : []

}

};

// //<Button
// ///  label="Download"
// icon={<IconDownload />}
// onClick={() => alert("dupa")}
// />

const htmlCode = ({name, act_as, link, image}) => {

  if(act_as == "link")
  {
    return link;
  }

  return `<a href="${link}"><img src="${image}" alt="e-commerce berlin expo" /></a>`;

}


const Creative = ({creative, showModal, translate, showNotification}) => (

  <Card containerStyle={{backgroundColor: colorBg}}>


    <CardHeader style={{backgroundColor: colorHeader}} title={creative.name} />

    <CardText>{creative.link}</CardText>

    <CardActions>

      <CopyToClipboard text={htmlCode(creative)} onCopy={()=>showNotification('actions.copied')}>
          <PrimaryButton
            label="Copy to clipboard"
            icon={<IconCopy />}
            primary={true}
          />

        </CopyToClipboard>


        {"shareable" in creative && creative.shareable &&

        <span>
          <Share type="facebook" target="https://google.com" />
          <Share type="linkedin" />
          <Share type="twitter" />
        </span>
        }


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
