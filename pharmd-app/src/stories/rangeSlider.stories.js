import React from "react";
import { withKnobs, select, text } from "@storybook/addon-knobs";
import Avatar from "../components/Basic/Avatar";
import imgProfile from "../assets/images/mountains.jpg";
import RangeSlider from "../components/Basic/RangeSlider";
import tw from "twin.macro";

export default {
  title: "RangeSlider",
  component: RangeSlider
};

// const groupId = "GROUP-ID2";

// const firstName = "First Name";
// const defaultFirstName = "";

// const lastName = "Last Name";
// const defaultLastName = "";

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
