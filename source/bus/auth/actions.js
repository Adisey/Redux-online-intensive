import { type } from "./types";

export const authAction ={
    //Sync
    authenticate: () => {
        return {
            type: type.AUTHENTICATE,
        };
    },
    // Async
    signupAsync: (userData) => {
        return {
            type:    type.SIGNUP_ASYNC,
            payload: userData,
        };
    },
};
