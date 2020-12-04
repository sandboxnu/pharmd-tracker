import React from "react";
import styled, { css } from "styled-components/macro";
import tw from "tailwind.macro";
import InfoIcon from "../Basic/IconInfo";
import ErrorIcon from "../../assets/icons/errorFilled.svg";
import { List, Datagrid, SimpleList, TextField, useGetOne } from "react-admin";
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
  padding-left: .4em;
`;

const CourseListField = ({ record = {}, source }) => {
  let courses = record[source];

  return (
    <div>
      <div>
        <Label>Courses</Label>
        <Sublabel>Spring 2020</Sublabel>
      </div>
      {courses.map((course, index) => {
        let i = index;
        const { data, loading, error } = useGetOne("courses", course.id);
        if (loading) {
          return <p key={index}>loading</p>;
        }
        if (error) {
          console.log("ERROR", error);
          return <p key={index}>ERROR</p>;
        }
        if (index === courses.length - 1) {
          return (
                <CourseField name={data.name} grade={course.percentage} isLine="primary" />
          );
        }
        else {
          return (
                <CourseField name={data.name} grade={course.percentage} isLine="" />
          );
        }
      })}
    </div>
  );
};

export default CourseListField;
