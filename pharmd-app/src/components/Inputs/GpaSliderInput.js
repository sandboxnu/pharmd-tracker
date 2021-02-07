import React from "react";
import { useInput } from "react-admin";
import RangeSlider from "../Basic/RangeSlider";

function valuetext(value) {
  return `${value}`;
}

const GpaSliderInput = props => {
  const {
    meta: { error }
  } = useInput(props);

  const searchGpaRange = (event, newValue) => {
    if (newValue) {
      let gpaMin = newValue[0];
      let gpaMax = newValue[1];
      props.setFilter("gpa_gte", gpaMin);
      props.setFilter("gpa_lte", gpaMax);
    }
  };

  return (
    <RangeSlider
      onChange={searchGpaRange}
      setValueText={valuetext}
      disabled={error}
      max={4}
      min={0}
      step={0.25}
      className={props.className}
    />
  );
};

export default GpaSliderInput;
