import React, {Component} from 'react';
import UploadFileChooser from "./UploadFileChooser";
import UploadDataFieldChooser from "./UploadDataFieldChooser";
import FileUploadService from "../../../services/FileUploadService";
import StudentAssessmentService from '../../../services/StudentAssessmentService';

class SpreadsheetUploader extends Component {

    DEFAULT_STATE = {
        uploadedDataHeaders: null,
        uploadedDataSubheaders: null,
        uploadedData: null,
        uploadComplete: null
    };

    constructor(props) {
        super(props);
        this.state = this.DEFAULT_STATE;

        this.uploadFile = this.uploadFile.bind(this);
        this.removeFile = this.removeFile.bind(this);
        this.confirmData = this.confirmData.bind(this);
    }


    uploadFile(fileData) {
        if (fileData.length > 0) {
            const subHeaders = Object.keys(Object.assign(fileData[0], Object.assign(fileData[1], {})));
            this.setState({
                uploadedDataHeaders: Object.keys(fileData[fileData.length - 1]),
                uploadedDataSubheaders: Object.values(fileData[0]),
                uploadedData: fileData.slice(1),
                uploadComplete: null
            });
            console.log(fileData);
        }
    };

    removeFile() {
        this.setState(this.DEFAULT_STATE)
    }

    /**
     *
     * @param data object of shape:
     * {
     *     exams: [{
     *         NUID: number;
     *         courseName: string;
     *         examName: string;
     *         percentage: number;
     *         studentName: string
     *     }],
     *
     * }
     */
    confirmData(data) {
        console.log(data);
        const promises = [];
        promises.push(StudentAssessmentService.addManyStudentAssessments(data.exams));
        Promise.all(promises)
            .then(res => {
                this.setState({
                    ...this.DEFAULT_STATE,
                    uploadComplete: 'Upload complete!'
                });
                console.log("Upload complete");
            })
            .catch(err => {
                this.setState({
                    ...this.DEFAULT_STATE,
                    uploadComplete: 'Upload failed--please try again'
                });
                console.error(err);
            })
    }

    render() {
        return (
            <div>
                {!this.state.uploadedData &&
                <UploadFileChooser uploadedFileData={this.uploadFile} />}
                {this.state.uploadedData && <button onClick={this.removeFile}>Remove File</button>}
                {this.state.uploadedData && <UploadDataFieldChooser
                    headers={this.state.uploadedDataHeaders}
                    subHeaders={this.state.uploadedDataSubheaders}
                    studentData={this.state.uploadedData}
                    confirmData={this.confirmData}/>}
                {this.state.uploadComplete && this.state.uploadComplete}
            </div>
        );
    }
}

export default SpreadsheetUploader;
