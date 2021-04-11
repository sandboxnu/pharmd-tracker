import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import tw from "twin.macro";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width: 300,
    maxWidth: 300
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: 2
  },
  noLabel: {
    marginTop: theme.spacing(3)
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const MultipleSelect = props => {
  const { onChange, label, error, children, className } = props;

  const classes = useStyles();
  const [value, setValue] = React.useState([]);

  const handleDelete = valueToDelete => {
    value.filter(val => val !== valueToDelete);
    setValue(value);
    onChange(value);
  };

  const handleChange = event => {
    setValue(event.target.value);
    onChange(event, event.target.value);
  };

  return (
    <FormControl
      component="fieldset"
      error={error}
      className={(classes.formControl, className)}
      tw="w-full"
    >
      <InputLabel id="demo-mutiple-chip-label">{label}</InputLabel>
      <Select
        labelId="demo-mutiple-chip-label"
        id="demo-mutiple-chip"
        multiple
        value={value}
        onChange={handleChange}
        input={<Input id="select-multiple-chip" />}
        variant="outlined"
        renderValue={selected => {
          return (
            <li className={classes.chips}>
              {selected.map(value => (
                <Chip
                  key={value}
                  label={`Cohort ${value.substring(2)}`}
                  className={classes.chip}
                  color="primary"
                  size="small"
                  onDelete={() => handleDelete(value)}
                />
              ))}
            </li>
          );
        }}
        MenuProps={MenuProps}
      >
        {children.map((child, index) => (
          <MenuItem
            key={index}
            value={child.props.value}
            css={[value.indexOf(child.props.value) !== -1 && tw`font-bold`]}
          >
            {child.props.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MultipleSelect;
