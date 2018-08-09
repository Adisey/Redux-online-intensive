import { type } from "./types";

export const profileActions ={
    fillProfile: (profile) => {
        return {
            type:    type.FILL_PROFILE,
            payload: profile,
        };
    },
};
