// -------------------------- IMPORTS --------------------------

// Function Imports
import React, { useState } from "react";
import clsx from "clsx";

// Component Imports
import AutocompleteMaterial from "@material-ui/lab/Autocomplete";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import OutlinedInput from '@material-ui/core/OutlinedInput';

// Style Imports
import { makeStyles, useTheme } from "@material-ui/core/styles";
import tw from "twin.macro";
import CheckboxButton from "./Checkbox Controls/CheckboxButton";

// -------------------------- COMPONENT --------------------------

const Autocomplete = ({ classes, className, deleteIcon, inputClassName, isOptionSelected, label, onChange, options, placeholder, popupIcon, tagClassName, ...props }) => {
  // const classes = useStyles();
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState();

  const onChangeFunc = (event, newValue) => {
    console.log('Autocomplete values');
    console.log(newValue);
    setValue(newValue);
    onChange(event, newValue);
  };

  return (
    <AutocompleteMaterial
      value={value}
      onChange={onChangeFunc}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      // className={className}
      classes={{
        root: className,
        endAdornment: classes.endAdornment,
        option: classes.option,
        popper: classes.popper,
        listbox: classes.listbox,
        paper: classes.paper
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
          placeholder={placeholder}
          fullWidth
        />
      )}
      renderTags={(tagValue, getTagProps) => {
        return tagValue.map((option, index) => (
          <Chip {...getTagProps(index)} className={tagClassName} deleteIcon={deleteIcon} label={option.label} />
        ));
      }}
    />
  );
};

export default Autocomplete;
