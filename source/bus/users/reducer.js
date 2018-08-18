// Core
import { fromJS, List } from 'immutable';
// Types
import { type } from './types';

const initalState = List();

export const usersReducer = (state = initalState, action) => {
    switch (action.type) {
        case type.FILL_USERS:
            return fromJS(action.payload);

        case type.CLEAR_USERS:
            return state.clear();

        default:
            return state;
    }
};
