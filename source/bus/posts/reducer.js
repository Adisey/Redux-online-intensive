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
            console.log(`state ->`, state);
            console.log(`action.payload ->`, action.payload);
            state.map((post) =>{
                // debugger;
                console.log(`post ->`, post);
                post.map((el)=>{
                    console.log(`el ->`, el);
                });
            });
            // const newState = state.filter(({post})=> post.id !== action.payload);
            // console.log(`newState ->`, newState);
            return state;
            //return state.unshift(fromJS(action.payload));
            // ToDo: Реализовать удаление поста

        default:
            return state;
    }
};
