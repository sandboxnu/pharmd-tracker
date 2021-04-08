import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { MemoryRouter } from "react-router";
import AppBar from "../components/Nav/AppBar";

export default {
  title: "AppBar",
  component: AppBar,
  decorators: [withKnobs]
};

export const Default = () => (
  <MemoryRouter initialEntries={["/posts/3"]} initialIndex={0}>
    <AppBar children={<div />} />
  </MemoryRouter>
);
