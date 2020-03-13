import React, {Component} from 'react';
import '../styles/globalStyles.css';
import FileUploadService from '../services/FileUploadService'

class SpreadsheetUploader extends Component {
    static defaultProps = {
        uploadedFileData() {}
    };

    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            uploadedFile: {},
            fileName: '',
            uploadMessage: '',
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
            fileName: file.name,
        })
    }

    async uploadFileHandler(event) {
        event.preventDefault();
        const spreadsheetData = await FileUploadService.loadSpreadsheet(this.state.selectedFile);
        console.log(spreadsheetData);
        this.props.uploadedFileData.apply(this, spreadsheetData);
        // FileUploadService.UploadSpreadsheet(data, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     },
        //     onUploadProgress: progressEvent => {
        //         this.setState({
        //             uploadProgress: Math.round((parseInt(progressEvent.loaded) * 100) / parseInt(progressEvent.total))
        //         });
        //         setTimeout(() => this.setState({uploadProgress: 0}), 10000);
        //     }
        // }).then(result => {
        //     const { fileName, filePath } = result.data;
        //     this.setState({
        //         uploadedFile: {fileName, filePath},
        //         uploadMessage: 'File Uploaded Successfully'
        //     })
        //
        // })
        //     .catch(err => {
        //         if (err.response.status === 500) {
        //             this.setState({
        //                 uploadMessage: "There's a problem with the server. Please try again."
        //             });
        //         } else {
        //             this.setState({
        //                 uploadMessage: 'File Upload Failed Successfully'
        //             })
        //         }
        //     })
    }

    render() {
        return (
            <div>
                <input type="file" className="pharmd-button" accept=".xls, .xlsx, .csv" onChange={this.chooseFileHandler}/><br/>

                <button type="button" className="pharmd-button" onClick={this.uploadFileHandler}>Upload</button>


            </div>
        );
    }
}

export default SpreadsheetUploader;
