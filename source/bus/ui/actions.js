import { type } from './types';

export const uiActions ={
    startFetching: () => {
        return {
            type: type.START_FETCHING,
        };
    },
    stopFetching: () => {
        return {
            type: type.STOP_FETCHING,
        };
    },
    setOnlineState: () => {
        return {
            type: type.SET_ONLINE_STATE,
        };
    },
    setOfflineState: () => {
        return {
            type: type.SET_OFFLINE_STATE,
        };
    },
    emitError: (error, meta = null) => {
        return {
            type:    type.EMIT_ERROR,
            payload: error,
            meta,
        };
    },
};
