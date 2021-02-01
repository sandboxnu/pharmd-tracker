import React from "react";
import Avatar from "../Basic/Avatar";

const AvatarField = ({ record = {}, source }) => <Avatar primary imgUrl={record[source]} />;

export default AvatarField;
