import React, { useRef } from "react";
import Icon from "./Icon";
import Tooltip from "./Tooltip";

const InfoIcon = ({ src, text, type = "error", size = "small" }) => {
  return (
    <Tooltip title={text} placement="top">
      <div>
        <Icon src={src} color={type} size={size} accessibleTitle={"Information Icon"} />
      </div>
    </Tooltip>
  );
};

export default InfoIcon;
