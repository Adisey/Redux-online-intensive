import { type } from "./types";

export const loginActions ={
    //Sync
    authenticatel: () => {
        return {
            type: type.AUTHENTICATEL,
        };
    },
    // Async
    loginAsync: (userData) => {
        console.log(`userrData ->`, userData);
        return {
            type:    type.LOGIN_ASYNC,
            payload: userData,
        };
    },
};

