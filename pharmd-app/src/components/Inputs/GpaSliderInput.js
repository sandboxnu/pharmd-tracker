/**
 * Description:
 * This Component creates a slider to filter Student data based on GPA.
 *
 * Date: 03-18-2021
 */

//-------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";
import { useInput } from "react-admin";

// Component Imports
import RangeSlider from "../Basic/RangeSlider";
import { withStyles } from "@material-ui/core/styles";

// Style Imports
import { blue } from "@material-ui/core/colors";
import BarGraph from "../Basic/BarGraph";
import Slider from "@material-ui/core/Slider";

// -------------------------- STYLE --------------------------

const styles = {
  // the line behind the range showing the full width of the range
  rail: {
    height: "5px"
  },

  // rangSlider styling
  rangeSlider: {
    margin: "2rem 0 0 0",
    width: 300,
    "& h4": {
      margin: "0 0 1.33em 0",
      color: "black",
      fontWeight: "650",
      fontSize: "1.1rem",
      fontFamily:
        "Montserrat-SemiBold, Montserrat-Bold, Inter-Medium, Inter-SemiBold, Inter-Regular, Inter-Bold, sans-serif",
      "& span": {
        color: blue[700],
        fontSize: "1rem"
      }
    }
  },

  // change the styling of the handles (round clickable object at either end of the slider)
  thumb: {
    height: "15px",
    width: "15px"
  },

  // the line that dynamically shrinks or grows based on the user's interaction with this component
  track: {
    height: "5px"
  }
};

//-------------------------- COMPONENT --------------------------

function valuetext(value) {
  return `${value}`;
}

const GpaSliderInput = ({ classes, setFilter, value, setValue, ...props }) => {
  const {
    meta: { error }
  } = useInput(props);

  // Adds a gpa filter to student data
  const searchGpaRange = (event, newValue) => {
    if (newValue) {
      const gpaMin = newValue[0];
      const gpaMax = newValue[1];
      setFilter("gpa", [gpaMin, gpaMax]);
    }
  };

  // compute height difference between bar graph and slider
  // slider to top - (bar graph to top + height of bar graph)
  const top = 14;
  const topStr = top.toString() + "px";
  const css = { top: topStr };

  // TODO: Remove temporary data and add real data from back end
  const frequencies = [1, 2, 2.25, 2.5, 1.75, 2.75, 2.25, 2, 2.5, 1.5];

  return (
    <div className={classes.rangeSlider}>
      <h4>
        GPA Range <span>{`(${value[0]} - ${value[1]})`}</span>
      </h4>
      <BarGraph
        css={css}
        value={value}
        barGraphData={frequencies}
      />
      <RangeSlider
        disabled={error}
        onChange={searchGpaRange}
        max={4}
        min={0}
        setValueText={valuetext}
        sliderClasses={classes}
        step={0.25}
        value={value}
        setValue={setValue}
      />
    </div>
  );
};

export default withStyles(styles)(GpaSliderInput);
