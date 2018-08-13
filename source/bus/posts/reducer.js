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
import { type } from './types';

const initalState = List();

export const postsReducer = (state = initalState, action) => {
    switch (action.type) {
        case type.FILL_POSTS:
            return fromJS(action.payload);
        case type.CREATE_POST:
            return state.unshift(fromJS(action.payload));
        case type.CLEAR_POSTS:
            return state.clear();
        case type.REMOVE_POST:
            // console.log(`action.payload ->`, action.payload);
            // console.log(`state ->`, state);
            const newState = state.filter((post) => {
                // console.log(`post.id ->`, post.id);
                // console.log(`action.payload ->`, action.payload);
                return post.get('id') !== action.payload;
            });

            console.log(`newState ->`, newState);

            return newState;
        // ToDo: Реализовать удаление поста

        default:
            return state;
    }
};
