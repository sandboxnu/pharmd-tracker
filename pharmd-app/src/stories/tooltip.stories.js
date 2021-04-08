import React from "react";
import { withKnobs, select, text } from "@storybook/addon-knobs";
import tw from "twin.macro";
import Tooltip from "../components/Basic/Tooltip";

export default {
  title: "Tooltip",
  component: Tooltip,
  decorators: [withKnobs]
};

const label = "Placement";
const options = {
  Right: "right",
  Left: "left",
  Bottom: "bottom",
  Top: "top"
};
const defaultValue = "right";
const groupId = "GROUP-ID1";

const labelText = "Title(Label)";
const defaultValueText = "Title";

export const Default = () => (
  <div tw="h-250px w-full flex justify-center items-center">
    <Tooltip
      title={text(labelText, defaultValueText, groupId)}
      placement={select(label, options, defaultValue, groupId)}
      open
    >
      <div tw="h-60px w-60px bg-primary text-inverse leading-60px text-center">Child</div>
    </Tooltip>
  </div>
);
