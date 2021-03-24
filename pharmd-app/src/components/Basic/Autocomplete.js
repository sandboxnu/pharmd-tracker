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
    isOptionSelected,
    label,
    onChange,
    options,
    placeholder,
    popupIcon,
    tagClassName
  } = props;

  // the state to keep track of text that is typed into the input text field
  const [inputValue, setInputValue] = useState("");

  // the state the keep track of the options that have been selected (this is an array object)
  const [value, setValue] = useState([]);

  // updates the list of tags that have been added
  const onChangeFunc = (event, newValue) => {
    setValue(newValue);
    onChange(event, newValue);
  };

  // display placeholder only if there are no lists added or if there is no text input
  const placeholderOutput = () => {
    if (value != null && value.length > 0) {
      return undefined;
    }
    return placeholder;
  };

  return (
    <AutocompleteMaterial
      value={value}
      onChange={onChangeFunc}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      classes={{
        root: classes.root,
        endAdornment: classes.endAdornment,
        listbox: classes.listbox,
        noOptions: classes.noOptions,
        option: classes.option,
        paper: classes.paper,
        popper: classes.popper,
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
          value={inputValue}
          variant="outlined"
          label={label}
          placeholder={placeholderOutput()}
          fullWidth
        />
      )}
      renderTags={(tagValue, getTagProps) => {
        return tagValue.map((option, index) => (
            <FilterChip
                {...getTagProps(index)}
                className={tagClassName}
                label={option.label}
            />
        ));
      }}
    />
  );
};

export default Autocomplete;
