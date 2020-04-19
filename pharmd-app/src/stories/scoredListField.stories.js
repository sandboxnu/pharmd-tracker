import React from "react";
import { withKnobs, select, text } from "@storybook/addon-knobs";
import ScoredListField from "../components/Fields/ScoredListField/ScoredListField";
import ScoredListItem from "../components/Fields/ScoredListField/ScoredListItem";
import List from "@material-ui/core/List";
export default {
  title: "Scored List",
  component: ScoredListField,
  decorators: [withKnobs]
};

const groupId = "GROUP-ID1";

const primaryText = "Primary";
const defaultPrimaryText = "Primary Text";

export const Loading = () => (
  <List>
    <ScoredListItem variant="primary" loading />
  </List>
);

export const Error = () => (
  <List>
    <ScoredListItem variant="primary" error errorText="No Data" />
  </List>
);

export const Primary = () => (
  <List>
    <ScoredListItem
      variant="primary"
      primaryText={text(primaryText, defaultPrimaryText, groupId)}
      value={90}
      divider
    />
  </List>
);

export const Secondary = () => (
  <List>
    <ScoredListItem
      variant="primary"
      primaryText="Primary Text"
      secondaryText="Secondary Text"
      value={90}
    />
  </List>
);
