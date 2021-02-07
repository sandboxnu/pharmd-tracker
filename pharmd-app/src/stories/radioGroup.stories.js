import React from "react";
import { withKnobs, select, text } from "@storybook/addon-knobs";
import RadioButtonsGroup from "../components/Basic/Radio Controls/RadioButtonGroup";
import tw from "twin.macro";

export default {
  title: "Radio Button",
  component: RadioButtonsGroup
};
import FormControlLabel from "@material-ui/core/FormControlLabel";
// const groupId = "GROUP-ID2";

// const firstName = "First Name";
// const defaultFirstName = "";

// const lastName = "Last Name";
// const defaultLastName = "";

export const Default = () => (
  <div tw="ml-25px mt-100px">
    <RadioButtonsGroup
      onChange={(event, newVal) => console.log("NEW VALUE", newVal)}
      label={"Origin"}
    >
      <FormControlLabel value="all" label="All" />
      <FormControlLabel value="domestic" label="Domestic" />
      <FormControlLabel value="international" label="International" />
    </RadioButtonsGroup>
  </div>
);
