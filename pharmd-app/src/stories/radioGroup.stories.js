import React from "react";
import tw from "twin.macro";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioButtonsGroup from "../components/Basic/Radio Controls/RadioButtonGroup";

export const Default = () => (
  <div tw="ml-25px mt-100px">
    <RadioButtonsGroup
      onChange={(event, newVal) => console.log("NEW VALUE", newVal)}
      label="Origin"
    >
      <FormControlLabel value="all" label="All" />
      <FormControlLabel value="domestic" label="Domestic" />
      <FormControlLabel value="international" label="International" />
    </RadioButtonsGroup>
  </div>
);
