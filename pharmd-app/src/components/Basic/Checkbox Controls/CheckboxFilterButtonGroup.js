import React from "react";

import CheckboxButtonGroup from "./CheckboxButtonGroup";

const CheckboxFilterButtonGroup = props => {
  const { onChange, label, showLabel, error, checkboxCheckedClass, children, color, className, checkboxClassName, formGroupClassName } = props;
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
    <CheckboxButtonGroup
      onChange={handleChange}
      label={label}
      showLabel={showLabel}
      error={error}
      children={children}
      color={color}
      className={className}
      checkboxClassName={checkboxClassName}
      checkboxCheckedClass={checkboxCheckedClass}
      formGroupClassName={formGroupClassName}
    />
  )
};

export default CheckboxFilterButtonGroup;