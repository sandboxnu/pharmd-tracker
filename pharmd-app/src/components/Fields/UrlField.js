import React from "react";
import tw, { styled } from "twin.macro";
import LaunchIcon from "@material-ui/icons/Launch";

// TODO: Be deleted
const Icon = styled(LaunchIcon)`
  ${tw`w-2 p-1`}
`;

const Field = styled.a`
  ${tw` no-underline text-primary`}
`;

const UrlField = ({ record = {}, source }) => (
  <Field href={record[source]}>
    {record[source]}
    <Icon />
  </Field>
);

export default UrlField;
