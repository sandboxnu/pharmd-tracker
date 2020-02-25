import axios from 'axios';
import * as BackendRoutes from '../config/backendRoutes'

class CourseService {
    static apiPrefix = 'courses/';

    // GET Methods

    static getAllClasses = () => {
        const path = this.apiPrefix;
        return axios.get(`${BackendRoutes.BACKEND_URL}${path}`);
    };

    static getClassById = (classId) => {
        const path = this.apiPrefix + classId;
        return axios.get(`${BackendRoutes.BACKEND_URL}${path}`);
    };


    // POST Methods

    static createNewClass = (classData) => {
        const path = this.apiPrefix;
        return axios.post(`${BackendRoutes.BACKEND_URL}${path}`, classData);
    };


    // PUT Methods

    static updateClassById = (classId, classData) => {
        const path = this.apiPrefix + classId;
        return axios.put(`${BackendRoutes.BACKEND_URL}${path}`, classData);
    };

    // DELETE Methods

    static deleteClassById = (classId) => {
        const path = this.apiPrefix + classId;
        return axios.delete(`${BackendRoutes.BACKEND_URL}${path}`);
    }

}

export default CourseService;
