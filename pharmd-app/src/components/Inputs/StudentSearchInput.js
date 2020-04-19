import React, { useEffect } from "react";
import { useInput } from "react-admin";
import SearchInput from "./SearchInput";
import styled from "styled-components/macro";
import tw from "tailwind.macro";

const SearchBox = styled(SearchInput)`
  ${tw`rounded-xl shadow-none p-2 bg-background`}

  input {
    ${tw`bg-background fontStyle-6`}
  }
`;

const StudentSearchInput = props => {
  const {
    input: { name, onChange },
    meta: { touched, error },
    isRequired
  } = useInput(props);

  return (
    <SearchBox
      name={name}
      placeholder={props.label}
      onChange={onChange}
      error={!!(touched && error)}
      required={isRequired}
    />
  );
};

export default StudentSearchInput;
