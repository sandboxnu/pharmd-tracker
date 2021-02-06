import React from "react";
import tw, { styled } from "twin.macro";
import { useGetOne } from "react-admin";
import CourseField from "./CourseField";

const Label = styled.h1`
  ${tw`fontStyle-6 font-medium inline-flex`}
  font-size: 1.3em;
  color: black;
  font-weight: bold;
`;

const Sublabel = styled.h2`
  ${tw`fontStyle-6 text-sm inline-flex`}
  color: rgba(192, 192, 192, 100);
  font-weight: bold;
  padding-left: 0.4em;
`;

const CourseListField = ({ record = {}, source }) => {
  const courses = record[source];

  return (
    <div>
      <div>
        <Label>Courses</Label>
        <Sublabel>Spring 2020</Sublabel>
      </div>
      {courses.map((course, index) => {
        const { data, loading, error } = useGetOne("courses", course.course_id);
        if (loading) {
          return <p key={index}>loading</p>;
        }
        if (error) {
          return <p key={index}>ERROR</p>;
        }
        if (index === courses.length - 1) {
          return <CourseField name={data.name} grade={course.grade} isLine="primary" />;
        }

        return <CourseField name={data.name} grade={course.grade} isLine="" />;
      })}
    </div>
  );
};

export default CourseListField;
