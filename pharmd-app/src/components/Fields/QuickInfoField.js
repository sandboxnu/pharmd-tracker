import React from "react";
import { Loading, useGetOne } from "react-admin";
import { styled } from "twin.macro";

import QuickInfo from "../Basic/QuickInfo";
import {STUDENT} from "../../constants/apiObjects";

const Info = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: inline-block;
  text-align: center;
  width: 100%;
`;

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
    return <p>Error, id:{id} {' '} is not found</p>;
  }
  return (
    <Info>
      <QuickInfo info={data.gpa} label="GPA" />
      <QuickInfo info={cohort} label="Cohort" />
    </Info>
  );
};

export default QuickInfoField;
