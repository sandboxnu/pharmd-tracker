import React, {Component} from 'react';
import UploadFileChooser from "./UploadFileChooser";
import UploadDataFieldChooser from "./UploadDataFieldChooser";
import StudentAssessmentService from '../../../services/StudentAssessmentService';
import Button from '../../../components/Form/Button';

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
        if (fileData.data.length > 0) {
            this.setState({
                uploadedDataHeaders: fileData.headers,
                uploadedDataSubheaders: fileData.subHeaders,
                uploadedData: fileData.data,
                uploadComplete: null
            });
        }
    };

    removeFile() {
        this.setState(this.DEFAULT_STATE)
    }

    confirmData(data) {
        const promises = [];
        promises.push(StudentAssessmentService.addManyStudentAssessments(data.exams, []));
        Promise.all(promises)
            .then(res => {
                this.setState({
                    ...this.DEFAULT_STATE,
                    uploadComplete: 'Upload complete!'
                });
            })
            .catch(err => {
                this.setState({
                    ...this.DEFAULT_STATE,
                    uploadComplete: 'Upload failed--please try again'
                });
            })
    }

    showHelp() {
        const helpInfo = `
      This tool is used to upload spreadsheet exports from Canvas into the PharmD database
      
      To use, choose your file, then match the appropriate columns with the value type it holds.
      
      Value Types (* = required):
      - * Student Name (Full): The student's full name (last, first)
      - * Student Last Name: The student's surname
      - * Student First Name: The student's given name
      - * Exam Grade: A grade for an exam
      - Homework grade: Self-explanatory
      - * Student ID: The student's NUID
      - *Class Section: The course these grades correspond to
    `;
        // TODO: replace with modal dialog
        alert(helpInfo)

    }

    render() {
        return (
            <div>
                <Button color="secondary" variant="contained" onClick={this.showHelp}>Help</Button>
                {!this.state.uploadedData &&
                <UploadFileChooser uploadedFileData={this.uploadFile} />}
                {this.state.uploadedData && <Button color="secondary" variant="contained" onClick={this.removeFile}>Remove File</Button>}
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
