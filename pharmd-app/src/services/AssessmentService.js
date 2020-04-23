import * as BackendRoutes from "../config/backendRoutes"
import axios from "axios";

class AssessmentService {
    static apiPrefix = "assessments/";

    // GET Methods

    static getAllAssessments = () => {
        const path = this.apiPrefix;
        return axios.get(`${BackendRoutes.BACKEND_URL}${path}`);
    };

    static getAssignmentByID = assignmentId => {
        const path = this.apiPrefix + assignmentId;
        return axios.get(`${BackendRoutes.BACKEND_URL}${path}`);
    };

    // POST Methods

    static addNewAssignment = assignmentData => {
        const path = this.apiPrefix;
        return axios.post(`${BackendRoutes.BACKEND_URL}${path}`, assignmentData);
    };

    // PUT Methods

    static updateAssignment = (assignmentID, assignmentData) => {
        const path = this.apiPrefix + assignmentID;
        return axios.put(`${BackendRoutes.BACKEND_URL}${path}`, assignmentData);
    };

    // DELETE Methods

    static deleteAssignment = (assignmentID) => {
        const path = this.apiPrefix + assignmentID;
        return axios.delete(`${BackendRoutes.BACKEND_URL}${path}`)
    }
}
