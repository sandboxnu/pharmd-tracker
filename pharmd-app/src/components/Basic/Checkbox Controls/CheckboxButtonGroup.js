/**
 * Description:
 * This Component creates a group of checkbox buttons.
 * There is one checkbox created for each children.
 * This function also accepts an onChange function that will be exected every time
 * a check box is unchecked.
 * TODO:
 * Date: 04-23-2020
 */

//-------------------------- IMPORTS --------------------------

// Function Imports
import React, { cloneElement } from "react";

// Component Imports
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import CheckboxButton from "./CheckboxButton";

//-------------------------- COMPONENT --------------------------

const CheckboxButtonGroup = props => {
  const { onChange, label, showLabel, error, children, color, className, checkboxClassName } = props;
  const [value, setValue] = React.useState({
    values: []
  });

  const handleChange = event => {
    const eventVal = event.target.value;
    let newVal = value.values;
    const index = newVal.indexOf(eventVal);
    if (event.target.checked) {
      if (index < 0) {
        newVal.push(eventVal);
      }
    } else if (index >= 0) {
      newVal.splice(index, 1);
    }
    setValue({ values: newVal });
    onChange(event, newVal);
  };

  return (
    <FormControl component="fieldset" error={error} className={className}>
      {showLabel && <FormLabel component="legend">{label}</FormLabel>}
      <FormGroup aria-label={label}>
        {children &&
          children.map((child, index) =>
            cloneElement(child, {
              key: index,
              control: <CheckboxButton onChange={handleChange} color={color} className={checkboxClassName} />
            })
          )}
      </FormGroup>
    </FormControl>
  );
};

CheckboxButtonGroup.defaultProps = {
  showLabel: true
};

export default CheckboxButtonGroup;
