import { type } from "./types";

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
};
