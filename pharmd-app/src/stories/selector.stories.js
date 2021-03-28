import React from "react";
import SelectorComponent from "../components/Form/Select";

export default {
  title: "Selector",
  component: SelectorComponent
};

const selectData = [
  { value: ["3", "5"], displayValue: "3" },
  { value: ["3", "6"], displayValue: "4" },
  { value: ["3", "8"], displayValue: "5" }
];

export const Default = () => (
  <SelectorComponent title="Type" selectItems={selectData} onChange={val => console.log(val)} />
);
