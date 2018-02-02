import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { translate } from 'admin-on-rest';

import Dropzone from 'react-dropzone';
import Mappings from './Mappings';
import styles from '../../../styles/dropzone';

import { changeImportData as changeImportDataAction } from '../../../redux/actions';
import { Parse } from '../../../api/csv';

class CsvImport extends React.Component {
  state = { files: [], data: null, mappedData: null };

  componentWillReceiveProps(nextProps) {
    if (
      'data' in nextProps &&
      Array.isArray(nextProps.data) &&
      nextProps.data.length
    ) {
      this.convertData(nextProps.data, nextProps.mappings);
    }
  }

  outputResult(data) {
    const { input } = this.props;
    input.onChange(data);
  }

  convertData = (data, mappings) => {
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

    this.outputResult(newData);
  };

  onDrop = (acceptedFiles, rejectedFiles, onload) => {
    //reset!
    this.props.changeImportData();

    acceptedFiles.forEach(file => {
      const reader = new FileReader();

      reader.onload = event =>
        Parse(event.target.result).then(({ data }) => {
          this.props.changeImportData(data.filter(row => Array.isArray(row)));
        });

      //this.parseTextToCsv(event.target.result);
      /*
      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
  */
      reader.readAsText(file);
    }, this);
  };

  render() {
    const { translate, input, meta, data, mappings } = this.props;

    return (
      <div>
        <div>
          <Dropzone
            accept="text/csv"
            multiple={false}
            onDrop={this.onDrop}
            style={styles.dropzone}
          >
            <p style={{ textAlign: 'center' }}>
              Drop files or click here to select files to upload.
            </p>
          </Dropzone>
        </div>

        {meta.touched &&
          meta.error && (
            <div className="alert alert-important">{meta.error}</div>
          )}

        {data && data[1] && <Mappings data={data[1]} />}
      </div>
    );
  }
}

const mapStateToProps = state => state.import;

const enhance = compose(
  translate,
  connect(mapStateToProps, { changeImportData: changeImportDataAction })
);

export default enhance(CsvImport);
