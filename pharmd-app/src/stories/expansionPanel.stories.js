import React from "react";
import ExpansionPanel from "../components/Basic/ExpansionPanel";

export const Default = () => (
  <ExpansionPanel
    SummaryChild={<p>TEST</p>}
    DetailChild={
      <p>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
        sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      </p>
    }
  />
);
