import React from "react";
import Icon from "../components/Basic/Icon";
import InfoIconI from "../components/Basic/IconInfo";
import IconButtonI from "../components/Basic/IconButton";
import TestIcon from "../assets/icons/student.svg";

import { withKnobs, select } from "@storybook/addon-knobs";

export default {
  title: "Icon",
  // component: Icon,
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
const value = select(label, options, defaultValue, groupId);

const labelS = "Size";
const optionsS = {
  Default: "inherit",
  Small: "small",
  Large: "large"
};
const defaultValueS = "inherit";

console.log(TestIcon);
export const Default = () => (
  <Icon
    src={TestIcon}
    color={select(label, options, defaultValue, groupId)}
    size={select(labelS, optionsS, defaultValueS, groupId)}
  ></Icon>
);

export const InfoIcon = () => (
  <div
    style={{
      width: "100%",
      height: "250px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <InfoIconI src={TestIcon} text={"TEST"} />
  </div>
);

export const IconButton = () => (
  <div
    style={{
      width: "100%",
      height: "250px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <IconButtonI src={TestIcon} text={"TEST"} />
  </div>
);