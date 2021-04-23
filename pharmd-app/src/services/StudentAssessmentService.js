import * as BackendRoutes from "../config/backendRoutes"
import axios from "axios";

/**
 * @typedef { import('../typeDefs.js').BasicStudentAssessment} BasicStudentAssessment
 */

class StudentAssessmentService {
    static apiPrefix = 'studentExams/';

    // GET Methods

    static getAssessmentsFromStudent = studentID => {
        const path = this.apiPrefix + studentID;
        return axios.get(`${BackendRoutes.BACKEND_URL}${path}`);
    };

    // POST Methods

    /**
     * Adds a new student assessment to the backend
     * @param studentID {string}
     * @param assessment {}
     * @returns {Promise<AxiosResponse<T>>}
     */
    static addNewStudentAssessment = (studentID, assessment) => {
        const path = this.apiPrefix + studentID;
        return axios.post(`${BackendRoutes.BACKEND_URL}${path}`, assessment)
    };

    /**
     * Given a string that contains a course term, finds it
     * @param courseName {string}
     * @returns {string}
     */
    static findCourseNameTerm = (courseName) => {
        const words = courseName.split(' ');
        let wordIndex = -1;
        const semester = words.find((el, index) => {
            switch (el) {
                case 'Spring':
                case 'Summer':
                case 'Fall':
                    wordIndex = index;
                    return true;
                default:
                    return false;
            }
        });
        if (semester) {
            return semester + ' ' + words[wordIndex + 1];
        }
        return '';
    };

    /**
     * Makes call to backend to upload these assessments to the DB
     * @param assessments {Array<BasicStudentAssessment>}
     * @param gradeTotals Array
     */
    static addManyStudentAssessments = (assessments, gradeTotals) => {
        const path = this.apiPrefix + 'many/';
        const formattedExams = assessments.map((ass, index) => {
            const courseID = ass.courseName.split(' ')[0];
            const courseTerm = StudentAssessmentService.findCourseNameTerm(ass.courseName);
            const percentage = ass.percentage; // (parseInt(gradeTotals[index]) || 1);
            return {
                NUID: ass.NUID.replace(/\D/g,'') || '',
                courseID,
                courseTerm,
                assessmentName: ass.examName,
                percentage,
                courseName: ass.courseName,
                lastName: ass.studentName.split(',')[0].replace(' ', ''),
                firstName: ass.studentName.split(',')[1].replace(' ', '')
            }
        });
        const url = `${BackendRoutes.BACKEND_URL}${path}`;
        return axios.post(url, formattedExams)
    };
}

export default StudentAssessmentService;
