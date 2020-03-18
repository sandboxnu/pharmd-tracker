import axios from "axios";
import * as BackendRoutes from "../config/backendRoutes";

class StudentsService {
  static apiPrefix = "students/";

  // GET Methods

  static getAllStudents = () => {
    const path = this.apiPrefix;
    return axios.get(`${BackendRoutes.BACKEND_URL}${path}`);
  };

  static getStudentById = studentId => {
    const path = this.apiPrefix + studentId;
    return axios.get(`${BackendRoutes.BACKEND_URL}${path}`);
  };

  // POST Methods

  static addNewStudent = studentData => {
    const path = this.apiPrefix;
    return axios.post(`${BackendRoutes.BACKEND_URL}${path}`, studentData);
  };

  // PUT Methods

  static updateStudent = (studentId, studentData) => {
    const path = this.apiPrefix + studentData;
    return axios.put(`${BackendRoutes.BACKEND_URL}${path}`, studentData);
  };

  // DELETE Methods

  static deleteAllStudents = () => {
    const path = this.apiPrefix;
    return axios.delete(`${BackendRoutes.BACKEND_URL}${path}`);
  };

  static deleteStudentById = studentId => {
    const path = this.apiPrefix + studentId;
    return axios.delete(`${BackendRoutes.BACKEND_URL}${path}`);
  };
}

export default StudentsService;
