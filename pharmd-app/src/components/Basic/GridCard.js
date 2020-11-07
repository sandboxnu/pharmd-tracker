/**
 * Description:
 * This component is a grid ccaard used for layouts
 * TODO:
 *      - Add heigh adjustment
 * Date: 04-23-2020
 */

//-------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";
import PropTypes from "prop-types";

// Component Imports
import MuiPaper from "@material-ui/core/Paper";
import MuiGrid from "@material-ui/core/Grid";

// Style Imports
import tw, { styled } from "twin.macro";

//-------------------------- STYLE --------------------------

const GridItem = styled(MuiGrid)`
  transition: all cubic-bezier(0.4, 0, 0.6, 1) 0.195s;
`;

const Paper = styled(MuiPaper)`
  ${tw`rounded-xl h-64 w-64 shadow-cardLight`}
`;

//-------------------------- COMPONENT --------------------------

const GridCard = (xs, mdFull, mdShrink, isShrunk, { ...props }) => (
  <GridItem item xs={xs} md={isShrunk ? mdShrink : mdFull}>
    <Paper>{props.children}</Paper>
  </GridItem>
);

GridCard.defaultProps = {
  xs: 12,
  mdFull: 3,
  mdShrink: 4,
  isShrunk: false
};

GridCard.propTypes = {
  xs: PropTypes.number,
  mdFull: PropTypes.number,
  mdShrink: PropTypes.number,
  isShrunk: PropTypes.bool
};

export default GridCard;
