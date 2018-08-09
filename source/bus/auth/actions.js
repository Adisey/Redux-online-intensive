import { type } from "./types";

export const postsActions ={
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
