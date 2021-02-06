import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

const CheckboxButton = props => {
  return <Checkbox disableRipple color="default" {...props} />;
};

export default CheckboxButton;
