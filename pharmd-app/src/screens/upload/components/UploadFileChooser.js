import React, {Component} from "react";
import FileUploadService from "../../../services/FileUploadService";
import Button from '../../../components/Form/Button';
import FileSelector from '../../../components/Form/FileSelector';
import PropTypes from 'prop-types';

/**
 * @class UploadFileChooser a component for choosing a file to upload
 */
class UploadFileChooser extends Component {
  static propTypes = {
    uploadedFileData: PropTypes.func
  };

  static defaultProps = {
    uploadedFileData() {}
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      uploadedFile: {},
      fileName: "",
      uploadMessage: "",
      uploadProgress: 0
    };

    this.chooseFileHandler = this.chooseFileHandler.bind(this);
    this.uploadFileHandler = this.uploadFileHandler.bind(this);
  }

  /**
   * Executes when a file is chosen by the user
   * @param {File} file
   */
  chooseFileHandler(file) {
    this.setState({
      selectedFile: file,
      fileName: file.name
    });
  }

  async uploadFileHandler(event) {
    event.preventDefault();
    const spreadsheetData = await FileUploadService.loadSpreadsheet(this.state.selectedFile);
    this.props.uploadedFileData(spreadsheetData);
  }

  render() {
    return (
      <div>
        <FileSelector
          accept=".xls, .xlsx, .csv"
          onChoose={this.chooseFileHandler}
          color="secondary"
        />
        <br />

        {this.state.selectedFile &&
        <Button color="primary" variant="contained" onClick={this.uploadFileHandler}>
          Upload
        </Button>
        }
      </div>
    );
  }
}

export default UploadFileChooser;
