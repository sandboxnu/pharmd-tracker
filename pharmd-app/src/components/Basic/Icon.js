import React, { useRef } from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import styled, { css } from "styled-components/macro";
import tw from "tailwind.macro";

// NEED TO REMOVE FILL PROP FRO PATH FOR EACH ICON - Still trying to find a solution

const SVG = styled(SvgIcon)`

transition: color 0.5s ease;

	&.MuiSvgIcon-colorDisabled {
		${tw`text-gray-400`}
	}

	&.MuiSvgIcon-colorAction {
		${tw`text-gray-600`}
	}

	${props =>
    props.color === "tertiary" &&
    css`
      color: ${props => props.theme.palette.tertiary.main};
    `}

	${props =>
    props.color === "black" &&
    css`
      color: #333;
    `}

	${props =>
    props.color === "white" &&
    css`
      color: #fff;
    `}
`;

const Icon = ({ src, color = "inherit", size = "default", accessibleTitle, htmlColor }) => {
  // Conditional logic to determine props to pass down

  var inputProps = {
    component: src,
    titleAccess: accessibleTitle ? accessibleTitle : undefined,
    htmlColor: htmlColor ? htmlColor : undefined,
    color: htmlColor ? undefined : color
  };

  // spread declaration to add props
  return <SVG component={src} fontSize={size} {...inputProps}></SVG>;
};

export default Icon;
