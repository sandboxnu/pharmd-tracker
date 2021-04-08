import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import tw, { styled, css } from "twin.macro";

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
  const inputProps = {
    component: src,
    titleAccess: accessibleTitle || undefined,
    htmlColor: htmlColor || undefined,
    color: htmlColor ? undefined : color
  };

  return <SVG component={src} fontSize={size} {...inputProps} />;
};

export default Icon;
