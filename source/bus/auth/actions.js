import { type } from './types';

export const authAction ={
    //Sync
    authenticate: () => {
        return {
            type: type.AUTHENTICATE,
        };
    },
    initialialze: () => {
        return {
            type: type.INITIALIZE,
        };
    },
    logout: () => {
        return {
            type: type.LOGOUT,
        };
    },
    // Async
    signupAsync: (userData) => {
        return {
            type:    type.SIGNUP_ASYNC,
            payload: userData,
        };
    },
    loginAsync: (userData) => {
        return {
            type:    type.LOGIN_ASYNC,
            payload: userData,
        };
    },
    authenticateAsync: (userData) => {
        return {
            type:    type.AUTHENTICATE_ASYNC,
            payload: userData,
        };
    },
    initializedAsync: () => {
        return {
            type: type.INITIALIZE_ASYNC,
        };
    },
    logoutAsync: () => {
        return {
            type: type.LOGOUT_ASYNC,
        };
    },
};
