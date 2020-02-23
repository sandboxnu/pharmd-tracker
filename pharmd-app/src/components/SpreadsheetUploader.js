import React, {Component} from 'react';

class SpreadsheetUploader extends Component {

    uploadHandler() {

    }

    render() {
        return (
            <div>
                <input type="file" accept=".xls, .xlsx, .csv" onChange={this.uploadHandler}/><br/>
                <button type="button">Upload</button>
            </div>
        );
    }
}

export default SpreadsheetUploader;
