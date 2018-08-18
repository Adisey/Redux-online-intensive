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
debugger;
const initalState = List();
debugger;

export const postsReducer = (state = initalState, action) => {
    switch (action.type) {
        case type.FILL_POSTS:
            return fromJS(action.payload);
        case type.CREATE_POST:
            return state.unshift(fromJS(action.payload));
        case type.CLEAR_POSTS:
            return state.clear();
        case type.REMOVE_POST:
            return state.filter((post) => post.get('id') !== action.payload);
        case type.LIKE_POST:
            return state.updateIn(
                [state.findIndex((post) => {
                    return post.get('id') === action.payload.postId;
                }),
                'likes'
                ],
                (likes) => {
                    return likes.unshift(action.payload.liker);
                }
            );
        case type.UNLIKE_POST:
            return state.updateIn(
                [state.findIndex((post) => {
                    return post.get('id') === action.payload.postId;
                }),
                'likes'
                ],
                (likes) => {
                    return likes.filter((like) => like.get('id') !== action.payload.liker);
                    //
                }
            );
        default:
            return state;
    }
};