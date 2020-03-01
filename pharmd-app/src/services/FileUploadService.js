import axios from 'axios';
import * as XLSX from 'xlsx';

class FileUploadService {

    static parseSpreadsheet (data) {
        const reader = new FileReader();
        reader.onload = (event) => {
            const binary = event.target.result;

        }
    }

    static UploadSpreadsheet (data, config) {
        return axios.post("http://localhost:8000/upload", data, config);
    }

}

export default FileUploadService;
