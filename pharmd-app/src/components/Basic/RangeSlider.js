/**
 * Description:
 * This Component creates a slider.
 *
 * Date: 03-25-2021
 */

// -------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";
import PropTypes from "prop-types";

// Component Imports
import Slider from "@material-ui/core/Slider";

// Style Imports
import { styled } from "twin.macro";

// -------------------------- COMPONENT --------------------------

const Label = styled.div``;

function valuetext(value) {
  return `${value}`;
}

/*
   TODO: Might change onCHnage to onCHnageCommited 
   for performace reason. Thiss will trigger the 
   onChange after the user lift the mouse press up
*/
const RangeSlider = props => {
  const {
    onChange,
    setValueText,
    disabled,
    max,
    min,
    step,
    className,
    sliderClasses,
    value,
    setValue
  } = props;

  let rangeValue;
  let setRangeValue;

  if (value == null || setValue == null) {
    // Values were not given
    [rangeValue, setRangeValue] = React.useState([min, max]);
  } else {
    // use the variables givens
    rangeValue = value;
    setRangeValue = setValue;
  }

  const handleChange = (event, newValue) => {
    setRangeValue(newValue);
    onChange(event, newValue);
  };

  return (
    <div className={className}>
      <span>
        <h4>
          GPA Range <span>{`(${rangeValue[0]} - ${rangeValue[1]})`}</span>
        </h4>
      </span>

      <Slider
        classes={{
          root: sliderClasses.root,
          rail: sliderClasses.rail,
          thumb: sliderClasses.thumb,
          track: sliderClasses.track
        }}
        value={rangeValue}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={setValueText}
        disabled={disabled}
        min={min}
        max={max}
        step={step}
      />
    </div>
  );
};

RangeSlider.propTypes = {
  // Typecheck for function with two arguments
  onChange(props, propName, componentName) {
    const fn = props[propName];
    if (
      !fn.prototype ||
      (typeof fn.prototype.constructor !== "function" && fn.prototype.constructor.length !== 2)
    ) {
      return new Error(`${propName}must be a function with 2 args`);
    }
  },
  setValueText: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  disabled: PropTypes.bool
};

RangeSlider.defaultProps = {
  setValueText: value => `${value}`,
  min: 0,
  max: 100,
  step: 0.5,
  disabled: false
};

export default RangeSlider;
