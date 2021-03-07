import axios from "axios";
import * as XLSX from "xlsx";
import * as BackendRoutes from "../config/backendRoutes";
import {arrayToObject} from "./Utility";

/**
 * @typedef { import('../typeDefs.js').BasicStudentAssessment} BasicStudentAssessment
 * @typedef { import('../typeDefs.js').FileData} FileData
 */

class FileUploadService {
  static apiPrefix = "assessments/";
  static EMPTY_CELL_VAL = "N/A";

  // Enum holding the types of data to import to database
  static gradeInputTypes = {
    UNUSED: "Unused",
    STUDENT_NAME: "Student Name (Full)",
    STUDENT_LAST_NAME: "Student Last Name",
    STUDENT_FIRST_NAME:" Student First Name",
    EXAM: "Exam Grade",
    HOMEWORK: "Homework Grade",
    STUDENT_ID: "Student ID",
    SECTION: "Class Section",
  };

  /**
   * Parses array of arrays holding the contents of each spreadsheet row, to populate grade data
   * @param sheetData the data from the spreadsheet
   */
  static parseGradeData(sheetData) {
    const fields = Object.keys(sheetData[0]);
  }

  static parseInitialLoadData(sheetData) {}

  /**
   * Loads and begins parsing a spreadsheet
   * @param data the data representing the spreadsheet
   * @returns {Promise<FileData>}
   */
  static async loadSpreadsheet(data) {
    const reader = new FileReader();
    let result = new Promise((resolve, reject) => {
      reader.onload = event => {
        const binary = event.target.result;
        const workbook = XLSX.read(binary, { type: "binary" });
        // Grab the first worksheet
        const firstSheetName = workbook.SheetNames[0];
        const firstSheet = workbook.Sheets[firstSheetName];
        // Convert sheet to an array of arrays
        let data = XLSX.utils.sheet_to_json(firstSheet, { blankrows: true, defval: FileUploadService.EMPTY_CELL_VAL, header: 1 });
        const headers = Object.values(data[0]);
        const subHeaders = Object.values(data[1]);
        if (data) {
          resolve({
            data: data.slice(2).map(arr => arrayToObject(arr, headers)),
            subHeaders,
            headers: headers
          });
        } else {
          reject("Couldn't load spreadsheet");
        }
      };
    });
    await reader.readAsBinaryString(data);
    return result;
  }

  /**
   * Uploads student assessment data to the DB
   * @param data {Array<BasicStudentAssessment>}
   * @returns {Promise<AxiosResponse<T>>}
   */
  static UploadStudentAssessmentData(data) {
    const path = 'student-assessments/many/';
    return axios.post(`${BackendRoutes.BACKEND_URL}${path}`, data);
  }
}

export default FileUploadService;
