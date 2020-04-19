import React from "react";
import { withKnobs, select, text } from "@storybook/addon-knobs";
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
const value = select(label, options, defaultValue, groupId);

const labelText = "Title(Label)";
const defaultValueText = "Title";

export const Default = () => (
  <div
    style={{
      width: "100%",
      height: "250px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <Tooltip
      title={text(labelText, defaultValueText, groupId)}
      placement={select(label, options, defaultValue, groupId)}
      open
    >
      <div
        style={{
          height: "60px",
          width: "60px",
          background: "var(--color-primary)",
          color: "var(--color-text-inverse)",
          textAlign: "center",
          lineHeight: "60px"
        }}
      >
        Child
      </div>
    </Tooltip>
  </div>
);
