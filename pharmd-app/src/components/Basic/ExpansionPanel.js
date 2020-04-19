import React from "react";
import styled, { css } from "styled-components/macro";
import tw from "tailwind.macro";
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

const ExpansionPanel = ({ SummaryChild, DetailChild, expand }) => {
  return (
    <ExpansionPanelC
      style={{ width: "100%" }}
      defaultExpanded={expand}
      square={true}
      elevation={0}
    >
      <ExpansionPanelSummary>{SummaryChild}</ExpansionPanelSummary>
      <ExpansionPanelDetailsMaterial>{DetailChild}</ExpansionPanelDetailsMaterial>
    </ExpansionPanelC>
  );
};

export default ExpansionPanel;
