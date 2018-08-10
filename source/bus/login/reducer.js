// Core
import { Map } from 'immutable';
// Types
import { type } from './types';

const initalState = Map({
    isAuthenticated: false,
});

export const loginReducer = (state = initalState, action) => {
    switch (action.type) {
        case type.LOGIN:
            return state.set('isAuthenticated', true);

        default:
            return state;
    }
};
