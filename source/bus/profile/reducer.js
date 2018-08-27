// Core
import { Map } from 'immutable';
// Types
import { type } from './types';

const initalState = Map({
    id:        '',
    firstName: '',
    lastName:  '',
    avatar:    '',
    token:     '',
});

export const profileReducer = (state = initalState, action) => {
    switch (action.type) {
        case type.FILL_PROFILE:
            return state.merge(action.payload);

        case type.UPDATE_AVATAR:
            return state.set('avatar', action.payload);

        case type.CLEAR_PROFILE:
            return state.clear();

        default:
            return state;
    }
};
