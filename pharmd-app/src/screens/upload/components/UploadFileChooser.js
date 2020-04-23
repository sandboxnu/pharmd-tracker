import React, { Component } from "react";
import "../../../styles/globalStyles.css";
import FileUploadService from "../../../services/FileUploadService";
import Button from '../../../components/Form/Button';

class UploadFileChooser extends Component {
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

  chooseFileHandler(event) {
    const file = event.target.files[0];
    console.log(file);
    this.setState({
      selectedFile: file,
      fileName: file.name
    });
  }

  async uploadFileHandler(event) {
    event.preventDefault();
    const spreadsheetData = await FileUploadService.loadSpreadsheet(this.state.selectedFile);
    //console.log(spreadsheetData);
    this.props.uploadedFileData(spreadsheetData);
  }

  render() {
    return (
      <div>
        <input
          type="file"

          accept=".xls, .xlsx, .csv"
          onChange={this.chooseFileHandler}
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
