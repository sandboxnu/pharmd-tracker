import React, { useEffect } from "react";
import { ReferenceInput, SelectInput, TextInput, Filter } from "react-admin";
import { SharedFilterConsumer } from "./FilterContext";

const SetUp = ({ updateProps, ...props }) => {
  console.log("FILTER", props);
  useEffect(() => {
    updateProps({ ...props });
  }, []);

  return <Filter {...props}></Filter>;
};

export const StudentFilterSetUp = props => {
  return (
    <SharedFilterConsumer>
      {({ updateProps }) => {
        return <SetUp updateProps={updateProps} {...props}></SetUp>;
      }}
    </SharedFilterConsumer>
  );
};

export const StudentFilter = () => {
  return (
    <SharedFilterConsumer>
      {({ filterProps }) => {
        console.log("CONSUMER", filterProps);
        return (
          <Filter {...filterProps}>
            <TextInput label="Search" source="q" alwaysOn />
            {/* <ReferenceInput label="User" source="userId" reference="users"> */}
            {/* <SelectInput label="User" optionText="name" source="userId" reference="users" /> */}
            {/* </ReferenceInput> */}
          </Filter>
        );
      }}
    </SharedFilterConsumer>
  );
};
