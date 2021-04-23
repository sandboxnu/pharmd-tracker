import { UI_NOTES_MODAL } from "../constants/action-types";

export function setNotesModal(payload) {
  return { type: UI_NOTES_MODAL, payload}
}
