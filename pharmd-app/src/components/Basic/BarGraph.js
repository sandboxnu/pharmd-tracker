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
  const withinThreshold = min < threshold[1] && max > threshold[0];

  if (withinThreshold) {
    console.log(`within thresh `);
    secondHeight = height;
  } else {
    console.log("not within");
    secondHeight = 0;
  }

  const secondHeightStr = `${secondHeight.toString()}px`;
  const topStr = `-${height.toString()}px`;
  // return (
  //   <div tw="flex-1" css={{ height: heightStr, "margin-right": ".1rem" }}>
  //     <div tw="bg-primary h-full opacity-75 rounded-t-lg" />
  //     <div
  //       tw="bg-white relative rounded-t-lg w-full"
  //       css={{ height: secondHeightStr, top: topStr }}
  //       className={animate}
  //     >
  //       <div tw="bg-primary h-full opacity-25 rounded-t-lg w-full" />
  //     </div>
  //   </div>
  // );

  //try switching the two ^^^ so top is opacity-75 and bottom is opacity-25

  // animations is run ONLY when className goes from an empty String to a non-empty String
  return (
    <div tw="flex-1" css={{ height: heightStr, "margin-right": ".1rem" }}>
      <div tw="bg-primary h-full opacity-25 rounded-t-lg" />
      {withinThreshold ? (
        <div
          tw="animate-grow bg-primary opacity-75 relative rounded-t-lg w-full"
          css={{ height: secondHeightStr, top: topStr }}
        />
      ) : (
        <div
          tw="bg-primary opacity-75 relative rounded-t-lg w-full"
          css={{ height: secondHeightStr, top: topStr }}
        />
      )}
    </div>
  );
};
// let animate = "";
// let animate2 = "";
//
// if (min >= threshold[1] || max <= threshold[0]) {
//   // console.log(`bar `);
//   secondHeight = height;
//   animate = "bar ";
// } else {
//   // console.log("car");
//   secondHeight = 0;
//   animate2 = "car";
// }
//
// const secondHeightStr = `${secondHeight.toString()}px`;
// const topStr = `-${height.toString()}px`;
// return (
//     <div tw="flex-1" css={{ height: heightStr, "margin-right": ".1rem" }}>
//       <div tw="bg-primary h-full opacity-75 rounded-t-lg" />
//       <div
//           tw="bg-white h-full relative rounded-t-lg w-full"
//           className={animate}
//           css={{ height: secondHeightStr, top: topStr }}
//       >
//         <div tw="bg-primary h-full opacity-25 rounded-t-lg w-full" css={{ height: secondHeightStr }} className={animate2}/>
//       </div>
//     </div>
// );
// -------------------------- COMPONENT --------------------------

const BarGraph = ({ value, barGraphData, css, ...props }) => {
  // bar graph data is an array, where each element is a bar

  // get the max and the min from value an array of size 2
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
