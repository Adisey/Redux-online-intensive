// Types
import { type } from './types';

const initalState = {};

export const reducer = (state = initalState, action) => {
    switch (action.type) {
        case type.TYPE:
            return state;

        default:
            return state;
    }
};
