import React from "react";
import ChipField from "../components/Fields/ChipField";

export default {
  title: "Chip",
  component: ChipField
};

const studentData = {
  id: "1",
  status: "coop"
};

export const CoOp = () => <ChipField record={{ status: "coop" }} source={"status"}></ChipField>;

export const Enrolled = () => (
  <ChipField record={{ status: "enrolled" }} source={"status"}></ChipField>
);

export const DropOut = () => (
  <ChipField record={{ status: "dropout" }} source={"status"}></ChipField>
);

export const Leave = () => (
  <ChipField record={{ status: "leave" }} source={"status"}></ChipField>
);

export const Graduated = () => (
  <ChipField record={{ status: "graduated" }} source={"status"}></ChipField>
);
