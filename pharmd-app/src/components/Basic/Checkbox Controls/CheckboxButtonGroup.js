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

  // If the checkbox was checked and the value is not in our array of filter values then add the value to the array
  // If the checkbox was unchecked and the value is in our array of filter values then remove the value from the array
  // Finally, update the filter values and call the onChange function with the new list
  const handleChange = event => {
    const eventVal = event.target.value;
    let newVal = value.values;
    const index = newVal.indexOf(eventVal);
    if (event.target.checked) {
      if (index < 0) {
        newVal.push(eventVal);
        console.log("Status Value added: ", eventVal);
      }
    } else if (index >= 0) {
      newVal.splice(index, 1);
      console.log("Status Value removed: ", eventVal, " at index ", index);
    }
    setValue({ values: newVal });
    console.log("Status Value: ", newVal);
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
