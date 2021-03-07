import React from "react";
import { text } from "@storybook/addon-knobs";
import List from "@material-ui/core/List";
import ScoredListItem from "../components/Fields/ScoredListField/ScoredListItem";

const groupId = "GROUP-ID1";

const primaryText = "Primary";
const defaultPrimaryText = "Primary Text";

export const Loading = () => (
  <List>
    <ScoredListItem variant="primary" loading />
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
