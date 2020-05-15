import React, { cloneElement } from "react";

import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import CheckboxButton from "./CheckboxButton";

const CheckboxButtonGroup = props => {
  const { onChange, label, showLabel, error, children } = props;
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
    <FormControl component="fieldset" error={error}>
      {showLabel && <FormLabel component="legend">{label}</FormLabel>}
      <FormGroup aria-label={label}>
        {children &&
          children.map((child, index) =>
            cloneElement(child, {
              key: index,
              control: <CheckboxButton onChange={handleChange} />
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
