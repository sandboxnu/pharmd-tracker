import { UI_STUDENT_SIDEBAR } from "../constants/action-types";

// in src/studentSideBarReducer.js
export default (previousState = false, { type, payload }) => {
  if (type === UI_STUDENT_SIDEBAR) {
    return payload.isOpen;
  }
  return previousState;
};