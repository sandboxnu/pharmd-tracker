import React from "react";
import tw, { styled, css } from "twin.macro";

const Info = styled.div`
  ${tw`fontStyle-6 text-black font-medium inline-flex`}
  width: 100%;
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #dcdcdc;
  font-size: 0.89em;
  ${props =>
    props.primary &&
    css`
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

const CourseField = ({ name, grade, isLine }) => {
  return (
    <Info primary={isLine}>
      <Circle />
      <Name>{name}</Name>
      <Grade>{`${grade}%`}</Grade>
    </Info>
  );
};

export default CourseField;
