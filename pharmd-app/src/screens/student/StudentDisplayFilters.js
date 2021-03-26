/**
 * Description:
 * This Component creates a list of chips to display which student filter is in use.
 * These chips have a close icon that when clicked will remove the respective filter and reset the respective filter
 *     component.
 *
 * Date: 03-25-2021
 */

// -------------------------- IMPORTS --------------------------
// Function Imports
import React from "react";

// Component Imports
import FilterChip from "../../components/Basic/FilterChip";

// Style Imports
import { withStyles } from "@material-ui/core/styles";
import tw from "twin.macro";

// -------------------------- STYLE --------------------------

const Chip = withStyles({
  root: {
    backgroundColor: "#2B2B90",
    fontSize: "1rem",
    marginRight: ".3rem",
    marginBottom: ".3rem",
    // when clicked or hovered on nothing changes
    "&:hover, &:focus, &:active": {
      backgroundColor: "#2B2B90"
    }
  }
})(FilterChip);

// -------------------------- COMPONENT --------------------------

const StudentDisplayFilters = ({
  deleteFilter,
  filterValues,
  setAutocompleteInputValue,
  setAutocompleteValue,
  setFilter,
  setOriginCheckedLabels,
  setRangeValue,
  setStatusCheckedLabels,
  ...props
}) => {
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
    numCohortFilters = filterValues.cohort.current.length;
  }

  if ("gpa_gte" in filterValues || "gpa_lte" in filterValues) {
    hasGPAFilters = filterValues.gpa_gte > 0 || filterValues.gpa_lte < 4;
  }

  if ("international" in filterValues) {
    internationalFilter = filterValues.international;
  }

  if ("status" in filterValues) {
    numStatusFilters = filterValues.status.length;
  }

  // reset filter and filter component functions

  const resetStatusValues = () => {
    deleteFilter("status");
    // this state variable is linked to the status filter component
    setStatusCheckedLabels([]);
  };

  const resetGPAValues = () => {
    setFilter("gpa_gte", 0);
    setFilter("gpa_lte", 4);
    // this state variable is linked to the GPA filter component
    setRangeValue([0, 4]);
  };

  const resetCohortValue = () => {
    setFilter("cohort[current]", []);
    // these state variable are linked to the cohort filter component
    setAutocompleteInputValue("");
    setAutocompleteValue([]);
  };

  const resetInternationalValues = () => {
    // this state variable is linked to the international filter component
    deleteFilter("international");
    setOriginCheckedLabels([]);
  };

  // Create International filter chip
  // Displays which filter is on: Domestic or International
  const displayInternationalFilter = () => {
    if (internationalFilter != null) {
      let label = "";
      if (internationalFilter) {
        // filters for international
        label = "International";
      } else {
        // filters for domestic
        label = "Domestic";
      }

      return (
        <Chip
          label={label}
          onDelete={() => {
            resetInternationalValues();
          }}
        />
      );
    }
  };

  return (
    <div tw="mt-8">
      {numStatusFilters > 0 && (
        <Chip
          label={`Status ${numStatusFilters}`}
          onDelete={() => {
            resetStatusValues();
          }}
        />
      )}
      {hasGPAFilters && (
        <Chip
          label="GPA"
          onDelete={() => {
            resetGPAValues();
          }}
        />
      )}
      {numCohortFilters > 0 && (
        <Chip
          label={`Cohort ${numCohortFilters}`}
          onDelete={() => {
            resetCohortValue();
          }}
        />
      )}
      {internationalFilter != null && displayInternationalFilter()}
    </div>
  );
};

export default StudentDisplayFilters;
