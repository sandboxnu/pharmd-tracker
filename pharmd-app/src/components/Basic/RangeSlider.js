import React from "react";
import Slider from "@material-ui/core/Slider";
import PropTypes from "prop-types";
import { styled } from "twin.macro";

const Label = styled.div`
  
`;

function valuetext(value) {
  return `${value}`;
}

/*
   TODO: Might change onCHnage to onCHnageCommited 
   for performace reason. Thiss will trigger the 
   onChange after the user lift the mouse press up
*/
const RangeSlider = props => {
  const { onChange, setValueText, disabled, max, min, step, className } = props;
  const [value, setValue] = React.useState([min, max]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onChange(event, newValue);
  };

  return (
    <div className={className}>
      <span>
        <h4>{`GPA Range `} <span>{`(${value[0]} - ${value[1]})`}</span></h4>
      </span>

      <Slider
        value={value}
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
  onChange: function(props, propName, componentName) {
    var fn = props[propName];
    if (
      !fn.prototype ||
      (typeof fn.prototype.constructor !== "function" && fn.prototype.constructor.length !== 2)
    ) {
      return new Error(propName + "must be a function with 2 args");
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
