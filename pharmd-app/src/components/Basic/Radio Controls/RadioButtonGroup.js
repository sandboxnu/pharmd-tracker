import React, { cloneElement } from "react";

import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioButton from "./RadioButton";
import PropTypes from "prop-types";

const RadioButtonsGroup = props => {
  const { onChange, label, showLabel, error, children, className } = props;
  const [value, setValue] = React.useState("all");

  const handleChange = event => {
    setValue(event.target.value);
    onChange(event, event.target.value);
  };

  //   var control = {control: <RadioButton />}
  return (
    <FormControl component="fieldset" error={error} className={className}>
      {showLabel && <FormLabel component="legend">{label}</FormLabel>}
      <RadioGroup
        aria-label={label}
        name={label ? `radio${label}` : "radioGroup"}
        value={value}
        onChange={handleChange}
      >
        {children &&
          children.map((child, index) =>
            cloneElement(child, {
              key: index,
              control: <RadioButton />
            })
          )}
      </RadioGroup>
    </FormControl>
  );
};

RadioButtonsGroup.defaultProps = {
  showLabel: true
};

export default RadioButtonsGroup;
