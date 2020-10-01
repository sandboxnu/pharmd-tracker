import React, {Component} from 'react';
import UploadFileChooser from "./UploadFileChooser";
import UploadDataFieldChooser from "./UploadDataFieldChooser";
import StudentAssessmentService from '../../../services/StudentAssessmentService';
import Button from '../../../components/Form/Button';

/**
 * @typedef { import('../../../typeDefs.js').BasicStudentAssessment} BasicStudentAssessment
 * @typedef { import('../../../typeDefs.js').FileData} FileData
 */

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


    /**
     * Updates the state with data about the uploaded file
     * @param {FileData}fileData
     */
    uploadFile(fileData) {
        console.log("File data", fileData)
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

    /**
     * Tries to upload the given data to the backend
     * @param data {{
     *     exams: Array<BasicStudentAssessment>
     * }}
     */
    confirmData(data) {
        console.log(data);
        const promises = [];
        promises.push(StudentAssessmentService.addManyStudentAssessments(data.exams, []));
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
                {this.state.uploadedData && <Button color="secondary" variant="contained" onClick={this.removeFile}>Remove File</Button>}
                {/*{*/}
                {/*    this.state.uploadedData &&*/}
                {/*    <RadioGroup aria-label="Upload Type" name="uploadType" value={this.state.uploadType} onChange={changeUploadType}>*/}

                {/*    </RadioGroup>*/}

                {/*    }*/}
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
