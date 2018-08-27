import { type } from "./types";

export const profileActions ={
    // Sync
    fillProfile: (profile) => {
        return {
            type:    type.FILL_PROFILE,
            payload: profile,
        };
    },
    updateAvatar: (newAvatarUrl) => {
        return {
            type:    type.UPDATE_AVATAR,
            payload: newAvatarUrl,
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
    updateAvatarAsync: (newAvatar) => {
        return {
            type:    type.UPDATE_AVATAR_ASYNC,
            payload: newAvatar,
        };
    },
    updatePasswordAsync: (password) => {
        return {
            type:    type.UPDATE_PASSWORD_ASYNC,
            payload: password,
        };
    },
};
