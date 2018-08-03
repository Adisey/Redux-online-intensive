/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 03.08.2018
 * Time: 17:59
 */

//Core
import { fromJS, List } from 'immutable';

// Instruments
import { FILL_POSTS } from './types';

const initalState = List ();

export const postsReducer = (state = initalState, action) => {
    switch (action.type) {
        case FILL_POSTS:
            return fromJS (action.payload);

        default:
            return state;
    }
};

