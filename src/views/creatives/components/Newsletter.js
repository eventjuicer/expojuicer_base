import React from 'react';


import { connect } from 'react-redux';
import compose from 'recompose/compose';
import {
  translate,
  showNotification as showNotificationAction
} from 'admin-on-rest';




import {CopyToClipboard} from 'react-copy-to-clipboard';

import { Card, CardHeader, CardTitle, CardText, CardActions } from 'material-ui/Card';


import Paper from 'material-ui/Paper';

import IconDownload from 'material-ui/svg-icons/file/file-download';
import IconCopy from 'material-ui/svg-icons/content/content-copy';

import PrimaryButton from 'material-ui/RaisedButton';
import Button from 'material-ui/FlatButton';

import {getCompanyId, fetchHtml} from '../../../api/helpers';


import Iframe from '../../../components/Iframe'
import styles from '../../../styles/iframes'
import {colorBg, colorHeader} from '../../../styles/colors';





class Newsletter extends React.Component {

state = {
  newsletter : `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>
<body style="font-family: Avenir, Helvetica, sans-serif; box-sizing: border-box; background-color: #f5f8fa; color: #74787E; height: 100%; hyphens: auto; line-height: 1.4; margin: 0; -moz-hyphens: auto; -ms-word-break: break-all; width: 100% !important; -webkit-hyphens: auto; -webkit-text-size-adjust: none; word-break: break-word;">
    <style>
        @media  only screen and (max-width: 600px) {
            .inner-body {
                width: 100% !important;
            }

            .footer {
                width: 100% !important;
            }
        }

        @media  only screen and (max-width: 500px) {
            .button {
                width: 100% !important;
            }
        }
    </style>
<table class="wrapper" width="100%" cellpadding="0" cellspacing="0" style="font-family: Avenir, Helvetica, sans-serif; box-sizing: border-box; background-color: #f5f8fa; margin: 0; padding: 0; width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%;"><tr>
<td align="center" style="font-family: Avenir, Helvetica, sans-serif; box-sizing: border-box;">
                <table class="content" width="100%" cellpadding="0" cellspacing="0" style="font-family: Avenir, Helvetica, sans-serif; box-sizing: border-box; margin: 0; padding: 0; width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%;">
<tr>
<td class="header" style="font-family: Avenir, Helvetica, sans-serif; box-sizing: border-box; padding: 25px 0; text-align: center;">
        <a href="http://localhost" style="font-family: Avenir, Helvetica, sans-serif; box-sizing: border-box; color: #bbbfc3; font-size: 19px; font-weight: bold; text-decoration: none; text-shadow: 0 1px 0 white;">

        </a>
    </td>
</tr>
<!-- Email Body --><tr>
<td class="body" width="100%" cellpadding="0" cellspacing="0" style="font-family: Avenir, Helvetica, sans-serif; box-sizing: border-box; background-color: #FFFFFF; border-bottom: 1px solid #EDEFF2; border-top: 1px solid #EDEFF2; margin: 0; padding: 0; width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%;">
                            <table class="inner-body" align="center" width="570" cellpadding="0" cellspacing="0" style="font-family: Avenir, Helvetica, sans-serif; box-sizing: border-box; background-color: #FFFFFF; margin: 0 auto; padding: 0; width: 570px; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 570px;">
<!-- Body content --><tr>
<td class="content-cell" style="font-family: Avenir, Helvetica, sans-serif; box-sizing: border-box; padding: 35px;">
                                        <div style="font-family: Avenir, Helvetica, sans-serif; box-sizing: border-box; text-align: center;">
    <a href="https://google.com" style="font-family: Avenir, Helvetica, sans-serif; box-sizing: border-box; color: #3869D4;"><img src="http://as.eventjuicer.com.local/storage/319f27934db5dd8f03070e75989ca667.jpg" alt="" style="font-family: Avenir, Helvetica, sans-serif; box-sizing: border-box; max-width: 100%; border: none; margin-top: 10px; margin-bottom: 30px;"></a>
</div>
<h1 style="font-family: Avenir, Helvetica, sans-serif; box-sizing: border-box; color: #2F3133; font-size: 19px; font-weight: bold; margin-top: 0; text-align: left;">STIMMEN SIE FÜR UNS AB!</h1>
<p style="font-family: Avenir, Helvetica, sans-serif; box-sizing: border-box; color: #74787E; font-size: 16px; line-height: 1.5em; margin-top: 0; text-align: left;">Wir nehmen am CALL FOR PAPERS - CONTEST der <strong style="font-family: Avenir, Helvetica, sans-serif; box-sizing: border-box;">E-Commerce Berlin Expo 2018 teil!</strong> Die Gewinner bekommen einen Spot auf der EBE Bühne am <strong style="font-family: Avenir, Helvetica, sans-serif; box-sizing: border-box;">15. Februar, 2018</strong> im Station, Berlin. </p>
<p style="font-family: Avenir, Helvetica, sans-serif; box-sizing: border-box; color: #74787E; font-size: 16px; line-height: 1.5em; margin-top: 0; text-align: left;">Sie können uns dabei unterstützen ein Teil der Agenda zu werden, indem Sie für 's Präsentation stimmen. </p>
<h2 style="font-family: Avenir, Helvetica, sans-serif; box-sizing: border-box; color: #2F3133; font-size: 16px; font-weight: bold; margin-top: 0; text-align: left;">Title unserer Präsentation, “ ”</h2>
<table class="action" align="center" width="100%" cellpadding="0" cellspacing="0" style="font-family: Avenir, Helvetica, sans-serif; box-sizing: border-box; margin: 30px auto; padding: 0; text-align: center; width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%;"><tr>
<td align="center" style="font-family: Avenir, Helvetica, sans-serif; box-sizing: border-box;">
            <table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-family: Avenir, Helvetica, sans-serif; box-sizing: border-box;"><tr>
<td align="center" style="font-family: Avenir, Helvetica, sans-serif; box-sizing: border-box;">
                        <table border="0" cellpadding="0" cellspacing="0" style="font-family: Avenir, Helvetica, sans-serif; box-sizing: border-box;"><tr>
<td style="font-family: Avenir, Helvetica, sans-serif; box-sizing: border-box;">
                                    <a href="https://google.com" class="button button-blue" target="_blank" style="font-family: Avenir, Helvetica, sans-serif; box-sizing: border-box; border-radius: 3px; box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16); color: #FFF; display: inline-block; text-decoration: none; -webkit-text-size-adjust: none; background-color: #3097D1; border-top: 10px solid #3097D1; border-right: 18px solid #3097D1; border-bottom: 10px solid #3097D1; border-left: 18px solid #3097D1;">Stimmen Sie für unsere Präsentation</a>
                                </td>
                            </tr></table>
</td>
                </tr></table>
</td>
    </tr></table>
<p style="font-family: Avenir, Helvetica, sans-serif; box-sizing: border-box; color: #74787E; font-size: 16px; line-height: 1.5em; margin-top: 0; text-align: left;">Wir hoffen auf Ihre Unterstützung! </p>
<p style="font-family: Avenir, Helvetica, sans-serif; box-sizing: border-box; color: #74787E; font-size: 16px; line-height: 1.5em; margin-top: 0; text-align: left;">Vielen Dank!</p>


                                    </td>
                                </tr>
</table>
</td>
                    </tr>
<tr>
<td style="font-family: Avenir, Helvetica, sans-serif; box-sizing: border-box;">
        <table class="footer" align="center" width="570" cellpadding="0" cellspacing="0" style="font-family: Avenir, Helvetica, sans-serif; box-sizing: border-box; margin: 0 auto; padding: 0; text-align: center; width: 570px; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 570px;"><tr>
<td class="content-cell" align="center" style="font-family: Avenir, Helvetica, sans-serif; box-sizing: border-box; padding: 35px;">
                    <p style="font-family: Avenir, Helvetica, sans-serif; box-sizing: border-box; line-height: 1.5em; margin-top: 0; color: #AEAEAE; font-size: 12px; text-align: center;">© 2018 . All rights reserved.</p>
                </td>
            </tr></table>
</td>
</tr>
</table>
</td>
        </tr></table>
</body>
</html>`
}

componentDidMount()
{
  this.getHTMLContent();
}

getHTMLContent(){

  const {creative} = this.props;

  fetchHtml(creative.content).
  then(response => {

    console.log(response);



  });

}

render()
{

  const {translate, creative, showNotification} = this.props;
  const {newsletter} = this.state;

  return(

    <Card>
    <CardHeader title={creative.name} />

    <Iframe src={`data:text/html, ${newsletter};`}></Iframe>

    <CardActions>

      <PrimaryButton
        primary={true}
        download={true}
        target="_blank"
        label="Download"
    icon={<IconDownload />}
    href={`${creative.content}?dl=1`}

      />

<CopyToClipboard text={newsletter} onCopy={()=>showNotification('actions.copied')}>
      <Button label="View Source" icon={<IconCopy />} />
</CopyToClipboard>

    </CardActions>

  </Card>


  );
}

}

const enhance = compose(
  translate,
  connect(null, { showNotification : showNotificationAction})
);

export default enhance(Newsletter);
