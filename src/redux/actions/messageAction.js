import * as types from "../../types/Actiontypes";
export const fetchMessages = (listUserId) => {
    return {
        type: types.FETCH_MESSAGES,
        listUserId,
    };
};

