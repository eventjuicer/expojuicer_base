import React from 'react';

import { translate } from 'admin-on-rest';

import Papa from 'papaparse';
import Dropzone from 'react-dropzone';

import Mappings from './ImportCsvMappings';

class CsvImport extends React.Component {
  state = { files: [], data: null, mappedData: null };

  handleMapping = mappings => {
    const { input } = this.props;
    const { data } = this.state;
    //we should now manipulate DATA!

    let newData = [];

    if (data && Array.isArray(data)) {
      newData = data.map(row => {
        const newRow = {};

        for (var key in mappings) {
          if (mappings.hasOwnProperty(key)) {
            if (mappings[key] !== 'skip') {
              newRow[mappings[key]] = row[key];
            }

            if (mappings[key] === 'email') {
              //validating...?
            }
          }
        }

        return newRow;
      });
    }

    input.onChange({ data: newData, mappings: mappings });
  };

  parseTextToCsv(text) {
    const { input } = this.props;

    //reset!
    input.onChange({ data: {}, mappings: {} });

    const parsed = Papa.parse(text);

    const data = parsed.data.filter(row => Array.isArray(row));

    this.setState({ data });
  }

  onDrop = (acceptedFiles, rejectedFiles) => {
    this.setState({
      files: acceptedFiles
    });

    acceptedFiles.forEach(file => {
      const reader = new FileReader();

      reader.onload = event => this.parseTextToCsv(event.target.result);

      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');

      reader.readAsText(file);
    }, this);
  };

  render() {
    const { translate, input, meta } = this.props;
    const { data } = this.state;

    return (
      <div>
        <Dropzone accept="text/csv" multiple={false} onDrop={this.onDrop}>
          <p>
            Try dropping some files here, or click to select files to upload.
          </p>
        </Dropzone>

        {meta.touched &&
          meta.error && (
            <div className="alert alert-important">{meta.error}</div>
          )}

        {data && <Mappings data={data} onMappingsChange={this.handleMapping} />}
      </div>
    );
  }
}

export default translate(CsvImport);
