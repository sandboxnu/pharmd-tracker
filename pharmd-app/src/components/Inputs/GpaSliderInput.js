import React from "react";
import { useInput } from "react-admin";
import RangeSlider from "../Basic/RangeSlider";

function valuetext(value) {
  console.log("VALUES", value);
  return `${value}`;
}

const GpaSliderInput = props => {
  const {
    meta: { error }
  } = useInput(props);

  return (
    <RangeSlider
      onChange={props.onChange}
      setValueText={valuetext}
      disabled={error}
      max={4}
      min={0}
      step={0.25}
    />
  );
};

export default GpaSliderInput;
