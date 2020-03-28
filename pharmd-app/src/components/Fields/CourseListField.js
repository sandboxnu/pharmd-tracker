import React from "react";
import styled from "styled-components/macro";
import tw from "tailwind.macro";
import InfoIcon from "../Basic/IconInfo";
import ErrorIcon from "../../assets/icons/errorFilled.svg";
import { List, Datagrid, SimpleList, TextField, useGetOne } from "react-admin";

const Field = styled.div`
  ${tw`fontStyle-6 text-gray-700 font-medium inline-flex`}
`;

const CourseListField = ({ record = {}, source }) => {
  let courses = record[source];

  return (
    <div>
      {courses.map((course, index) => {
        const { data, loading, error } = useGetOne("courses", course.course_id);
        if (loading) {
          return <p key={index}>loading</p>;
        }
        if (error) {
          console.log("ERROR", error);
          return <p key={index}>ERROR</p>;
        }
        return (
          <div key={index}>
            <span>{data.name}</span>

            <span>{course.grade}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CourseListField;
