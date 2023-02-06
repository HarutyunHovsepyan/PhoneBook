import { PhoneState } from "./state";
import { ADD_PHONE, ALL_PHONE, DELETE_PHONE, EDIT_PHONE, GET_PHONE } from "./type";

const PhoneReducer = (state = PhoneState, action) => {
    switch (action.type) {
        case ADD_PHONE:
            state.phones = action.phones
            break;
        case ALL_PHONE:
            state.phones = action.phones
            break;
        case GET_PHONE:
            state.phones = action.phones
            break;
        case DELETE_PHONE:
            state.phones = action.payload
            break;
        case EDIT_PHONE:
            state.phones = action.phones
            break;
        default:
            break;
    }
    return { ...state }
}
export default PhoneReducer