import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import styled, { css } from "styled-components/macro";
import tw from "tailwind.macro";

const SVG = styled(SvgIcon)`
    vertical-align: middle;
	${props =>
    props.color === "grey" &&
    css`
      color: ${props => props.theme.palette.tertiary.main};
    `}

	${props =>
    props.color === "black" &&
    css`
      color: black;
    `}
    
    ${props => props.primary && css`
    margin-left: auto;
    `}
`;

const NoteIcon = ({ src, color = "inherit", size, htmlColor, isPrimary }) => {
    // Conditional logic to determine props to pass down

    var inputProps = {
        component: src,
        htmlColor: htmlColor ? htmlColor : undefined,
        color: htmlColor ? undefined : color
    };

    // spread declaration to add props
    return <SVG primary={isPrimary} component={src} fontSize={size} {...inputProps}></SVG>;
};

export default NoteIcon;