// -------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";
import { Loading, useGetOne } from "react-admin";

// Component Imports
import { styled } from "twin.macro";
import QuickInfo from "../Basic/QuickInfo";
import {STUDENT} from "../../constants/apiObjects";

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
  const entryDate = record[STUDENT.ENTRY_DATE];
  const gradDate = record[STUDENT.GRAD_DATE];
  const cohort = `${entryDate.slice(-2)}/${gradDate.slice(-2)}`;

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p>
Error, id:{id}
{' '}
is not found
</p>;
  }
  return (
    <Info>
      <QuickInfo info={data.gpa} label="GPA" />
      <QuickInfo info={cohort} label="Cohort" />
    </Info>
  );
};

export default QuickInfoField;
