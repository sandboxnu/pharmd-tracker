import React from "react";
import { select, withKnobs } from "@storybook/addon-knobs";
import Icon from "../components/Basic/Icon";
import IconButtonI from "../components/Basic/IconButton";
import TestIcon from "../assets/icons/student.svg";

export default {
  title: "Icon",
  decorators: [withKnobs]
};

const label = "Color";
const options = {
  Default: "inherit",
  Primary: "primary",
  Secondary: "secondary",
  Tertiary: "tertiary",
  Action: "action",
  Error: "error",
  Disable: "disabled",
  White: "white",
  Black: "black"
};
const defaultValue = "inherit";
const groupId = "GROUP-ID1";

const labelS = "Size";
const optionsS = {
  Default: "inherit",
  Small: "small",
  Large: "large"
};
const defaultValueS = "inherit";

export const Default = () => (
  <Icon
    src={TestIcon}
    color={select(label, options, defaultValue, groupId)}
    size={select(labelS, optionsS, defaultValueS, groupId)}
  />
);

export const IconButton = () => (
  <div tw="h-250px w-full flex justify-center items-center">
    <IconButtonI src={TestIcon} text="TEST" />
  </div>
);
