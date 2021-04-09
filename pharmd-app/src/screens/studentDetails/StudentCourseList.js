import React from "react";
import { ReferenceManyField } from "react-admin";
import TextField from "../../components/Fields/TextField";
import EmphasisField from "../../components/Fields/EmphasisField";
import GradeField from "../../components/Fields/GradeField";
import Table from "../../components/Table/Table";
import { STUDENT_COURSE } from "../../constants/apiObjects";

const StudentCourseList = ({ resource, basePath, record }) => {
  return (
    <ReferenceManyField
      resource={resource}
      basePath={basePath}
      record={record}
      reference="studentCourses"
      target="student"
      addLabel={false}
    >
      <Table>
        <EmphasisField source={STUDENT_COURSE.COURSE_NAME} label="Name" />
        <TextField source={STUDENT_COURSE.COURSE_SUBJECT} label="Subject" />
        <TextField source={STUDENT_COURSE.COURSE_NUMBER} label="Number" />
        <GradeField source={STUDENT_COURSE.PERCENTAGE} label="Score" />
        <GradeField source={STUDENT_COURSE.LETTER_GRADE} label="" />
      </Table>
    </ReferenceManyField>
  );
};
export default StudentCourseList;
