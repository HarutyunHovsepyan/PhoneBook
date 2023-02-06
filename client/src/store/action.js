import { ALL_PHONE, DELETE_PHONE } from "./type"

export const allPhone = (phones) => {
    return {
        type: ALL_PHONE,
        phones: phones
    }
}

export const delTasks = (data) => {
    return {
        type: DELETE_PHONE,
        payload: data
    }
}