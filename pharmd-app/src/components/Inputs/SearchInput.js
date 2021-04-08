/**
 * Description: A basic no logicc search box component
 * TODO:
 *        -- Abstract the component: Potentially make this searchbox into a generic text field that takes in an icon.
 *        -- Use Tailwind classes
 *        -- Create more generic search fields
 * Date: 04-24-2020
 */

// -------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

// Style Imports
import { styled } from "twin.macro";

// Component Imports
import MuiInput from "@material-ui/core/Input";
import MuiPaper from "@material-ui/core/Paper";
import MuiSearchIcon from "@material-ui/icons/Search";

// -------------------------- STYLE --------------------------
const Paper = styled(MuiPaper)`
  border-radius: 4px;
  align-items: center;
  padding: ${props => `${props.theme.spacing(1)}px`};
  display: flex;
  flex-basis: 420;
`;

const Input = styled(MuiInput)`
  flex-grow: 1;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.05px;
`;

const SearchIcon = styled(MuiSearchIcon)`
  margin-right: ${props => `${props.theme.spacing(1)}px`};
  color: ${props => props.theme.palette.text.secondary};
`;

//-------------------------- COMPONENT --------------------------
const SearchInput = props => {
  const { className, onChange, style, ...rest } = props;

  return (
    <Paper {...rest} className={clsx(className)}>
      <SearchIcon />
      <Input {...rest} disableUnderline onChange={onChange} />
    </Paper>
  );
};

SearchInput.defaultProps = {};

SearchInput.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object
};

export default SearchInput;
