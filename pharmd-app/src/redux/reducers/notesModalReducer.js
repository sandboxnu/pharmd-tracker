import { UI_NOTES_MODAL} from "../constants/action-types";

export default (previousState = false,  {type, payload}) => {
    if (type === UI_NOTES_MODAL) {
        return payload.isOpen
    }
    return previousState;
}