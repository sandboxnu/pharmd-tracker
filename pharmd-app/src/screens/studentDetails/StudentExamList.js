import React from "react";
import { ReferenceManyField } from "react-admin";
import TextField from "../../components/Fields/TextField";
import EmphasisField from "../../components/Fields/EmphasisField";
import GradeField from "../../components/Fields/GradeField";
import Table from "../../components/Table/Table";
import { STUDENT_EXAM } from "../../constants/apiObjects";

const StudentExamList = ({ resource, basePath, record }) => {
  return (
    <ReferenceManyField
      resource={resource}
      basePath={basePath}
      record={record}
      reference="studentExams"
      target="student"
      addLabel={false}
    >
      <Table>
        <TextField source={STUDENT_EXAM.EXAM_NAME} label="Name" />
        <EmphasisField source={STUDENT_EXAM.COURSE_NAME} label="Course" />
        <GradeField source={STUDENT_EXAM.PERCENTAGE} label="Score" />
        <GradeField source={STUDENT_EXAM.LETTER_GRADE} label="" />
      </Table>
    </ReferenceManyField>
  );
};
export default StudentExamList;
