import React from 'react';
import { translate } from 'admin-on-rest';

import TextField from 'material-ui/TextField';

const styles = {
  label: { width: '10em', display: 'inline-block' },
  button: { margin: '1em' }
};

class ImportManually extends React.Component {
  onTextareaChange = (event, value) => {
    const { showNotification, input } = this.props;

    if (value.indexOf('@') > -1) {
      //    showNotification(value.split("@").length-1);
    }

    input.onChange(value);
  };

  render() {
    const {
      label,
      source,
      meta: { touched, error },
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
    );
  }
}

export default translate(ImportManually);
