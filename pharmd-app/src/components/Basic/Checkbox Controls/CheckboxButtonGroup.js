/**
 * Description:
 * This Component creates a group of checkbox buttons.
 * There is one checkbox created for each children.
 * This function also accepts an onChange function that will be executed every time
 * a check box is unchecked.
 *
 * Date: 04-23-2020
 * This function also accepts an onChange function that will be exected every time
 * a check box is unchecked.
 */

// -------------------------- IMPORTS --------------------------

// Function Imports
import React, { cloneElement } from "react";

// Component Imports
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import CheckboxButton from "./CheckboxButton";

// -------------------------- COMPONENT --------------------------

const CheckboxButtonGroup = props => {
  const {
    checkboxCheckedClass,
    checkboxClassName,
    children,
    className,
    color,
    error,
    formGroupClassName,
    label,
    onChange,
    showLabel,
  } = props;

  return (
    <FormControl component="fieldset" error={error} className={className}>
      {showLabel && <FormLabel component="legend">{label}</FormLabel>}
      <FormGroup aria-label={label} className={formGroupClassName}>
        {children &&
          children.map((child, index) => {
            // the child is expected to be a Material UI - FormControlLabel
            // this allows for the component to handle create a checkbox group of any size
            return cloneElement(child, {
              key: index,
              control: (
                <CheckboxButton
                  onChange={onChange}
                  color={color}
                  classes={{
                    checked: checkboxCheckedClass
                  }}
                  className={checkboxClassName}
                  icon={child.props.icon || undefined}
                  checkedIcon={child.props.checkedIcon || undefined}
                  labelPlacement={child.props.checkedIcon || undefined}
                  // accepts an onclick prop which represents an onClick function to use
                  onClick={child.props.onclick}
                />
              )
            });
          })}
      </FormGroup>
    </FormControl>
  );
};

CheckboxButtonGroup.defaultProps = {
  showLabel: true
};

export default CheckboxButtonGroup;
