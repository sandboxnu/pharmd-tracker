import React from "react";
import AvatarMaterial from "@material-ui/core/Avatar";
import tw, { styled } from "twin.macro";
import Icon from "./Icon";
import Person from "../../assets/icons/person.svg";

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
`;

const Avatar = ({ firstName, lastName, imgUrl }) => {
  if (imgUrl) {
    const fullName = `${firstName} ${lastName}`;
    return <PictureStyled alt={fullName} src={imgUrl} />;
  }
  if (firstName) {
    const initials = `${firstName.charAt(0)}${lastName ? lastName.charAt(0) : ""}`;
    return <AvatarStyled>{initials}</AvatarStyled>;
  }
  return (
    <AvatarStyled>
      <Icon src={Person} />
    </AvatarStyled>
  );
};

export default Avatar;
