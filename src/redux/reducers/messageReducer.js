import * as types from "../../types/Actiontypes";
import initialState from "./../initialState/initialState";
export default function message(state = initialState.message, action) {
    let newState;
    switch (action.type) {
        case types.FETCH_MESSAGES_SUCCESS: {
            // console.log(action.listMessages, "newstate")
            // console.log(typeof state, "state")

            newState = [...state.listMessages, ...action.listMessages];
            // console.log(newState, "newstate")
            return { listMessages: newState }
        }
        case types.FETCH_MESSAGES_SUCCESS: {
            return { ...state }
        }
        default: {
            return { ...state };
        }
    }
}
