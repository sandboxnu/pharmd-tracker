/**
 * Description:
 * This Component creates a multi select drop down / text input to filter Student data based on GPA.
 * This component also allows the user to type in the option they are looking for to filter the options.
 *
 * Date: 03-18-2021
 */

// -------------------------- IMPORTS --------------------------
// Function Imports
import React from "react";

// Component Imports
import Chip from "@material-ui/core/Chip";
import ClearIcon from '@material-ui/icons/Clear';

// Style Imports
import tw from "twin.macro";

// -------------------------- COMPONENT --------------------------
const FilterChip = ({label, ...props}) => {
    return (
      <Chip
        {...props}
        tw="rounded-7px text-white"
        deleteIcon={<ClearIcon tw="text-white" />}
        label={label}
      />
    );
}

export default FilterChip;
