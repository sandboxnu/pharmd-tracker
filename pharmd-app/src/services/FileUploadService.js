import axios from 'axios';
import * as XLSX from 'xlsx';

class FileUploadService {

    static parseSpreadsheet (data) {

    }

    static UploadSpreadsheet (data, config) {
        return axios.post("http://localhost:8000/upload", data, config);
    }

}

export default FileUploadService;
