import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { withDesign } from "storybook-addon-designs";
import Avatar from "../components/Basic/Avatar";
import imgProfile from "../assets/images/mountains.jpg";

export default {
  title: "Avatar",
  component: Avatar,
  decorators: [withKnobs, withDesign]
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

Default.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/QBWcVYJkF6K8o7WErRPsxd/Student-List-Mockups?node-id=15%3A39"
    }
  }
};

export const Image = () => <Avatar alt="Jose Saravia" imgUrl={imgProfile} />;
