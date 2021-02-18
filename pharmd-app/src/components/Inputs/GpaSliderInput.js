//-------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";
import { useInput } from "react-admin";

// Component Imports
import RangeSlider from "../Basic/RangeSlider";

//-------------------------- COMPONENT --------------------------

function valuetext(value) {
  return `${value}`;
}

const GpaSliderInput = ({ className, setFilter, ...props }) => {
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
      step={0.25}
    />
  );
};

export default GpaSliderInput;
