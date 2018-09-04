// Core
import { fromJS, Map } from 'immutable';
// Types
import { types } from './types';

const initalState = Map();

export const notificationReducer = (state = initalState, action) => {
    switch (action.type) {
        case types.SHOW_NOTIFICATION:
            return fromJS(action.payload);

        case types.HIDE_NOTIFICATION:
            return initalState;

        default:
            return state;
    }
};
