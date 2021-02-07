/**
 * Description:
 * This Component creates a group of checkbox buttons.
 * There is one checkbox created for each children.
 * This function also accepts an onChange function that will be executed every time
 * a check box is unchecked.
 * TODO:
 * Date: 04-23-2020
 */

//-------------------------- IMPORTS --------------------------

// Function Imports
import React, { cloneElement } from "react";

// Component Imports
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import CheckboxButton from "./CheckboxButton";

//-------------------------- COMPONENT --------------------------

const CheckboxButtonGroup = props => {
  const { onChange, label, showLabel, error, children, color, className, checkboxClassName } = props;

  return (
    <FormControl component="fieldset" error={error} className={className}>
      {showLabel && <FormLabel component="legend">{label}</FormLabel>}
      <FormGroup aria-label={label}>
        {children &&
          children.map((child, index) => {
            return cloneElement(child, {
              key: index,
              control: <CheckboxButton
                onChange={onChange}
                color={color}
                className={checkboxClassName}
                // icon={undefined}
                icon={ child.props.icon ? child.props.icon : undefined }
                checkedIcon={ child.props.checkedIcon ? child.props.checkedIcon : undefined }
              />
            })}
          )}
      </FormGroup>
    </FormControl>
  );
};

CheckboxButtonGroup.defaultProps = {
  showLabel: true
};

export default CheckboxButtonGroup;
