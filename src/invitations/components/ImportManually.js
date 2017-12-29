import React from 'react';
import { connect } from 'react-redux';
import { Card, CardText } from 'material-ui/Card';



import RaisedButton from 'material-ui/RaisedButton';

import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';

//import { LongTextInput } from 'admin-on-rest';

import { translate, ViewTitle } from 'admin-on-rest';

import { showNotification as showNotificationAction } from 'admin-on-rest';
import { push as pushAction } from 'react-router-redux';

import { Field } from 'redux-form';

import TextField from 'material-ui/TextField';

const styles = {
    label: { width: '10em', display: 'inline-block' },
    button: { margin: '1em' },
};





class ImportManually extends React.Component {


  onTextareaChange = (event, value) => {

    const {showNotification, input} = this.props;

    if(value.indexOf("@")>-1)
    {
  //    showNotification(value.split("@").length-1);
    }

    input.onChange(value);

  }


  render()
  {

    const {
         label,
         source,
         meta : {touched,
         error },
         elStyle,

         input

       } = this.props;


    return (


      <TextField

          hintText="Message Field"
          fullwidth="true"
          errorText={touched && error}
          floatingLabelText="Paste or enter email addresses - one by one"
          multiLine={true}
          rows={10}
          rowsMax={50}
          onChange={this.onTextareaChange}
          style={elStyle}
        />



    )

  }


}




export default translate(ImportManually);




//
// class ImportManually extends React.Component {
//
//   state = { files: [], data : null, mode : ""}
//
//
// proceedWithTextField = () => {
//
//   // const {showNotification} = this.props;
//   //
//   //
//   // const matches = value.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
//   //
//   // if(matches)
//   // {
//   //       showNotification(matches);
//   // }
//
// }
//

//
//
//
//
// render(){
//
// const { translate } = this.props;
//
// return (
//
//
//   <TextField
//       hintText="Message Field"
//       fullwidth={true}
//       errorText="This field is required."
//       floatingLabelText="Paste or enter email addresses - one by one"
//       multiLine={true}
//       rows={10}
//       rowsMax={50}
//       onChange={this.onTextareaChange}
//     />
//
//
//   <LongTextInput label="resources.visitors.tabs.message" source="paste" style={{ maxWidth: 544 }} />
//
// );
//
// }
// }
//
//
//
//
