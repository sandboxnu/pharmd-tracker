import React from "react";
import AvatarMaterial from "@material-ui/core/Avatar";
import styled from "styled-components/macro";
import tw from "tailwind.macro";
// import { styled } from '@material-ui/core/styles';

const AvatarStyled = styled(AvatarMaterial)`
  ${tw`w-12 h-12`}

  &.MuiAvatar-colorDefault {
    ${tw``}
  }
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
