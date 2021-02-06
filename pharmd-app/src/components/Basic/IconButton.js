import React from "react";
import IconButtonMaterial from "@material-ui/core/IconButton";
import Icon from "./Icon";

const IconButton = ({ src, color = "tertiary" }) => {
  return (
    <IconButtonMaterial>
      <Icon src={src} color={color} accessibleTitle="Information Icon" />
    </IconButtonMaterial>
  );
};

export default IconButton;
