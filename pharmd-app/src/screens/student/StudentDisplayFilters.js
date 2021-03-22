/**
 * Description:
 * This Component creates a multi select drop down / text input to filter Student data based on GPA.
 * This component also allows the user to type in the option they are looking for to filter the options.
 *
 * Date: 03-18-2021
 */

// -------------------------- IMPORTS --------------------------
// Function Imports
import React from "react";

// Component Imports
import Chip from "@material-ui/core/Chip";

// -------------------------- COMPONENT --------------------------

const StudentDisplayFilters = ({ deleteFilter, filterValues, ...props }) => {
  // cohort {current: [] }
  // gpa_gte: float
  // gpa_lte: float
  // international: bool
  // status: []
  let numStatusFilters = 0;
  let hasGPAFilters = false;
  let numCohortFilters = 0;
  let internationalFilter = null;

  if ("cohort" in filterValues) {
    numCohortFilters = filterValues["cohort"]["current"].length;
  }

  if ("gpa_gte" in filterValues || "gpa_lte" in filterValues) {
    hasGPAFilters = filterValues["gpa_gte"] > 0 || filterValues["gpa_lte"] < 4;
  }

  if ("international" in filterValues) {
    internationalFilter = filterValues["international"];
  }

  if ("status" in filterValues) {
    numStatusFilters = filterValues["status"].length;
  }

  console.log("internationalFilter");
  console.log(internationalFilter);
  const displayInternationalFilter = () => {
    if (internationalFilter != null) {
      if (internationalFilter) {
        // filters for international
        return <Chip
          deleteIcon={deleteIcon}
          label={International}
          onDelete={}
        />
      } else {
        // filters for domestic
        return <Chip
          deleteIcon={deleteIcon}
          label={Domestic}
          onDelete={}
        />
      }
    }
  };

  return (
    <div>
      <p>Status: {numStatusFilters}</p>
      {hasGPAFilters && <p>GPA:</p>}
      <p>Cohort: {numCohortFilters}</p>
      {internationalFilter != null && <p> International Filter</p>}
    </div>
  );
};

export default StudentDisplayFilters;
