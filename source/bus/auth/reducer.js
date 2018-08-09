// Coer
import { Map } from 'immutable';
// Types
import { type } from './types';

const initalState = Map({
    isAuthenticated: false,
});

export const authReducer = (state = initalState, action) => {
    switch (action.type) {
        case type.AUTHENTICATE:
            return state.set('isAuthenticated', true);

        default:
            return state;
    }
};
