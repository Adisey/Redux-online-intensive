// Core
import { Map } from 'immutable';
// Types
import { type } from './types';

const initalState = Map({
    isAuthenticated: false,
    isInitialized:   false,
});

export const authReducer = (state = initalState, action) => {
    switch (action.type) {
        case type.AUTHENTICATE:
            return state.set('isAuthenticated', true);
        case type.INITIALIZE:
            return state.set('isInitialized', true);
        case type.LOGOUT:
            return state.set('isAuthenticated', false);
        default:
            return state;
    }
};
