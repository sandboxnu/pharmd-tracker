/**
 * Description:
 * This Component creates a single checkbox button.
 * TODO:
 * Date: 04-23-2020
 */

//-------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";

// Component Imports
import Checkbox from '@material-ui/core/Checkbox';

//-------------------------- COMPONENT --------------------------
const CheckboxButton = props => {
  return <Checkbox disableRipple color="default" {...props} />;
};

export default CheckboxButton;