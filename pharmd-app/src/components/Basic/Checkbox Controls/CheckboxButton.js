import React from "react";
import Checkbox from '@material-ui/core/Checkbox';
import Radio from "@material-ui/core/Radio";

const CheckboxButton = props => {
  return <Checkbox disableRipple color="default" {...props} />;
};

export default CheckboxButton;