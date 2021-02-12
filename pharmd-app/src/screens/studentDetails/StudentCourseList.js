import React from "react";
import {ReferenceManyField} from "react-admin";
import TextField from "../../components/Fields/TextField";
import Table from "../../components/Table/Table";
import {STUDENT_COURSE} from "../../constants/apiObjects";

const StudentCourseList = ({resource, basePath}) => {
    return (
      <ReferenceManyField
        resource={resource}
        basePath={basePath}
        reference={'studentCourses'}
        target={'student'}
        addLabel={false}
      >
        <Table>
          <TextField source={STUDENT_COURSE.COURSE_SUBJECT} label="Subject"/>
          <TextField source={STUDENT_COURSE.COURSE_NUMBER} label="Number"/>
          <TextField source={STUDENT_COURSE.COURSE_NAME} label="Name"/>
          <TextField source={STUDENT_COURSE.SEMESTER} label="Semester"/>
          <TextField source={STUDENT_COURSE.YEAR} label="Year"/>
          <TextField source={STUDENT_COURSE.PERCENTAGE} label="Percentage"/>
          <TextField source={STUDENT_COURSE.LETTER_GRADE} label="Letter Grade"/>
        </Table>
      </ReferenceManyField>
    );
};
export default StudentCourseList;
