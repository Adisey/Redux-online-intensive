// Core
import { Map } from 'immutable';
// Types
import { type } from './types';

const initalState = Map({
    isFetching: false,
    isOnline:   false,
});

export const uiReducer = (state = initalState, action) => {
    switch (action.type) {
        case type.START_FETCHING:
            return state.set('isFetching', true);

        case type.STOP_FETCHING:
            return state.set('isFetching', false);

        case type.SET_ONLINE_STATE:
            return state.set('isOnline', true);

        case type.SET_OFFLINE_STATE:
            return state.set('isOnline', false);

        default:
            return state;
    }
};
