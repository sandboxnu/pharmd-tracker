import React, { Component } from "react";
import "../../../styles/globalStyles.css";
import FileUploadService from "../../../services/FileUploadService";

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
          className="pharmd-button"
          accept=".xls, .xlsx, .csv"
          onChange={this.chooseFileHandler}
        />
        <br />

        <button type="button" className="pharmd-button" onClick={this.uploadFileHandler}>
          Upload
        </button>
      </div>
    );
  }
}

export default UploadFileChooser;
