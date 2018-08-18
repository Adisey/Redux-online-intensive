import { type } from "./types";

export const usersActions ={
    // Sync
    fillUsers: (users) => {
        return {
            type:    type.FILL_USERS,
            payload: users,
        };
    },
    clearUsers: () => {
        return {
            type: type.CLEAR_USERS,
        };
    },
    // Async
    fetchUsersAsync: () => {
        return {
            type: type.FETCH_USERS_ASYNC,
        };
    },
};
