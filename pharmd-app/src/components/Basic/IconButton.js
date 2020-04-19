import React, { useRef } from "react";
import Icon from "./Icon";
import Tooltip from "./Tooltip";
import IconButtonMaterial from "@material-ui/core/IconButton";

const IconButton = ({ src, color = "tertiary" }) => {
  return (
    <IconButtonMaterial>
      <Icon src={src} color={color} accessibleTitle={"Information Icon"} />
    </IconButtonMaterial>
  );
};

export default IconButton;
