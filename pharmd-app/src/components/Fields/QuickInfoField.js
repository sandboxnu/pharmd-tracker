// -------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";
import { Loading, useGetOne } from "react-admin";
import { formatDecimal } from "../../services/Utility";

// Component Imports
import { styled } from "twin.macro";
import QuickInfo from "../Basic/QuickInfo";

// Style Imports

// -------------------------- STYLE --------------------------

const Info = styled.div`
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  text-align: center;
  width: 100%;
`;

// -------------------------- COMPONENT --------------------------

const QuickInfoField = ({ record = {}, source }) => {
  const id = record[source];
  const { data, loading, error } = useGetOne("students", id);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p>Error, id:{id} {' '} is not found</p>;
  }
  return (
    <Info>
      <QuickInfo info={formatDecimal(data.gpa)} label="GPA" />
      <QuickInfo info={data.gradDate} label="Cohort" />
    </Info>
  );
};

export default QuickInfoField;
