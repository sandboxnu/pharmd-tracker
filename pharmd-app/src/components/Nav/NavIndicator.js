import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import tw from "tailwind.macro";

const Indicator = styled.div`
  ${tw`w-1 h-24 absolute rounded-l`}

  background: ${props => props.theme.palette.primary.main};
  left: 92px;
  right: 0%;
  top: ${props => props.top}px;
  bottom: 0%;
  transition: top 0.3s ease-in-out;
`;

const NavIndicator = ({ index = 0, prevIndex }) => {
  const h = 96;
  return <Indicator top={index * h} />;
};

export default NavIndicator;
