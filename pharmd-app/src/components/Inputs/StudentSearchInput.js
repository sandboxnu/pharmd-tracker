/**
 * Description:
 * Redux cccconnected Search Box Input.
 * To be used inside a <Filter/> component
 * TODO:
 *      -- Use Basic TextField Instead
 * Date: 04-24-2020
 */

//-------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";
import { useInput } from "react-admin";
import PropTypes from "prop-types";

// Component Imports
import SearchInput from "./SearchInput";

// Style Imports
import styled from "styled-components/macro";
import tw from "tailwind.macro";

//-------------------------- STYLE --------------------------

const SearchBox = styled(SearchInput)`
  ${tw`rounded-xl shadow-none p-2 bg-background`}
  input {
    ${tw`bg-background fontStyle-6`}
  }
`;

//-------------------------- COMPONENT --------------------------

const StudentSearchInput = props => {
  // React Final Form hook to access parameters
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

StudentSearchInput.defaultProps = {};

StudentSearchInput.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default StudentSearchInput;
