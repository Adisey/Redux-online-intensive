import { type } from "./types";

export const profileActions ={
    // Sync
    fillProfile: (profile) => {
        return {
            type:    type.FILL_PROFILE,
            payload: profile,
        };
    },
    clearProfile: () => {
        return {
            type: type.CLEAR_PROFILE,
        };
    },
    // Async
    updateNameAsync: (newName) => {
        return {
            type:    type.UPDATE_NAME_ASYNC,
            payload: newName,
        };
    },
};
