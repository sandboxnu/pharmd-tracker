import * as BackendRoutes from "../config/backendRoutes"
import axios from "axios";

class StudentAssessmentService {
    static apiPrefix = 'student-assessments/';

    // GET Methods

    static getAssessmentsFromStudent = studentID => {
        const path = this.apiPrefix + studentID;
        return axios.get(`${BackendRoutes.BACKEND_URL}${path}`);
    };

    // POST Methods

    static addNewStudentAssessment = (studentID, assessment) => {
        const path = this.apiPrefix + studentID;
        return axios.post(`${BackendRoutes.BACKEND_URL}${path}`)
    };

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
     * @param data array of shape:<br/>
     *     [{
     *         NUID: number;
     *         courseName: string (ex "PHMD5900 36657 Self-Care/Nonprescription Meds SEC 01 Spring 2020 [BOS-2-TR]" )
     *         examName: string
     *         percentage: 10
     *         studentName: string (Last, First)
     *     }...]
     * }]
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
                lastName: ass.studentName.split(',')[0].replace(' ', ''),
                firstName: ass.studentName.split(',')[1].replace(' ', '')
            }
        });
        console.log("Sending exams...");
        const url = `${BackendRoutes.BACKEND_URL}${path}`;
        console.log(url)
        return axios.post(url, formattedExams)
    };
}

export default StudentAssessmentService;
