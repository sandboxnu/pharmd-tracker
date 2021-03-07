// -------------------------- IMPORTS --------------------------

// Function Imports
import React, { useState } from "react";
import clsx from "clsx";

// Component Imports
import AutocompleteMaterial from "@material-ui/lab/Autocomplete";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";

// Style Imports
import { makeStyles, useTheme } from "@material-ui/core/styles";
import tw from "twin.macro";
import CheckboxButton from "./Checkbox Controls/CheckboxButton";

// -------------------------- COMPONENT --------------------------

const Autocomplete = ({ className, label, onChange, options, placeholder, ...props }) => {
  // const classes = useStyles();
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState();

  const onChangeFunc = (event, newValue) => {
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
      className={className}
      disableCloseOnSelect
      getOptionLabel={option => option.label}
      multiple
      options={options}
      renderInput={params => (
        <TextField
          {...params}
          value={inputValue}
          variant="standard"
          label={label}
          placeholder={placeholder}
          fullWidth
        />
      )}
      // renderOption={(option, { selected }) => (
      //   <React.Fragment>
      //     <CheckboxButton
      //       // icon={icon}
      //       // checkedIcon={checkedIcon}
      //       // style={{ marginRight: 8 }}
      //       onChange={onChange}
      //       checked={selected}/>
      //     {option.title}
      //   </React.Fragment>
      // )}
    />
  );
};

export default Autocomplete;
