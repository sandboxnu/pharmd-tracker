import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import { Filter } from "react-admin";
import StudentSearchInput from "../components/Inputs/StudentSearchInput";

export default {
  title: "Search Input",
  component: StudentSearchInput,
  decorators: [withKnobs]
};

const groupId = "GROUP-ID3";

const label = "Helper Text";
const defaultLabel = "Search";

export const Default = () => (
  <Filter>
    <StudentSearchInput
      label={text(label, defaultLabel, groupId)}
      source={"name_like"}
      parse={inputValue => `^${inputValue}`}
      onChange={() => Console.log()}
      alwaysOn
    />
  </Filter>
);
