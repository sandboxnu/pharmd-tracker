import React from "react";
import { withKnobs, select, text } from "@storybook/addon-knobs";
import AppBar from "../components/Nav/AppBar";
import { MemoryRouter } from "react-router";

export default {
  title: "AppBar",
  component: AppBar,
  decorators: [withKnobs]
};

const groupId = "GROUP-ID2";

const firstName = "First Name";
const defaultFirstName = "";

const lastName = "Last Name";
const defaultLastName = "";

export const Default = () => (
  <MemoryRouter initialEntries={["/posts/3"]} initialIndex={0}>
    <AppBar children={<div></div>} />
  </MemoryRouter>
);
