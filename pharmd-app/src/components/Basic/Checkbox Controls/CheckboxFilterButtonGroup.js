/**
 * Description:
 * This Component creates a group of filter checkbox buttons.
 * Has the same functionality as CheckboxButtonGroup component, but checkboxes apply filters
 *     when checked.
 *
 * Date: 02-18-2021
 */

// -------------------------- IMPORTS --------------------------

// Function Imports
import React from "react";

// Component Imports
import CheckboxButtonGroup from "./CheckboxButtonGroup";

// -------------------------- COMPONENT --------------------------
const CheckboxFilterButtonGroup = props => {
  const {
    checkboxCheckedClass,
    checkboxClassName,
    children,
    className,
    color,
    error,
    formGroupClassName,
    label,
    onChange,
    showLabel,
  } = props;

  const [filters, setFilters] = React.useState([]);

  // Keeps tracks of filters that have been applied and gives onChange function an updated array
  //     of filters along with the event (when the checkbox was checked/unchecked).
  const handleChange = event => {
    const filter = event.target.value;
    const filterIndex = filters.indexOf(filter);
    if (event.target.checked) {
      if (filterIndex < 0) {
        // If the checkbox was checked and the value is not in our array of filter values then add the value to the array
        filters.push(filter);
        console.log("Status Value added: ", filter);
      }
    } else if (filterIndex >= 0) {
      // If the checkbox was unchecked and the value is in our array of filter values then remove the value from the array
      filters.splice(filterIndex, 1);
      console.log("Status Value removed: ", filter, " at index ", filterIndex);
    }
    // Finally, update the filter values and call the onChange function with the new list
    setFilters(filters);
    console.log("Status Value: ", filters);
    onChange(event, filters);
  };

  return (
    <CheckboxButtonGroup
      checkboxCheckedClass={checkboxCheckedClass}
      checkboxClassName={checkboxClassName}
      children={children}
      color={color}
      className={className}
      error={error}
      formGroupClassName={formGroupClassName}
      label={label}
      onChange={handleChange}
      showLabel={showLabel}
    />
  );
};

export default CheckboxFilterButtonGroup;
