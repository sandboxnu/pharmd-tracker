import React, { useRef } from "react";
import AvatarMaterial from "@material-ui/core/Avatar";
import styled, { css } from "styled-components/macro";
import tw from "tailwind.macro";

const AvatarStyled = styled(AvatarMaterial)`
  width: 48px;
  height: 48px;
`;

const Avatar = ({ firstName, lastName, imgUrl }) => {
  if (imgUrl) {
    let fullName = firstName + " " + lastName;
    return <AvatarStyled alt={fullName} src={imgUrl}></AvatarStyled>;
  } else if (firstName) {
    let initials = firstName.charAt(0) + `${lastName ? lastName.charAt(0) : ""}`;
    return <AvatarStyled>{initials}</AvatarStyled>;
  } else {
    return <AvatarStyled>?</AvatarStyled>;
  }
};

export default Avatar;
