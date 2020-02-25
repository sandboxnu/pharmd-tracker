import axios from 'axios';

class FileUploadService {

    static UploadSpreadsheet (data, config) {
        return axios.post("http://localhost:8000/upload", data, config);
    }

}

export default FileUploadService;
