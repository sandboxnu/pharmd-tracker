import React from "react";
import { useGetOne, Loading } from "react-admin";
import { styled } from "twin.macro";

import QuickInfo from "../Basic/QuickInfo";

const Info = styled.div`
    position: relative;
    margin-left: auto;
    margin-right: auto;
    display: inline-block;
    text-align: center; 
    width: 100%;
`;

const QuickInfoField = ({record = {}, source}) => {

    let id = record[source];
    const {data, loading, error} = useGetOne('students', id);
    if (loading) {
        return <Loading/>;
    }
    if (error) {
        return <p>Error, id: {id} is not found</p>;
    }
    return (
        <Info>
            <QuickInfo info={data.gpa} label="GPA" />
            <QuickInfo info={data.cohort.current} label="Cohort" />
            <QuickInfo info={data.test_avg + '%'} label="Test Avg" />
        </Info>
    );
};

export default QuickInfoField;