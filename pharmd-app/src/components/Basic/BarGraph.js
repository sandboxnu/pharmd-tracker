// -------------------------- IMPORTS --------------------------

// Function Imports
import React, { useState } from "react";

// Style Imports
import { blue } from "@material-ui/core/colors";
import tw, { styled, css } from "twin.macro";

const Bar = ({ max, min, height, threshold }) => {
  const heightStr = `${height.toString()}px`;

  // this bar covers (from threshold[0] to threshold[1])
  let secondHeight;

  if (min > threshold[1] || max < threshold[0]) {
    secondHeight = 0;
  } else {
    secondHeight = height;
  }

  const secondHeightStr = `${secondHeight.toString()}px`;
  return (
    <div tw="flex-1" css={{ height: heightStr, "margin-right": ".1rem" }}>
      <div tw="bg-primary h-full opacity-25 rounded-t-lg" />
      <div
        // tw="bg-white relative rounded-t-lg w-full"
        tw="animate-grow bg-primary opacity-75 relative rounded-t-lg w-full"
        css={{ top: `-${secondHeightStr}` }}
      >
      </div>
    </div>
  );
};

// -------------------------- COMPONENT --------------------------

const BarGraph = ({ value, barGraphData, css, ...props }) => {
  // bar graph data is an array, where each element is a bar

  // get the max and the min from value a 2D array
  let max;
  let min;
  if (value[0] > value[1]) {
    max = value[0];
    min = value[1];
  } else {
    max = value[1];
    min = value[0];
  }

  const barGraphHeight = 60;

  // get the biggest number in the array
  const biggestFrequency = Math.max(...barGraphData);

  const interval = (1 / barGraphData.length) * 4;

  // the biggest number bar will be the height of the bar graph
  // use this number to determine the height of the other bars
  // Ex: x's height = (x / biggest_num) * height of bar graph
  return (
    <div tw="flex flex-row items-end relative" css={css}>
      {barGraphData.map((frequency, index) => {
        // add height to div: height: heightRatio * height
        const height = (frequency / biggestFrequency) * barGraphHeight;

        const threshold = [index * interval, (index + 1) * interval];
        return <Bar max={max} min={min} height={height} threshold={threshold} />;
      })}
    </div>
  );
};

export default BarGraph;
