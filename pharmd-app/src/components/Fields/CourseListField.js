import React from "react";
import styled, { css } from "styled-components/macro";
import tw from "tailwind.macro";
import InfoIcon from "../Basic/IconInfo";
import ErrorIcon from "../../assets/icons/errorFilled.svg";
import { List, Datagrid, SimpleList, TextField, useGetOne } from "react-admin";

const Label = styled.h1`
  ${tw`fontStyle-6 font-medium inline-flex`}
  color: black;
  font-weight: bold;
`;

const Sublabel = styled.h2`
  ${tw`fontStyle-6 text-sm inline-flex`}
  color: rgba(192, 192, 192, 100);
  font-weight: bold;
  padding-left: .4em;
`;

const Info = styled.div`
  ${tw`fontStyle-6 text-gray-700 font-medium inline-flex`}
  width: 100%;
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #DCDCDC;
  
  ${props => props.primary && css`
    border-bottom: 0px;
  `}
`;

const Name = styled.div`
  position: relative;
`;

const Grade = styled.div`
  font-weight: bold;
  position: relative;
  margin-left: auto;
`;

const Circle = styled.span`
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 15px;
  height: 15px;
  width: 15px;
  background-color: red;
  border-radius: 50%;
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
        const { data, loading, error } = useGetOne("courses", course.course_id);
        if (loading) {
          return <p key={index}>loading</p>;
        }
        if (error) {
          console.log("ERROR", error);
          return <p key={index}>ERROR</p>;
        }
        if (index === courses.length - 1) {
          return (
              <Info primary>
                <Circle/>
                <Name>{data.name}</Name>
                <Grade>{course.grade}</Grade>
              </Info>
          );
        }
        else {
          return (
              <Info>
                <Circle/>
                <Name>{data.name}</Name>
                <Grade>{course.grade}</Grade>
              </Info>
          );
        }
      })}
    </div>
  );
};

// {index === (courses.length-1) ?
//     <Info>
//       <Circle/>
//       <Name>{data.name}</Name>
//       <Grade>{course.grade}</Grade>
//     </Info>
//     :
//     <InfoUnderlined>
//       <Circle/>
//       <Name>{data.name}</Name>
//       <Grade>{course.grade}</Grade>
//     </InfoUnderlined>
// }

export default CourseListField;
