import axios from 'axios';
import * as XLSX from 'xlsx';

class FileUploadService {

    // Enum holding the types of data to import to database
    static gradeInputTypes = {
        STUDENT_NAME: 'Name',
        EXAM: 'Exam',
        QUIZ: 'Quiz',
        HOMEWORK: 'Homework',
        ID: 'ID',
        SIS_USER_ID: 'SIS User ID',
        SIS_LOGIN_ID: 'SIS Login ID',
        SECTION: 'Section',
        UNUSED: 'Unused'
    };

    /**
     * Parses array of arrays holding the contents of each spreadsheet row, to populate grade data
     * @param sheetData the data from the spreadsheet
     */
    static parseGradeData(sheetData) {
        const fields = Object.keys(sheetData[0]);

    }

    static parseInitialLoadData(sheetData) {

    }

    static async loadSpreadsheet(data) {
        const reader = new FileReader();
        let result = new Promise((resolve, reject) => {
            reader.onload = (event) => {
                const binary = event.target.result;
                const workbook = XLSX.read(binary, {type: 'binary'});
                // Grab the first worksheet
                const firstSheetName = workbook.SheetNames[0];
                const firstSheet = workbook.Sheets[firstSheetName];
                // Convert sheet to an array of arrays
                const data = XLSX.utils.sheet_to_json(firstSheet, {blankrows: false});
                if (data) {
                    resolve(data);
                } else {
                    reject("Couldn't load spreadsheet")
                }
            };
        });
        await reader.readAsBinaryString(data);
        return result;
    }

    static UploadSpreadsheet(data, config) {
        return axios.post("http://localhost:8000/upload", data, config);
    }

}

export default FileUploadService;
