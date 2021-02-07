import { UI_STUDENT_SIDEBAR, UI_NOTES_MODAL } from "../constants/action-types";

export function setStudentSideBar(payload) {
  return { type: UI_STUDENT_SIDEBAR, payload };
}

export function setNotesModal(payload) {
  return { type: UI_NOTES_MODAL, payload}
}
