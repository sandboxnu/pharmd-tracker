import React from "react";
import ChipField from "../components/Fields/ChipField";
import EmphasisField from "../components/Fields/EmphasisField";
import TextField from "../components/Fields/TextField";
import CohortField from "../components/Fields/CohortField";
import { withKnobs, select, text } from "@storybook/addon-knobs";
import { withDesign } from "storybook-addon-designs";
import tw from "twin.macro";

export default {
  title: "Table Cells",
  component: ChipField,
  decorators: [
    withKnobs,
    withDesign,
    storyFn => <div tw="p-16px">{storyFn()}</div>
  ]
};

const label = "Status";
const options = {
  Enrolled: "enrolled",
  Dropback: "dropback",
  Leave: "leave",
  Gradutated: "graduated",
  Coop: "coop"
};
const defaultValue = "enrolled";
const groupId = "GROUP-ID1";

const labelText = "Cell Text";
const defaultLabel = "BOLD TEXT";

export const StatusChip = () => (
  <ChipField
    record={{ status: select(label, options, defaultValue, groupId) }}
    source={"status"}
  ></ChipField>
);

StatusChip.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/QBWcVYJkF6K8o7WErRPsxd/Student-List-Mockups?node-id=806%3A0"
    }
  }
};

export const EmphasisCell = () => (
  <EmphasisField
    record={{ data: text(labelText, defaultLabel, groupId) }}
    source={"data"}
  ></EmphasisField>
);

EmphasisCell.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/QBWcVYJkF6K8o7WErRPsxd/Student-List-Mockups?node-id=31%3A40"
    }
  }
};
