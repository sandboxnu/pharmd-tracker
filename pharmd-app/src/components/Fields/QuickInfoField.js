//-------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";
import { useGetOne, Loading } from "react-admin";

// Component Imports
import QuickInfo from "../Basic/QuickInfo";

// Style Imports
import { styled } from "twin.macro";

//-------------------------- STYLE --------------------------

const Info = styled.div`
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  text-align: center;
  width: 100%;
`;

//-------------------------- COMPONENT --------------------------

const QuickInfoField = ({ record = {}, source }) => {
  const id = record[source];
  const { data, loading, error } = useGetOne("students", id);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return  <p>Error, id: {id} is not found</p>;
  }
  return (
    <Info>
      <QuickInfo info={data.gpa} label="GPA" />
      <QuickInfo info={data.cohort.current} label="Cohort" />
      <QuickInfo info={`${data.test_avg}%`} label="Test Avg" />
    </Info>
  );
};

export default QuickInfoField;
