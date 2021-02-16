import React from "react";
import tw, { styled } from "twin.macro";
import ExpansionPanelMaterial from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummaryMaterial from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetailsMaterial from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const ExpansionPanelC = styled(ExpansionPanelMaterial)`
  ::before {
    height: 0;
  }
`;

const ExpansionPanelSummary = styled(ExpansionPanelSummaryMaterial)`
  ${tw`p-0 m-0`}

  .MuiExpansionPanelSummary-content {
    ${tw`m-0`}
  }
`;

const ExpansionPanelDetails = styled(ExpansionPanelDetailsMaterial)`
  ${tw`flex-col py-0`}
`;

const ExpansionPanel = ({ SummaryChild, DetailChild, defaultExpanded, expanded, onChange }) => {
  return (
    <ExpansionPanelC
      tw="w-full"
      defaultExpanded={defaultExpanded}
      square={true}
      elevation={0}
      expanded={expanded}
      onChange={onChange}
    >
      <ExpansionPanelSummary>{SummaryChild}</ExpansionPanelSummary>
      <ExpansionPanelDetails>{DetailChild}</ExpansionPanelDetails>
    </ExpansionPanelC>
  );
};

export default ExpansionPanel;
