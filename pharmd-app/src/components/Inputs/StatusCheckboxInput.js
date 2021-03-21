import React from "react";
import { useInput } from "react-admin";
import CheckboxButtonGroup from "../Basic/Checkbox Controls/CheckboxButtonGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { STUDENT_STATUS } from '../../constants/apiObjects';

const StatusCheckboxInput = props => {
  const {
    meta: { error }
  } = useInput(props);

  return (
    <CheckboxButtonGroup
      onChange={props.onChange}
      label={props.label}
      color={props.color}
      error={error}
      className={props.className}
      checkboxClassName={props.checkboxClassName}
    >
      <FormControlLabel value={STUDENT_STATUS.ENROLLED} label="Enrolled" />
      <FormControlLabel value={STUDENT_STATUS.COOP} label="Co-op" />
      <FormControlLabel value={STUDENT_STATUS.GRADUATED} label="Graduated" />
      <FormControlLabel value={STUDENT_STATUS.LEAVE} label="Leave" />
      <FormControlLabel value={STUDENT_STATUS.DROP_BACK} label="Drop Back" />
    </CheckboxButtonGroup>
  );
};

export default StatusCheckboxInput;
