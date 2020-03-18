import React from "react";
import ToolTipMaterial from "@material-ui/core/Tooltip";
import styled, { css } from "styled-components/macro";
import tw from "tailwind.macro";
import Zoom from "@material-ui/core/Zoom";

/*
NOTE: Uses Portals to style component. 
The Portal provides a first-class way to render children 
into a DOM node that exists outside the DOM hierarchy of 
the parent component
*/
const TooltipStyled = styled(({ className, ...props }) => (
  <ToolTipMaterial {...props} classes={{ tooltip: className }} />
))`
  ${tw`py-2 px-4 rounded-lg fontStyle-2 text-white`}
  background-color: var(--color-bg-tooltip);
  font-weight: bold;

  .MuiTooltip-arrow {
    color: var(--color-bg-tooltip);
  }
`;

const Tooltip = ({ title, placement = "right", ...props }) => {
  return (
    <TooltipStyled
      arrow
      enterDelay={125}
      transition={Zoom}
      title={title}
      placement={placement}
      {...props}
    >
      {props.children}
    </TooltipStyled>
  );
};

export default Tooltip;
