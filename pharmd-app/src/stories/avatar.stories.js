import React from "react";
import { withKnobs, select, text } from "@storybook/addon-knobs";
import Avatar from "../components/Basic/Avatar";
import imgProfile from "../assets/images/mountains.jpg";

export default {
  title: "Avatar",
  component: Avatar,
  decorators: [withKnobs]
};

const groupId = "GROUP-ID2";

const firstName = "First Name";
const defaultFirstName = "";

const lastName = "Last Name";
const defaultLastName = "";

export const Default = () => (
  <Avatar
    firstName={text(firstName, defaultFirstName, groupId)}
    lastName={text(lastName, defaultLastName, groupId)}
  />
);

export const Image = () => <Avatar alt={"Jose Saravia"} imgUrl={imgProfile} />;
