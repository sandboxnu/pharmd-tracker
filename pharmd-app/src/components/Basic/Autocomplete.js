// -------------------------- IMPORTS --------------------------

// Function Imports
import React, { useState } from "react";

// Component Imports
import AutocompleteMaterial from "@material-ui/lab/Autocomplete";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import FilterChip from "./FilterChip";

// -------------------------- COMPONENT --------------------------

const Autocomplete = props => {
  const {
    classes,
    inputClassName,
    inputValue,
    isOptionSelected,
    label,
    onChange,
    options,
    placeholder,
    popupIcon,
    setInputValue,
    setValue,
    tagClassName,
    value
  } = props;

  // the state to keep track of text that is typed into the input text field
  let autocompleteInputValue;
  let setAutocompleteInputValue;

  if (inputValue == null || setInputValue == null) {
    // Values were not given
    [autocompleteInputValue, setAutocompleteInputValue] = useState("");
  } else {
    // use the variables givens
    autocompleteInputValue = inputValue;
    setAutocompleteInputValue = setInputValue;
  }

  // the state the keep track of the options that have been selected (this is an array object)
  let autocompleteValue;
  let setAutocompleteValue;

  if (value == null || setValue == null) {
    // Values were not given
    [autocompleteValue, setAutocompleteValue] = useState([]);
  } else {
    // use the variables givens
    autocompleteValue = value;
    setAutocompleteValue = setValue;
  }

  // updates the list of tags that have been added
  const onChangeFunc = (event, newValue) => {
    setAutocompleteValue(newValue);
    onChange(event, newValue);
  };

  // display placeholder only if there are no lists added or if there is no text input
  const placeholderOutput = () => {
    if (autocompleteValue != null && autocompleteValue.length > 0) {
      return undefined;
    }
    return placeholder;
  };

  return (
    <AutocompleteMaterial
      value={autocompleteValue}
      onChange={onChangeFunc}
      inputValue={autocompleteInputValue}
      onInputChange={(event, newInputValue) => {
        setAutocompleteInputValue(newInputValue);
      }}
      classes={{
        root: classes.root,
        endAdornment: classes.endAdornment,
        listbox: classes.listbox,
        noOptions: classes.noOptions,
        option: classes.option,
        paper: classes.paper,
        popper: classes.popper
      }}
      disableCloseOnSelect
      getOptionLabel={option => option.label}
      getOptionSelected={isOptionSelected}
      multiple
      options={options}
      popupIcon={popupIcon}
      renderInput={params => (
        <TextField
          {...params}
          className={inputClassName}
          value={autocompleteInputValue}
          variant="outlined"
          label={label}
          placeholder={placeholderOutput()}
          fullWidth
        />
      )}
      renderTags={(tagValue, getTagProps) => {
        return tagValue.map((option, index) => (
          <FilterChip {...getTagProps(index)} className={tagClassName} label={option.label} />
        ));
      }}
    />
  );
};

export default Autocomplete;
