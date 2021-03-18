//-------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";
import { useInput } from "react-admin";

// Component Imports
import RangeSlider from "../Basic/RangeSlider";
import { withStyles } from "@material-ui/core/styles";

// -------------------------- STYLE --------------------------

const styles = {
  rail: {
    height: "5px"
  },

  thumb: {
    height: "15px",
    width: "15px"
  },

  track: {
    height: "5px"
  }
};

//-------------------------- COMPONENT --------------------------

function valuetext(value) {
  return `${value}`;
}

const GpaSliderInput = ({ classes, className, setFilter, ...props }) => {
  const {
    meta: { error }
  } = useInput(props);

  const searchGpaRange = (event, newValue) => {
    if (newValue) {
      const gpaMin = newValue[0];
      const gpaMax = newValue[1];
      setFilter("gpa_gte", gpaMin);
      setFilter("gpa_lte", gpaMax);
    }
  };

  return (
    <RangeSlider
      className={className}
      disabled={error}
      onChange={searchGpaRange}
      max={4}
      min={0}
      setValueText={valuetext}
      sliderClasses={classes}
      step={0.25}
    />
  );
};

export default withStyles(styles)(GpaSliderInput);
