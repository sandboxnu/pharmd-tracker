import React from "react";
import tw from "twin.macro";
import RangeSlider from "../components/Basic/RangeSlider";

export default {
  title: "RangeSlider",
  component: RangeSlider
};

export const Default = () => (
  <div tw="ml-25px mt-100px">
    <RangeSlider
      onChange={(event, newVal) => console.log("NEW VALUE", newVal)}
      setValueText={value => `${value}`}
      min={0}
      max={4}
      step={0.5}
      disabled={false}
    />
  </div>
);
