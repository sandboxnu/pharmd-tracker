import React from "react";
import AvatarMaterial from "@material-ui/core/Avatar";
import styled from "styled-components/macro";
import tw from "tailwind.macro";
import Icon from "./Icon";
import Person from '../../assets/icons/person.svg'
// import { styled } from '@material-ui/core/styles';

const AvatarStyled = styled(AvatarMaterial)`
  ${tw`w-12 h-12`}
  &.MuiAvatar-colorDefault {
    ${tw``}
  }
`;

const PictureStyled = styled(AvatarMaterial)`
  display: block;
  height: 120px;
  width: 120px;
  margin-left: auto;
  margin-right: auto;
`

const Avatar = ({ firstName, lastName, imgUrl }) => {
  if (imgUrl) {
    let fullName = firstName + " " + lastName;
    return <PictureStyled alt={fullName} src={imgUrl}/>;
  } else if (firstName) {
    let initials = firstName.charAt(0) + `${lastName ? lastName.charAt(0) : ""}`;
    return <AvatarStyled>{initials}</AvatarStyled>;
  } else {
    return <AvatarStyled><Icon src={Person} /></AvatarStyled>;
  }
};

export default Avatar;
