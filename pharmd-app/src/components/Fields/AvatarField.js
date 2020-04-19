import React from "react";
import styled from "styled-components/macro";
import tw from "tailwind.macro";
import Avatar from "../Basic/Avatar";

const AvatarField = ({ record = {}, source }) => <Avatar primary imgUrl={record[source]} />;

export default AvatarField;
